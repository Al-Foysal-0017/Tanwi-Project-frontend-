import { createStore, applyMiddleware, combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import AuthReducer from "./reducers/AuthReducer";
const rootReducers = combineReducers({
  user: AuthReducer,
});
const middlewares = [thunkMiddleware];
const Store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(...middlewares))
);
export default Store;
