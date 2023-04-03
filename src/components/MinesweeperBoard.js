import React, { useEffect, useState } from 'react';
import Modal from "./Modal";
import Nav from "./Nav";

const MinesweeperBoard = () => {

    const [board, setBoard] = useState([]);
    const [timer, setTimer] = useState(0);
    const [safeSquares, setSafeSquares] = useState(0);
    const [minePositions, setMinePositions] = useState([]);
    const [gameOver, setGameOver] = useState(false)
    const [restart, setRestart] = useState(false);


    useEffect(() => {
        const generateBoard = () => {
            const getNewBoard = createBoard(10, 15, 20, setMinePositions);
            setSafeSquares(100 - 20);
            setTimer(0);
            setBoard(getNewBoard.board);
            setMinePositions(getNewBoard.minePositions);
            setGameOver(false);
            setRestart(false);
        };
        generateBoard();
    }, [restart, setRestart])

    

    const boardUpdate = (x, y, e) => {
        let newSafeSquares = safeSquares;
        let updatedBoardValues = JSON.parse(JSON.stringify(board));

        if (updatedBoardValues[x][y].value === "x") {
            for (let i = 0; i < minePositions.length; i++) {
                if( !updatedBoardValues[minePositions[i][0][minePositions][i][1]].revealed){
                    updatedBoardValues[minePositions[i][0]][minePositions[i][1]].revealed = true;
                    setBoard(updatedBoardValues);
                }
            }
            setGameOver(true);
        } else {
            updatedBoardValues = revealed(updatedBoardValues, x, y, newSafeSquares);
            if (!updatedBoardValues) {
                return;
            }
            setBoard(updatedBoardValues.arr);
            setSafeSquares(updatedBoardValues.newSafeSquares);
        }
    };

    const marked = (x, y) => {
        let updatedBoardValues = JSON.parse(JSON.stringify(board));
        updatedBoardValues[x][y].flagged = !updatedBoardValues[x][y].flagged;
        setBoard(updatedBoardValues);
    };

    




  return (
    <div  style={{ position: "relative"}}>
        {gameOver && <Modal reset={setRestart} finTime={timer} />}
        <Nav gameOver={gameOver} setTimer={setTimer}  timer={timer} />
        {board.map((row, index) => {
            return(
                <div style={{ display: "flex"}}  key={index}>
                    {row.map((eachCell, index) => {
                        return (
                            <Cell 
                                key={index}
                                boardUpdate={boardUpdate}
                                marked={marked}
                                data={eachCell}
                            />
                        );
                    })}
                </div>
           
            );
        })}
      
    </div>
  );
}

export default MinesweeperBoard
