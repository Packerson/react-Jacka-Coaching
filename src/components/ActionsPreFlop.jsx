import React from "react";

// compoment for ActionsPreFlop
const ActionsPreFlop = ({
   btn,
   pushedBtn,
   riseActivButtons,
   setRFIor3B,
   idx,
}) => {
   return (
      // render button if activ change color and save value from button
      <button
         disabled={!riseActivButtons.includes(btn)}
         className={`${pushedBtn[1] === btn ? "btnActiv" : "btnUnActiv"}`}
         key={idx}
         onClick={setRFIor3B}
      >
         {btn}
      </button>
   );
};

export default ActionsPreFlop;
