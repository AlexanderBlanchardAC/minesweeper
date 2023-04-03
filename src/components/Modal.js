import React, { useEffect, useState } from 'react';

const Modal = ({ finTime, reset }) => {

    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(true);
        }, 1000)
    }, []);

  return (
    <div style={{ width: "100%", height: "100%", position: "absolute", background: "rgba(0,0,0,0.3)", opacity: show ? 1 : 0}}>
        <div className="gameOverImage">

        </div>
        <div className="resetGame" onClick={() => reset()}>
            Play Again
        </div>
      
    </div>
  );
}

export default Modal;
