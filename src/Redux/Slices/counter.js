import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name:'counter',
  initialState:{counter:0},
  reducers:{
    incrCounterFun: function(state, action){
      state.counter = state.counter+1
    },
    decrCounterFun: function(state, action){
      state.counter = state.counter-1
    },
    changeCounterFun: function(state, action){
      state.counter = action.payload;
    }
  }
})


export const {incrCounterFun, decrCounterFun, changeCounterFun} = counterSlice.actions;

export default counterSlice.reducer;