import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState([]);
  // let input = document.querySelector("input");
  function add(event) {
    event.preventDefault();

    setTodo([...todo, event.target.input.value]);
    event.target.input.value = "";
  }
  function dlt(event) {
    // event.preventDefault();
    todo.splice(event.target.value, 1);
    setTodo([...todo]);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={add}>
          <input name="input" type="text" />
          <button type="submit">Add</button>
        </form>
      </div>
      <ul>
        {todo.map((list, index) => {
          return (
            <li key={index}>
              {index + 1}. {list}
              <button
                value={index}
                className="delete"
                type="submit"
                onClickCapture={dlt}
              >
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
