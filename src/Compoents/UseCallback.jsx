import React, { useCallback, useState } from 'react'
const Button=React.memo(({onclick})=>{
    return <button onClick={onclick}>Click</button>
})
const UseCallback = () => {
    const [number,setNumber]=useState(0)
    const counter=useCallback(()=>{
        setNumber(number + 1)
    })
  return (
    <div>
      <h1>{number}</h1>
      <Button onclick={counter}>
      </Button>
    </div>
  )
}

export default UseCallback
