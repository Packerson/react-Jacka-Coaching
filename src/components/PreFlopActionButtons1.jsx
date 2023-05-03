import React from 'react'

// compoment for PreFlopActionbuttons1
const PreFlopActionButtons1 = ({btn, actBtn, preFlopActionPlayer1, idx} ) => {

  return (
    // render button if activ change color and save value from button
    <button className={`${actBtn[2] === btn ? "btnActiv" : "btnUnActiv"}`} key={idx} onClick={preFlopActionPlayer1} >{btn}</button>
  )
}

export default PreFlopActionButtons1