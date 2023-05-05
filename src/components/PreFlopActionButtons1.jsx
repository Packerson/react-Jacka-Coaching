import React from 'react'

// compoment for PreFlopActionbuttons1
const PreFlopActionButtons1 = ({btn, pushedBtn, preFlopActionPlayer1, idx} ) => {

  return (
    // render button if activ change color and save value from button
    <button className={`${pushedBtn[2] === btn ? "btnActiv" : "btnUnActiv"}`} key={idx} onClick={preFlopActionPlayer1} >{btn}</button>
  )
}

export default PreFlopActionButtons1