"use strict";

import React from "react";

import { ENTER_KEY_CODE } from "../constants/keyCodes";

export function NewTodo(props) {
  const addTodo = () => props.onAdd(props.draft);
  const onBlur = () => addTodo();
  const onChange = (event) => props.onUpdateDraft(event.target.value);
  const onKeyDown = (event) => {
    if (event.keyCode === ENTER_KEY_CODE) {
      addTodo();
    }
  };
  return (
    <input
      autoFocus={true}
      className="new-todo"
      placeholder="What needs to be done?"
      value={props.draft}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  );
}
