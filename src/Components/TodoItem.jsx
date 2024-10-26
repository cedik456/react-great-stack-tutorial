import React from "react";
import "./Css/TodoItems.css";
import tick from "./Assets/tick.png";
import not_tick from "./Assets/not_tick.png";
import cross from "./Assets/cross.png";

function TodoItem({ no, display, text }) {
  return (
    <div className="todoItems">
      <div className="todoItems-container">
        <img src={not_tick} alt="" />
        <img src={tick} alt="" />
        <div className="todoItems-text">{text}</div>
      </div>
      <img className="todoItems-crossIcon" src={cross} alt="" />
    </div>
  );
}

export default TodoItem;
