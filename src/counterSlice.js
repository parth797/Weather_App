import { createSlice } from '@reduxjs/toolkit'



export const counterSlice = createSlice({
    name: 'counter',
    initialState:{
      name:'',
      surname:'',
      email:'',
      password:'',
      address:''
    },
    reducers: {
     setName1:(state,action)=>{
        state.name=action.payload
     },
     setSurname1:(state,action)=>{
      state.surname=action.payload
     },
     setemail1:(state,action)=>{
      state.email=action.payload
     },
     setPassword1:(state,action)=>{
      state.password=action.payload
     },
     setAddress1:(state,action)=>{
      state.address=action.payload
     }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { setName1, setSurname1, setemail1, setPassword1, setAddress1 } = counterSlice.actions
  
  export default counterSlice.reducer