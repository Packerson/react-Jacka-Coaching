import React from 'react'

const PreFlopActionButtons1 = ({btn, actBtn, preFlopActionPlayer1} ) => {

  return (
    <button className={`${actBtn[2] === btn ? "btnActiv" : "btnUnActiv"}`} onClick={preFlopActionPlayer1} >{btn}</button>
  )
}

export default PreFlopActionButtons1