import dataContext from "./DataContext";
import React, { useContext } from 'react'

function Data() {
    const{counter,countInc,countDec}=useContext(dataContext)
  return (
    <div>
      <h1>Counter:{counter}</h1>
      <button onClick={countInc} style={{width:'50px',padding:'5px 10px',fontSize:'20px'}}>+</button>
      <button onClick={countDec} style={{width:'50px',padding:'5px 10px',fontSize:'20px'}}>-</button>
    </div>
  )
}

export default Data
