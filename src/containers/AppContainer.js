/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"use strict";

import { Container } from "flux/utils";
import { Dispatcher } from "flux";

import { AppView } from "../views/AppView";
import { GetTodoActions } from "../data/TodoActions";
import { TodoDraftStore } from "../data/TodoDraftStore";
import { TodoEditStore } from "../data/TodoEditStore";
import { TodoStore } from "../data/TodoStore";

const TodoDispatcher1 = new Dispatcher();
const TodoActions1 = GetTodoActions(TodoDispatcher1);
const TodoStore1 = new TodoStore(TodoDispatcher1);
const TodoDraftStore1 = new TodoDraftStore(TodoDispatcher1);
const TodoEditStore1 = new TodoEditStore(TodoDispatcher1);

export const AppContainer1 = Container.createFunctional(
  AppView,
  function getStores() {
    return [TodoStore1, TodoDraftStore1, TodoEditStore1];
  },
  function getState() {
    return {
      storeInstance: 1,
      todos: TodoStore1.getState(),
      draft: TodoDraftStore1.getState(),
      editing: TodoEditStore1.getState(),

      onAdd: TodoActions1.addTodo,
      onDeleteCompletedTodos: TodoActions1.deleteCompletedTodos,
      onDeleteTodo: TodoActions1.deleteTodo,
      onEditTodo: TodoActions1.editTodo,
      onStartEditingTodo: TodoActions1.startEditingTodo,
      onStopEditingTodo: TodoActions1.stopEditingTodo,
      onToggleAllTodos: TodoActions1.toggleAllTodos,
      onToggleTodo: TodoActions1.toggleTodo,
      onUpdateDraft: TodoActions1.updateDraft,
    };
  }
);

const TodoDispatcher2 = new Dispatcher();
const TodoActions2 = GetTodoActions(TodoDispatcher2);
const TodoStore2 = new TodoStore(TodoDispatcher2);
const TodoDraftStore2 = new TodoDraftStore(TodoDispatcher2);
const TodoEditStore2 = new TodoEditStore(TodoDispatcher2);

export const AppContainer2 = Container.createFunctional(
  AppView,
  function getStores() {
    return [TodoStore2, TodoDraftStore2, TodoEditStore2];
  },
  function getState() {
    return {
      storeInstance: 2,
      todos: TodoStore2.getState(),
      draft: TodoDraftStore2.getState(),
      editing: TodoEditStore2.getState(),

      onAdd: TodoActions2.addTodo,
      onDeleteCompletedTodos: TodoActions2.deleteCompletedTodos,
      onDeleteTodo: TodoActions2.deleteTodo,
      onEditTodo: TodoActions2.editTodo,
      onStartEditingTodo: TodoActions2.startEditingTodo,
      onStopEditingTodo: TodoActions2.stopEditingTodo,
      onToggleAllTodos: TodoActions2.toggleAllTodos,
      onToggleTodo: TodoActions2.toggleTodo,
      onUpdateDraft: TodoActions2.updateDraft,
    };
  }
);
