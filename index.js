const Chess = (boardSize = 8) => {
  const chessBoard = {};

  const createBoard = (boardSize) => {
    for (let i = 0; i < boardSize; i++) {
      for (let j = 0; j < boardSize; j++) {
        chessBoard[`${i},${j}`] = [];
      }
    }
  };

  createBoard(boardSize);

  const createEdges = (board = chessBoard) => {
    for (const position in board) {
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
  console.log(chessBoard);

  const knightMoves = (start, end) => {
    const path = [];
    const visited = new Set();
    const queue = [];

    queue.push([start, [start]]);

    while (queue.length > 0) {
      let [current, move] = queue.shift();
      visited.add(current);
      if (current === end) {
        path.push(move);
        console.log(
          `You made it in ${path[0].length} moves! Here's your path: `
        );
        console.log(path[0]);
        return;
      }

      const neighbors = chessBoard.get(current);
      for (const position of neighbors) {
        if (!visited.has(position)) {
          queue.push([position, [...move, position]]);
        }
      }
    }
  };

  return {
    chessBoard,
    knightMoves,
  };
};

const game = Chess();

// game.knightMoves('0,0', '1,2');
// game.knightMoves('0,0', '3,3');
// game.knightMoves('3,3', '0,0');
// game.knightMoves('3,3', '4,3');
