import React from "react";

// compoment for Player2PostitionButtons
const Player2PostitionButtons = ({
   btn,
   pushedBtn,
   player2PositionsActivButtons,
   postitionPlayer2,
   idx,
}) => {
   return (
      // render button if activ change color and save value from button
      <button
         disabled={!player2PositionsActivButtons.includes(btn)}
         className={`${pushedBtn[3] === btn ? "btnActiv" : "btnUnActiv"}`}
         key={idx}
         onClick={postitionPlayer2}
      >
         {btn}
      </button>
   );
};

export default Player2PostitionButtons;
