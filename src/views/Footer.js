"use strict";

import React from "react";

export function Footer(props) {
  if (props.todos.size === 0) {
    return null;
  }

  const remaining = props.todos.filter((todo) => !todo.complete).size;
  const completed = props.todos.size - remaining;
  const phrase = remaining === 1 ? " item left" : " items left";

  let clearCompletedButton = null;
  if (completed > 0) {
    clearCompletedButton = (
      <button
        className="clear-completed"
        onClick={props.onDeleteCompletedTodos}
      >
        Clear completed ({completed})
      </button>
    );
  }

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{remaining}</strong>
        {phrase}
      </span>
      {clearCompletedButton}
    </footer>
  );
}
