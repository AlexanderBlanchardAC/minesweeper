import React from 'react';
import StopClock from "./StopClock";

const Nav = ({ setTimer, gameOver}) => {
  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", padding: "10px 0", flexDirection: "row", background: "red"}}>
        <span style={{ padding: 10 }} className='flagImage'>
            ⛳ 
        </span>
        <StopClock gameOver={gameOver} showTime={setTimer} />
      
    </div>
  );
}

export default Nav
