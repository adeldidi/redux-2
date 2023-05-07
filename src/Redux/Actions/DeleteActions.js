import { DELETE_TODO } from "../ActionTypes/ActionTypes";

export const RemoveTodoAction = (id) => {
    return { type: DELETE_TODO, payload: id };
  
  };