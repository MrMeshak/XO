import { checkBoardState, makeMoveRandom } from './gameHelpers';

const p1 = 'P1';
const p2 = 'P2';

const testBoards = {
  boardP1RowWin1: [p1, p1, p1, p2, p1, p2, '', '', p2],
  boardP1RowWin2: [p2, p2, p1, p1, p1, p1, '', p2, p2],
  boardP1RowWin3: [p1, '', p2, p2, p2, '', p1, p1, p1],
  boardP1ColWin1: [p1, p2, p2, p1, p2, p1, p1, '', p2],
  boardP1ColWin2: [p2, p1, '', p2, p1, p2, p1, p1, p2],
  boardP1ColWin3: [p2, p1, p1, p2, p2, p1, '', p2, p1],
  boardP1DiagWin1: [p1, p2, p2, p2, p1, '', '', '', p1],
  boardP1DiagWin2: [p2, '', p1, p2, p1, p2, p1, p2, p1],

  boardInprogress1: ['', p1, '', '', '', p1, p2, p2, p1],
  boardInprogress2: [p2, p1, '', '', '', p1, p2, p2, p1],
  boardInprogress3: [p2, p1, p1, p1, p2, '', p1, p2, p2],
  boardDraw1: [p1, p1, p2, p2, p2, p1, p1, p2, p1]
};

describe('CheckBoardState Function', () => {
  test('detect row wins correctly', () => {
    // top row
    const resultTest1 = checkBoardState(testBoards.boardP1RowWin1, p1);
    expect(resultTest1.status).toBe('WIN');
    expect(resultTest1.winner).toBe('P1');
    expect(resultTest1.winState).toEqual([0, 1, 2]);

    //middle row
    const resultTest2 = checkBoardState(testBoards.boardP1RowWin2, p1);
    expect(resultTest2.status).toBe('WIN');
    expect(resultTest2.winner).toBe('P1');
    console.log(resultTest2.winState);
    expect(resultTest2.winState).toEqual([3, 4, 5]);

    //last row
    const resultTest3 = checkBoardState(testBoards.boardP1RowWin3, p1);
    expect(resultTest3.status).toBe('WIN');
    expect(resultTest3.winner).toBe('P1');
    console.log(resultTest3.winState);
    expect(resultTest3.winState).toEqual([6, 7, 8]);
  });

  test('detect column wins correctly', () => {
    // first col
    const resultTest1 = checkBoardState(testBoards.boardP1ColWin1, p1);
    expect(resultTest1.status).toBe('WIN');
    expect(resultTest1.winner).toBe('P1');
    expect(resultTest1.winState).toEqual([0, 3, 6]);

    // middle col
    const resultTest2 = checkBoardState(testBoards.boardP1ColWin2, p1);
    expect(resultTest2.status).toBe('WIN');
    expect(resultTest2.winner).toBe('P1');
    console.log(resultTest2.winState);
    expect(resultTest2.winState).toEqual([1, 4, 7]);

    // last col
    const resultTest3 = checkBoardState(testBoards.boardP1ColWin3, p1);
    expect(resultTest3.status).toBe('WIN');
    expect(resultTest3.winner).toBe('P1');
    console.log(resultTest3.winState);
    expect(resultTest3.winState).toEqual([2, 5, 8]);
  });

  test('detect diagonal wins correctly', () => {
    // Diag lower Right to upper Left
    const resultTest1 = checkBoardState(testBoards.boardP1DiagWin1, p1);
    expect(resultTest1.status).toBe('WIN');
    expect(resultTest1.winner).toBe('P1');
    expect(resultTest1.winState).toEqual([0, 4, 8]);

    // Diag upper right to lower Left
    const resultTest2 = checkBoardState(testBoards.boardP1DiagWin2, p1);
    expect(resultTest2.status).toBe('WIN');
    expect(resultTest2.winner).toBe('P1');
    console.log(resultTest2.winState);
    expect(resultTest2.winState).toEqual([2, 4, 6]);
  });

  test('detect draw', () => {
    const result = checkBoardState(testBoards.boardDraw1, p1);
    expect(result.status).toBe('DRAW');
    expect(result.winner).toBe('');
    expect(result.winState).toEqual([]);
  });

  test('detect game inprogress', () => {
    const result = checkBoardState(testBoards.boardInprogress1, p1);
    expect(result.status).toBe('INPROGRESS');
    expect(result.winner).toBe('');
    expect(result.winState).toEqual([]);
  });
});

describe('makeMoveRandom Function', () => {
  test('chooses a random availble postion', () => {
    const pos = makeMoveRandom(testBoards.boardInprogress1);
    console.log(pos);
    expect([0, 2, 3, 4]).toContain(pos);
  });

  test('returns undefined if no positions are available', () => {
    const pos = makeMoveRandom(testBoards.boardDraw1);
    expect(pos).toBe(undefined);
  });
});
