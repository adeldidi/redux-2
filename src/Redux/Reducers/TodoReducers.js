const initialtate = {
  todos: [
    {
      title: "TEST",
      id: 1,
    },
  ],
};
export const todoReducer = (state = initialtate, action) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log('payload',action.payload)
      return { ...state, todos: [...state.todos, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((e) => e.id !== action.payload),
      };

    default:
      return state;
  }
};
