import {createStore} from "redux";
import {addDataReducer} from "./reducer";

export const Store=createStore(addDataReducer);