import { combineReducers } from "redux";
import cartReducer from './cart-reducer'
import brewDogApiReducer from './brew-dog-api-reducer'

export default combineReducers({
    cartReducer,brewDogApiReducer
  });