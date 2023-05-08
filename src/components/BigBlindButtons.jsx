import React from "react";

const BigBlindButtons = ({
   btn,
   pushedBtn,
   bigBlindActivButtons,
   setBB,
   idx,
}) => {
   return (
      <button
         disabled={!bigBlindActivButtons.includes(btn)}
         className={`${pushedBtn[0] === btn ? "btnActiv" : " btnUnActiv"}`}
         key={idx}
         onClick={setBB}
      >
         {btn}
      </button>
   );
};

export default BigBlindButtons;
