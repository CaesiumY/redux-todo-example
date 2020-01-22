import React from "react";
import AddTodo from "./components/AddTodo";
import VisibleTodoList from "./containers/VisibleTodoList";
import "./css/App.css";

function App() {
  return (
    <div className="App">
      <AddTodo />
      <VisibleTodoList />
    </div>
  );
}

export default App;
