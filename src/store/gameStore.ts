import create from 'zustand';
import { makeMoveMinMax } from '../helpers/gameHelpers/gameHelpers';

interface IPlayer {
  name: string;
  type: 'PERSON' | 'EASYCOMPUTER' | 'HARDCOMPUTER';
}

interface IGame {
  gameType: 'PERSON_VS_PERSON' | 'PERSON_VS_EASYCOMPUTER' | 'PERSON_VS_HARDCOMPUTER';

  board: string[];
  player1: IPlayer;
  player2: IPlayer;

  currentPlayer: 'P1' | 'P2';
  gameStatus: 'WIN' | 'DRAW' | 'INPROGRESS';
  winner: 'P1' | 'P2' | '';
  winState: number[];

  gameHistory: {
    player1WinCount: number;
    player2WinCount: number;
    drawCount: number;
  };

  makeMove: Function;
}

const useGame = create<IGame>((set) => ({
  gameType: 'PERSON_VS_PERSON',

  board: ['', '', '', '', '', '', '', '', ''],
  player1: { name: 'player1', type: 'PERSON' },
  player2: { name: 'player2', type: 'PERSON' },

  currentPlayer: 'P1',
  gameStatus: 'INPROGRESS',
  winner: '',
  winState: [],

  gameHistory: {
    player1WinCount: 0,
    player2WinCount: 0,
    drawCount: 0
  },

  makeMove: (position: number) => {}
}));
