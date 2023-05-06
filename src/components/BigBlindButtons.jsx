import React from 'react'


const BigBlindButtons = ({btn, pushedBtn, setBB, idx} ) => {

  return (
    <button className={`${pushedBtn[0] === btn ? "btnActiv" : " btnUnActiv"}`} key={idx} onClick={setBB} >{btn}</button>
  )
}

export default BigBlindButtons