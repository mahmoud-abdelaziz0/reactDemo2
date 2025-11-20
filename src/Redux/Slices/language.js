import { createSlice } from "@reduxjs/toolkit";

let langSlice= createSlice({
  name:'language',
  initialState:{language:'en'},
  reducers:{
    changeLanguage: function(state, action){
      state.language = action.payload
    }
  }
})

export const {changeLanguage} = langSlice.actions;

export default langSlice.reducer;