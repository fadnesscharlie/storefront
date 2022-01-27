// import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";

// export default configureStore({
//   reducer: {
//     counter: counterReducer
//   }
// })


import { createStore, combineReducers } from "redux";

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from "@redux-devtools/extension";

import Products from "../Products/Products.js";

let reducers = combineReducers({ Products });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
