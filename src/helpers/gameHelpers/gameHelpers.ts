export const winStates = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

export const checkBoardState = (board: string[], player: 'P1' | 'P2') => {
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
  const index = indexes[Math.floor(Math.random() * indexes.length)];
  return index;
};

export const makeMoveMinMax = (board: string[]) => {};
