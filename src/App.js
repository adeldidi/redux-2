import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./Redux/Actions/TodoActions";

function App() {
  const todolist = useSelector((state) => state.todoReducer.todos);
  console.log("todos", todolist);
  const [todo, setTodo] = useState({});
  const dispatch = useDispatch();

  console.log("change", todo);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };
  const removeHandler = (t) => {
    dispatch(RemoveTodoAction(t));
  };
  const handleChange = (e) => {
    setTodo({
      id:Math.random(),
      title: e.target.value,
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        To-do-list App in Redux
        <form onSubmit={(e) => handleSubmit(e)}>
          <input placeholder="Enter a todo" onChange={handleChange} />
          <button type="submit">GO </button>
        </form>
      </header>
      <ul>
        {
          todolist.map((t) => (
            <li key={t.id}>
              <span>{t.title}</span>
              <button onClick={() => removeHandler(t.id)}> Delete </button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default App;
