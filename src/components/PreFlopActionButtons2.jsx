import React from 'react'

// compoment for PreFlopActionbuttons2
const PreFlopActionButtons2 = ({btn, actBtn, preFlopActionPlayer2} ) => {

  return (
       // render button if activ change color and save value from button
    <button className={`${actBtn[3] === btn ? "btnActiv" : "btnUnActiv"}`} onClick={preFlopActionPlayer2} >{btn}</button>
  )
}

export default PreFlopActionButtons2