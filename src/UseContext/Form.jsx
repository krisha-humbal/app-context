import React, { useContext } from 'react'
import { Button,TextField } from '@mui/material'
import allContext from './Context'
function Form() {
  const {dataSubmit,value,setValue,editIndex}=useContext(allContext)
  return (
    <div>
      <form action="" style={{display:'flex', flexDirection:'column',alignItems:'center'}} onSubmit={(e) => dataSubmit(e)}>
        <TextField type="text" placeholder='Enter FirstName'value = {value.firstname} onChange={(e) => setValue({ ...value, firstname: e.target.value })}/>
        <br></br>
        <TextField type="text" placeholder='Enter LastName' value = {value.lastname} onChange={(e) => setValue({ ...value, lastname: e.target.value })}/>
        <br></br>
        {/* <TextField type="Email" placeholder='Enter Email' value = {value.email} onChange={(e) => setValue({ ...value, email: e.target.value })}/>
        <br></br>
        <TextField type="password" placeholder='Enter Password' value = {value.password} onChange={(e) => setValue({ ...value, password: e.target.value })}/>
        <br></br> */}
        {/* <Button variant='contained' type='submit'>Submit</Button> {editIndex !== null ? 'Update' : 'Submit'} */}
        <Button variant="contained" type='submit'>
                    {editIndex !== null ? 'Update' : 'Submit'}
                </Button>
                
      </form>
    </div>
  )
}

export default Form
