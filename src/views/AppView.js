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

import { Footer } from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";

export function AppView(props) {
  return (
    <section className="todoapp">
      <Header {...props} />
      <Main {...props} />
      <Footer {...props} />
    </section>
  );
}
