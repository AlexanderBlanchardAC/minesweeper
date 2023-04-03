export default (col, row, mines) => {
    let board = [];
    let minePosition =[];

    for (let x = 0; x < row; x++) {
        let iCol = [];
        for (let y=0; y < col; y++) {
            iCol.push({
                value: 0,
                marked: false,
                x: x,
                y: y,
                revealed: false
            });
        }
        board.push(iCol)
    }

    let mineCount = 0;
    while (mineCount < mines) {
        let x = randomNum(0, row - 1);
        let y = randomNum(0, col - 1);

        if (board[x][y].value === 0) {
            board[x][y].value = "x";
            minePosition.push([x, y]);
            mineCount++;
        }
    }

    for (let rows = 0; rows < row; rows++ ) {
        for (let cols = 0; cols < col; cols++) {
            if (board[rows][cols].value === "x") {
                continue;
            }

            if (rows > 0 && board[rows - 1][cols].value === "x") {
                board[rows][cols].value++;
            }

            if ( rows > 0 && cols < col - 1 && board[rows - 1][cols + 1].value ==="x") {
                board[rows][cols].value++;
            }

            if ( rows < row - 1 && cols < col - 1 && board[rows + 1][cols +1].value === "x") {
                board[rows][cols].value++;
            }

            if (rows < row - 1 && board[rows + 1][cols].value === "x") {
                board[rows][cols].value++;
            }

            if ( rows < row - 1 && cols > 0 && board[rows + 1][cols - 1].value === "x") {
                board[rows][cols].value++;
            }
            if (cols > 0 && board[rows][cols - 1].value === "x") {
                board[rows][cols].value++;
            }

            if (rows > 0 && cols > 0 && board[rows -1][cols - 1].value === "x") {
                board[rows][cols].value++;
            }
        }
    }
    return { board, minePosition };

};

const randomNum = (min = 0, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}