import React from 'react'
import Form from './Form'
import allContext from './Context'
import { useState } from 'react'
import { Button } from '@mui/material'
const Process1=()=> {
    const [data, setData] = useState([]);
    const [editIndex, setEditIndex] = useState(null);
    const [value, setValue] = useState({
        firstname: "",
        lastname: "",
        // email: "",
        // password:""
    });
    function dataSubmit(event) {
      event.preventDefault()
   
      
          const dataCopy = [...data, value];
          setData(dataCopy);
          if (editIndex !== null) {
            // Update the existing data
            const updatedData = data.map((item, index) =>
                index === editIndex ? value : item
            );
            setData(updatedData);
            setEditIndex(null);  
        } else {
           
            const dataCopy = [...data, value];
            setData(dataCopy);
        }
      setValue({
          firstname: "",
          lastname:"",
        //   email: "",
        //   password: ""
      });
  }
  const handleDelete = (index) => {

    
    let copyData = [...data]
    copyData.splice(index, 1)
    setData(copyData)
};
const handleEdit = (index) => {
    setValue(data[index]);
    setEditIndex(index);

};

  return (
    <div>
      <allContext.Provider value={{dataSubmit,value,setValue,editIndex,setEditIndex,handleDelete,handleEdit}}>
      <Form></Form>
      </allContext.Provider>
      <table border={1} width="100%">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        {/*<th>Email</th>
                        <th>Password</th>
                        <th>Update</th>
                        <th>Delete</th> */}
                    
                       
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((el, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{el.firstname}</td>
                                <td>{el.lastname}</td>
                                {/* <td>{el.email}</td>
                                <td>{el.password}</td>
                                <td><Button variant='contained'onClick={() => handleEdit(i)}>Update</Button></td>
                                <td><Button variant='contained' onClick={() => handleDelete(i)}>Delete</Button></td> */}

                            </tr>

                        ))
                    }
                </tbody>
            </table>
    </div>
  )
}

export default Process1
