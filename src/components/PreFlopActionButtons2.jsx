import React from 'react'

const PreFlopActionButtons2 = ({btn, actBtn, preFlopActionPlayer2} ) => {

  return (
    <button className={`${actBtn[3] === btn ? "btnActiv" : "btnUnActiv"}`} onClick={preFlopActionPlayer2} >{btn}</button>
  )
}

export default PreFlopActionButtons2