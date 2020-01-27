import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import FilterContainer from "./containers/FilterContainer";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <FilterContainer />
      <VisibleTodoList />
    </div>
  );
}

export default App;
