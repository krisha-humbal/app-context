import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice=createSlice({
    name:'demo',
    initialState:{
        count:0,
        value:0,
        input:''
    },
    reducers:{
        // incere:(state)=>{
        //     state.count += 1
        // },
        // decre:(state)=>{
        //     state.count -= 1
        // },
        // incereBy5:(state,action)=>{
        //     console.log(action.payload);
        //     state.count+= action.payload
            
        // },
        textValue:(state)=>{
           
            const num=parseInt(state.input,10)
            if(!isNaN(num)){
                state.value+=num
            }
            state.input=""
        },
        updateValue:(state,action)=>{
            state.input=action.payload
        }
    }
})
export const {textValue,updateValue} = CounterSlice.actions
export default CounterSlice.reducer