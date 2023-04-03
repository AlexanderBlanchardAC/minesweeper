import React, { useEffect, useState } from 'react';



const StopClock = ({ gameOver, showTime }) => {

    let [inPlay, setInPlay] = useState(0);
    let [gameTime, setGameTime] = useState(0);
    let timerInterval;



    useEffect(() => {
        if (inPlay > 0 && gameOver) {
            setGameTime(inPlay);
            setInPlay(0);
        }
    }, [gameOver, inPlay]);

    useEffect(() => {
        const incrementGameTime = () => {
            let incrementedInPlayTime = inPlay + 1;
            setInPlay(incrementedInPlayTime);
        };
        timerInterval = setTimeout(() => {
            incrementGameTime();
        }, 1000);
        if (gameOver) {
            clearInterval(timerInterval);
        }
    }, [inPlay, setInPlay, gameOver, showTime]);


  return (
    <div style={{ fontSize: 20, color: green }}>
        <span className="timerImage" style={{ padding: 10}}>
            ⏲ 
        </span>
      {gameOver ? gameTime : inPlay}
    </div>
  );
}

export default StopClock
