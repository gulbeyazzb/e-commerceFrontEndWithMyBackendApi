import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
import { globalReducer } from "./globalReducer";
import { productReducer } from "./productReducer";
import { shoppingCartReducer } from "./shoppingCartReducer";

export const reducers = combineReducers({
  user: userReducer,
  global: globalReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});
