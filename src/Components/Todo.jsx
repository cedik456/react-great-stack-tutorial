import { useEffect, useRef, useState } from "react";
import "./Css/Todo.css";
import TodoItem from "./TodoItem";

let count = 0;

function Todo() {
  const [todo, setTodo] = useState([]);
  const inputRef = useRef(null);

  const add = () => {
    setTodo([
      ...todo,
      { no: count++, text: inputRef.current.value, display: "" },
    ]);
    inputRef.current.value = "";
  };

  useEffect(() => {
    setTimeout(() => {
      console.log(todo);
      localStorage.setItem("todo", JSON.stringify(todo));
    }, 100);
  }, [todo]);

  useEffect(() => {
    setTodo(JSON.parse(localStorage.getItem("todo")));
  }, []);

  return (
    <div>
      <div className="todo">
        <div className="todo-header">To-Do List</div>
        <div className="todo-add">
          <input
            ref={inputRef}
            type="text"
            placeholder="Add Your Task"
            className="todo-input"
          />
          <div
            onClick={() => {
              add();
            }}
            className="todo-add-btn"
          >
            ADD
          </div>
        </div>
        <div className="todo-list">
          {todo.map((item, index) => {
            return (
              <TodoItem
                key={index}
                no={item.no}
                display={item.display}
                text={item.text}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Todo;
