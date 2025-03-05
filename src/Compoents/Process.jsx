import React, { useState } from 'react'
import dataContext from './DataContext'
import Data from './Data'
function Process() {
    let [counter,setCounter]=useState(0)
    const countInc=()=>{
        setCounter(++counter)
    }
    const countDec=()=>{
      setCounter(--counter)
    }
  return (
    <div>
      <dataContext.Provider value={{counter,countInc,countDec}}>
        <Data></Data>
      </dataContext.Provider>
    </div>
  )
}

export default Process
