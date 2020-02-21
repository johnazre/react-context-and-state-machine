import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TodoListWithContext from "./views/TodoListWithContext";
import StateMachineExample from "./views/StateMachineExample";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Todo list with context</Link>
            </li>
            <li>
              <Link to="/state-machine">State Machine Example</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/state-machine">
            <StateMachineExample />
          </Route>
          <Route path="/">
            <TodoListWithContext />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
