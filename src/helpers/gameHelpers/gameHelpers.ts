export const winStates: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export interface ICheckBoardResult {
  status: 'WIN' | 'DRAW' | 'INPROGRESS';
  winner: 'P1' | 'P2' | '';
  winState: number[];
}

export const checkBoardState = (board: string[], player: 'P1' | 'P2'): ICheckBoardResult => {
  //Check Win States
  for (let i = 0; i < winStates.length; i++) {
    let elementMatchCount = 0;
    for (let j = 0; j < winStates[i].length; j++) {
      if (board[winStates[i][j]] === player) {
        elementMatchCount++;
      }
    }
    if (elementMatchCount === winStates[i].length) {
      return { status: 'WIN', winner: player, winState: winStates[i] };
    }
  }

  //Check Draw State
  if (checkBoardFull(board)) {
    return { status: 'DRAW', winner: '', winState: [] };
  }

  return { status: 'INPROGRESS', winner: '', winState: [] };
};

export const checkBoardFull = (board: string[]) => {
  if (board.includes('')) {
    return false;
  }
  return true;
};

export const getEmptyPositions = (board: string[]) => {
  let indexes = [];
  for (let i = 0; i < board.length; i++) {
    if (board[i] === '') {
      indexes.push(i);
    }
  }
  return indexes;
};

export const makeMoveRandom = (board: string[]) => {
  const indexes = getEmptyPositions(board);
  return getRandomFromSet(indexes);
};

export const makeMoveMiniMax = (board: string[], currentPlayer: 'P1' | 'P2') => {
  const { bestPos } = minimax([...board], currentPlayer);
  return bestPos;
};

export const minimax = (board: string[], currentPlayer: 'P1' | 'P2') => {
  const statusP1 = checkBoardState(board, 'P1').status;
  const statusP2 = checkBoardState(board, 'P2').status;
  console.log('____Board', board);
  console.log('____statusP1', statusP1);
  console.log('____statusP1', statusP2);
  console.log('____CurrentPlayer', currentPlayer);

  if (statusP1 === 'WIN') {
    console.log({ score: 1, bestPos: -1 });
    return { score: 1, bestPos: -1 };
  }

  if (statusP2 === 'WIN') {
    console.log({ score: -1, bestPos: -1 });
    return { score: -1, bestPos: -1 };
  }

  if (statusP1 === 'DRAW' && statusP2 === 'DRAW') {
    console.log({ score: 0, bestPos: -1 });
    return { score: 0, bestPos: -1 };
  }
  let maxScore = -Infinity;
  let minScore = Infinity;
  let bestMaxPos = 0;
  let bestMinPos = 0;
  const emptyPositions = getEmptyPositions(board);
  const nextPlayer = togglePlayer(currentPlayer);

  for (let i = 0; i < emptyPositions.length; i++) {
    board.splice(emptyPositions[i], 1, currentPlayer);
    const { score } = minimax(board, nextPlayer); //recusive call with updated board
    board.splice(emptyPositions[i], 1, ''); //Change board back to orginal state
    if (score >= maxScore) {
      bestMaxPos = emptyPositions[i];
      maxScore = score;
    }
    if (score <= minScore) {
      bestMinPos = emptyPositions[i];
      minScore = score;
    }
  }

  if (currentPlayer === 'P1') {
    console.log({ score: maxScore, bestPos: bestMaxPos });
    return { score: maxScore, bestPos: bestMaxPos };
  }
  console.log({ score: minScore, bestPos: bestMinPos });
  return { score: minScore, bestPos: bestMinPos };
};

const togglePlayer = (currentPlayer: 'P1' | 'P2') => {
  return currentPlayer === 'P1' ? 'P2' : 'P1';
};

export const getRandomFromSet = (set: number[]) => {
  return set[Math.floor(Math.random() * set.length)];
};
