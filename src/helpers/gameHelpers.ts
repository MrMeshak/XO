export const generateWinStates = (p: 'P1' | 'P2') => {
  return [
    [p, p, p, '', '', '', '', '', ''],
    ['', '', '', p, p, p, '', '', ''],
    ['', '', '', '', '', '', p, p, p],
    [p, '', '', p, '', '', p, '', ''],
    ['', p, '', '', p, '', '', p, ''],
    ['', '', p, '', '', p, '', '', p],
    [p, '', '', '', p, '', '', '', p],
    ['', '', p, '', p, '', p, '', '']
  ];
};

export const arrayEqual = (a: string[], b: string[]) => {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

export const checkBoardFull = (board: string[]) => {
  if (board.includes('')) {
    return false;
  }
  return true;
};

export const checkBoardState = (board: string[], p: 'P1' | 'P2') => {
  //Check for win state
  const winStates = generateWinStates(p);
  for (let i = 0; i < winStates.length; i++) {
    let elementMatchCount = 0;
    for (let j = 0; j < winStates[i].length; j++) {
      if (winStates[i][j] !== board[j] && winStates[i][j] !== '') {
        break;
      }
      elementMatchCount++;
    }
    if (elementMatchCount === winStates[i].length) {
      return { status: 'WIN', winner: p, winState: winStates[i] };
    }
  }
  //Check for draw state
  if (checkBoardFull(board)) {
    return { status: 'DRAW', winner: '', winState: [] };
  }

  return { status: 'INPROGRESS', winner: '', winState: [] };
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
