const Chess = (boardSize = 8) => {
  const chessBoard = new Map();

  const createBoard = (boardSize) => {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        chessBoard.set(`${[i, j]}`, []);
      }
    }
  };

  createBoard(boardSize);

  const createEdges = (board = chessBoard) => {
    for (const [position] of board) {
      const positionArray = position.split(',');
      const x = parseInt(positionArray[0]);
      const y = parseInt(positionArray[1]);

      const movePattern = {
        1: [x + 1, y + 2],
        2: [x + 2, y + 1],
        4: [x + 2, y - 1],
        5: [x + 1, y - 2],
        7: [x - 1, y - 2],
        8: [x - 2, y - 1],
        10: [x - 2, y + 1],
        11: [x - 1, y + 2],
      };
      for (const pattern in movePattern) {
        const move = movePattern[pattern].toString();
        if (board.has(move) && !board.get(position).includes(move)) {
          chessBoard.get(position).push(move);
        }
      }
    }
  };

  createEdges();

  const knightMoves = (start, end) => {
    const paths = [];
    const visited = new Set();
    const quene = [];
  };
  console.log(chessBoard);

  return {};
};

Chess();
