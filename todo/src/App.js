import React from "react";
import { HashRouter, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import FilterContainer from "./containers/FilterContainer";
import "./css/App.css";

function App() {
  return (
    <HashRouter>
      <Route>
        <div className="App">
          <AddTodo />
          <FilterContainer />
          <VisibleTodoList />
        </div>
      </Route>
    </HashRouter>
  );
}

export default App;
