import { configureStore } from "redux";
import { combineReducers } from "redux";
import { usersReducer } from "./users/usersSlice";

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = configureStore(rootReducer);

export default store;