import React from "react";

// compoment for Player1PostitionButtons
const Player1PostitionButtons = ({
   btn,
   pushedBtn,
   postitionPlayer1,
   player1PositionsActivButtons,
   idx,
}) => {
   return (
      // render button if activ change color and save value from button
      <button
         disabled={!player1PositionsActivButtons.includes(btn)}
         className={`${pushedBtn[2] === btn ? "btnActiv" : "btnUnActiv"}`}
         key={idx}
         onClick={postitionPlayer1}
      >
         {btn}
      </button>
   );
};

export default Player1PostitionButtons;
