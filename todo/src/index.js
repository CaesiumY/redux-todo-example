import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { addTodo } from "./actions";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import "./css/index.css";

const store = createStore(rootReducer);

const render = () =>
  ReactDOM.render(
    <div id="app">
      <AddTodo
        addTodo={text => {
          store.dispatch(addTodo(text));
        }}
      />
      <TodoList todos={store.getState()} />
    </div>,

    document.getElementById("root")
  );

render();
store.subscribe(render);
