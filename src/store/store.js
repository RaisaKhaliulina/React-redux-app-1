import { createStore } from "redux";
import  taskReducer from "./taskReducer";

const initialState = [
  { id: 1, title: "Task1",completed: false,deleted: "" }, 
  { id: 2, title: "Task2",completed: false, deleted: "" }
];

export function initiateStore() {
  return createStore(taskReducer, initialState);
}
