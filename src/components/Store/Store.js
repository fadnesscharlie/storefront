import { createStore, combineReducers } from "redux";

// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from "@redux-devtools/extension";

import Products from "../Products/Products.js";
import Cart from '../Cart/Cart.js'

let reducers = combineReducers({ Products, Cart });

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();
