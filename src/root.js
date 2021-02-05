/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

"use strict";

import React from "react";
import ReactDOM from "react-dom";

import { AppContainer1, AppContainer2 } from "./containers/AppContainer";

const AppRoot = () => (
  <>
    <AppContainer1 />
    <AppContainer2 />
  </>
);

ReactDOM.render(<AppRoot />, document.getElementById("approot"));
