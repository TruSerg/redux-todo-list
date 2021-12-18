import { combineReducers } from "redux";

import toDoListPageReducer from "../pages/ToDoListPage/reducers";

const rootReducer = combineReducers({
  toDoListPage: toDoListPageReducer,
});

export default rootReducer;
