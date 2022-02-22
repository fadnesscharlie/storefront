import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
// This dependency enables the Redux Dev Tools in your Chrome Console.
import { composeWithDevTools } from "@redux-devtools/extension";

import Products from "./Products.js";
import Cart from './Cart.js'
import asyncAddProduct from './Products';


let reducers = combineReducers({ Products, Cart, asyncAddProduct });

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();
