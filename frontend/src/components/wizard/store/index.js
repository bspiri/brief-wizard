import { createStore } from "redux";
import reducer from "../reducers";

const initialState = { select: "check" };
export const store = createStore(reducer, initialState);
