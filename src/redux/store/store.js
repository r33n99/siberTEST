import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { contactReducer } from "../reducers/contactsReducer";

export const store = createStore(
  contactReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
