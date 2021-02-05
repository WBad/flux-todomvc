"use strict";

import React from "react";

import { NewTodo } from "./NewTodo";

export function Header(props) {
  return (
    <header className="header">
      <h1>todos {props.storeInstance}</h1>
      <NewTodo {...props} />
    </header>
  );
}
