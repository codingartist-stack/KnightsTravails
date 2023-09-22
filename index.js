const createBoard = (boardSize = 8) => {
  let board = [];
  for (let i = 0; i < boardSize; i++) {
    let row = [];
    board.push(row);
    for (let j = 0; j < boardSize; j++) {
      let column = 0;
      row.push(column);
    }
  }
  console.log(board);
};

createBoard();
