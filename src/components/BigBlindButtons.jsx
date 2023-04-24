import React from 'react'

const BigBlindButtons = ({btn, actBtn, setBB} ) => {

  return (
    <button className={`${actBtn[0] === btn ? "btnActiv" : "btnUnActiv"}`} onClick={setBB} >{btn}</button>
  )
}

export default BigBlindButtons