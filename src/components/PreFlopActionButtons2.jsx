import React from 'react'

// compoment for PreFlopActionbuttons2
const PreFlopActionButtons2 = ({btn, pushedBtn, preFlopActionPlayer2, idx} ) => {

  return (
       // render button if activ change color and save value from button
    <button className={`${pushedBtn[3] === btn ? "btnActiv" : "btnUnActiv"}`} key={idx} onClick={preFlopActionPlayer2} >{btn}</button>
  )
}

export default PreFlopActionButtons2