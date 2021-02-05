/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"use strict";

export const ADD_TODO = "ADD_TODO";
export const DELETE_COMPLETED_TODOS = "DELETE_COMPLETED_TODOS";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const START_EDITING_TODO = "START_EDITING_TODO";
export const STOP_EDITING_TODO = "STOP_EDITING_TODO";
export const TOGGLE_ALL_TODOS = "TOGGLE_ALL_TODOS";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const UPDATE_DRAFT = "UPDATE_DRAFT";

export const TodoActionTypes = {
  ADD_TODO,
  DELETE_COMPLETED_TODOS,
  DELETE_TODO,
  EDIT_TODO,
  START_EDITING_TODO,
  STOP_EDITING_TODO,
  TOGGLE_ALL_TODOS,
  TOGGLE_TODO,
  UPDATE_DRAFT,
};

export default TodoActionTypes;
