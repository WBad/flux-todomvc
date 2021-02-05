"use strict";

import React from "react";

import { TodoItem } from "./TodoItem";

export function Main(props) {
  if (props.todos.size === 0) {
    return null;
  }

  // If this were expensive we could move it to the container.
  const areAllComplete = props.todos.every((todo) => todo.complete);

  return (
    <section className="main">
      <input
        checked={areAllComplete ? "checked" : ""}
        className="toggle-all"
        type="checkbox"
        onChange={props.onToggleAllTodos}
      />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <ul className="todo-list">
        {[...props.todos.values()].reverse().map((todo) => (
          <TodoItem
            key={todo.id}
            editing={props.editing}
            todo={todo}
            onDeleteTodo={props.onDeleteTodo}
            onEditTodo={props.onEditTodo}
            onStartEditingTodo={props.onStartEditingTodo}
            onStopEditingTodo={props.onStopEditingTodo}
            onToggleTodo={props.onToggleTodo}
          />
        ))}
      </ul>
    </section>
  );
}
