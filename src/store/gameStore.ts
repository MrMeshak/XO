import create from 'zustand';
import { checkBoardState, makeMoveMiniMax, makeMoveRandom, getRandomFromSet } from '../helpers/gameHelpers/gameHelpers';
interface IPlayer {
  name: string;
  value: 'P1' | 'P2';
}

interface IGame {
  gameType: 'PERSON_VS_PERSON' | 'PERSON_VS_EASYCOMPUTER' | 'PERSON_VS_HARDCOMPUTER';

  board: string[];
  playerA: IPlayer;
  playerB: IPlayer;
  computer: IPlayer;

  currentPlayer: 'P1' | 'P2';
  gameStatus: 'WIN' | 'DRAW' | 'INPROGRESS';
  winner: 'P1' | 'P2' | '';
  winState: number[];

  gameHistory: {
    p1WinCount: number;
    p2WinCount: number;
    drawCount: number;
  };

  isInteractive: boolean;

  incrementWinCount: Function;
  incrementDrawCount: Function;
  resetGameHistory: Function;
  resetBoard: Function;
  setInitialGameStatePersonVsPerson: Function;
  setInitialGameStatePersonVsComputer: Function;
  makeMove: Function;
  makeMoveEasyComputer: Function;
  makeMoveHardComputer: Function;
}

export const useGame = create<IGame>((set) => ({
  gameType: 'PERSON_VS_PERSON',

  board: ['', '', '', '', '', '', '', '', ''],
  playerA: { name: 'Player 1', value: 'P1' },
  playerB: { name: 'Player 2', value: 'P2' },
  ComputerName: 'CPU',
  computer: { name: 'CPU', value: 'P2' },
  currentPlayer: 'P1',
  gameStatus: 'INPROGRESS',
  winner: '',
  winState: [],

  gameHistory: {
    p1WinCount: 0,
    p2WinCount: 0,
    drawCount: 0
  },

  isInteractive: true,

  incrementWinCount: (player: 'P1' | 'P2') =>
    set((state) => {
      if (player === 'P1') {
        return {
          gameHistory: { ...state.gameHistory, p1WinCount: state.gameHistory.p1WinCount + 1 }
        };
      }

      return {
        gameHistory: { ...state.gameHistory, p2WinCount: state.gameHistory.p2WinCount + 1 }
      };
    }),

  incrementDrawCount: () =>
    set((state) => {
      return {
        gameHistory: { ...state.gameHistory, drawCount: state.gameHistory.drawCount + 1 }
      };
    }),

  resetGameHistory: () =>
    set(() => {
      return {
        gameHistory: {
          p1WinCount: 0,
          p2WinCount: 0,
          drawCount: 0
        }
      };
    }),

  resetBoard: () =>
    set((state) => {
      if (state.gameType === 'PERSON_VS_PERSON') {
        state.setInitialGameStatePersonVsPerson(state.playerA, state.playerB);
        return {};
      }

      state.setInitialGameStatePersonVsComputer(state.playerA, state.gameType);
      return {};
    }),

  setInitialGameStatePersonVsPerson: (playerA: IPlayer = { name: 'Player 1', value: 'P1' }, playerB: IPlayer = { name: 'Player 1', value: 'P2' }) =>
    set((state) => {
      return {
        gameType: 'PERSON_VS_PERSON',
        board: ['', '', '', '', '', '', '', '', ''],
        playerA: playerA,
        playerB: playerB,
        currentPlayer: 'P1',
        gameStatus: 'INPROGRESS',
        winner: '',
        winState: [],

        isInteractive: true
      };
    }),

  setInitialGameStatePersonVsComputer: (playerA: IPlayer = { name: 'Player 1', value: 'P1' }, gameType: 'PERSON_VS_EASYCOMPUTER' | 'PERSON_VS_HARDCOMPUTER' = 'PERSON_VS_EASYCOMPUTER') =>
    set(() => {
      let initialBoard = ['', '', '', '', '', '', '', '', ''];
      let computer: IPlayer = { name: 'CPU', value: 'P2' };

      if (playerA.value === 'P2') {
        const index = getRandomFromSet([0, 2, 6, 8]); // choose random corner position
        initialBoard.splice(index, 1, 'P1');
        computer.value = 'P1';
      }

      return {
        gameType: gameType,
        board: initialBoard,
        playerA: playerA,
        computer: computer,
        currentPlayer: playerA.value,
        gameStatus: 'INPROGRESS',
        winner: '',
        winState: [],

        isInteractive: true
      };
    }),

  makeMove: (position: number) =>
    set((state) => {
      let updatedIsInteractive = true;
      const updatedBoard = [...state.board];
      updatedBoard.splice(position, 1, state.currentPlayer);
      const updatedCurrentPlayer = state.currentPlayer === 'P1' ? 'P2' : 'P1';
      const { status, winner, winState } = checkBoardState(updatedBoard, state.currentPlayer);
      console.log(updatedBoard, updatedCurrentPlayer, status, winner, winState);

      console.log(state.computer.value);
      console.log(updatedCurrentPlayer);

      if (status === 'INPROGRESS') {
        if (state.gameType === 'PERSON_VS_EASYCOMPUTER' && updatedCurrentPlayer === state.computer.value) {
          console.log('start easy computer callback');
          updatedIsInteractive = false;
          setTimeout(() => state.makeMoveEasyComputer(), 400);
        }

        if (state.gameType === 'PERSON_VS_HARDCOMPUTER' && updatedCurrentPlayer === state.computer.value) {
          updatedIsInteractive = false;
          setTimeout(() => state.makeMoveHardComputer(), 200);
        }
      }

      if (status === 'WIN') {
        state.incrementWinCount(winner);
      }

      if (status === 'DRAW') {
        state.incrementDrawCount();
      }

      return {
        board: updatedBoard,
        currentPlayer: updatedCurrentPlayer,
        gameStatus: status,
        winner: winner,
        winState: winState,
        isInteractive: updatedIsInteractive
      };
    }),

  makeMoveEasyComputer: () =>
    set((state) => {
      const updatedBoard = [...state.board];
      updatedBoard.splice(makeMoveRandom(state.board), 1, state.currentPlayer);
      const updatedCurrentPlayer = state.currentPlayer === 'P1' ? 'P2' : 'P1';
      const { status, winner, winState } = checkBoardState(updatedBoard, state.currentPlayer);
      const updatedIsInteractive = true;

      if (status === 'WIN') {
        state.incrementWinCount(winner);
      }

      if (status === 'DRAW') {
        state.incrementDrawCount();
      }

      return {
        board: updatedBoard,
        currentPlayer: updatedCurrentPlayer,
        gameStatus: status,
        winner: winner,
        winState: winState,
        isInteractive: updatedIsInteractive
      };
    }),

  makeMoveHardComputer: () =>
    set((state) => {
      const updatedBoard = [...state.board];
      updatedBoard.splice(makeMoveMiniMax(state.board, state.currentPlayer), 1, state.currentPlayer);
      const updatedCurrentPlayer = state.currentPlayer === 'P1' ? 'P2' : 'P1';
      const { status, winner, winState } = checkBoardState(updatedBoard, state.currentPlayer);
      const updatedIsInteractive = true;

      if (status === 'WIN') {
        state.incrementWinCount(winner);
      }

      if (status === 'DRAW') {
        state.incrementDrawCount();
      }

      return {
        board: updatedBoard,
        currentPlayer: updatedCurrentPlayer,
        gameStatus: status,
        winner: winner,
        winState: winState,
        isInteractive: updatedIsInteractive
      };
    })
}));
