import React from 'react'


const BigBlindButtons = ({btn, actBtn, setBB, idx} ) => {

  return (
    <button className={`${actBtn[0] === btn ? "btnActiv" : "btnUnActiv"}`} key={idx} onClick={setBB} >{btn}</button>
  )
}

export default BigBlindButtons