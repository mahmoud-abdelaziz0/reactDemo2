import { configureStore } from "@reduxjs/toolkit";
import languageReducer from '../Slices/language'
import counterReducer from '../Slices/counter'
import usersReducer from '../Slices/Users'

let reduxStore = configureStore({
  reducer: {
    languageR: languageReducer,
    counterR: counterReducer,
    usersR: usersReducer
  }
})

export default reduxStore