import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { textValue,updateValue} from './CounterSlice'
import { TextField } from '@mui/material'
const ButtonUi = () => {
    // const count=useSelector(state=>state.demo)
    const {value,input}=useSelector((state)=>state.demo)
    const dispatch=useDispatch()
  return (
    <div>
       <h1>Counter:{value}</h1>{/*
      <button onClick={()=>dispatch(incere())}>+++</button>
      <button onClick={()=>dispatch(decre())}>---</button>
      <button onClick={()=>dispatch(incereBy5(5))}>++5</button> */}
      <TextField placeholder='Enter number'
      value={input} 
      onChange={(e)=>dispatch(updateValue(e.target.value))}></TextField>
      <button onClick={()=>dispatch(textValue())}>Click</button>
      </div> 
  )
}

export default ButtonUi
