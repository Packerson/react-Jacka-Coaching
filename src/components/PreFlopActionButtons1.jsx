import React from 'react'

// compoment for PreFlopActionbuttons1
const PreFlopActionButtons1 = ({btn, actBtn, preFlopActionPlayer1} ) => {

  return (
    // render button if activ change color and save value from button
    <button className={`${actBtn[2] === btn ? "btnActiv" : "btnUnActiv"}`} onClick={preFlopActionPlayer1} >{btn}</button>
  )
}

export default PreFlopActionButtons1