export const AddTodoAction = (todo) => {
  console.log(todo)
  return { type: "ADD_TODO", payload: todo };
};

export const RemoveTodoAction = (id) => {
  return { type: "DELETE_TODO", payload: id };

};

