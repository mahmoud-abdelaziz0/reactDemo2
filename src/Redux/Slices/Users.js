import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export let usersCallApiAction = createAsyncThunk('users/getAll', async ()=>{
  let res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data
})


const usersSlice =  createSlice({
  name:'users',
  initialState:{users:[]},
  extraReducers: (builder)=>{
    builder.addCase(usersCallApiAction.fulfilled, (state, action)=>{state.users = action.payload})
    builder.addCase(usersCallApiAction.pending, (state,action)=>{})
    builder.addCase(usersCallApiAction.rejected, (state,action)=>{})
  }
})


export default usersSlice.reducer