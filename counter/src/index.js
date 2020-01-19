import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import Counter from "./components/Counter";
import { increase, decrease } from "./actions";
import rootReducer from "./reducers";
import "./css/index.css";

const store = createStore(rootReducer);

const render = () =>
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrease={() => store.dispatch(increase())}
      onDecrease={() => store.dispatch(decrease())}
    />,
    document.getElementById("root")
  );

render();
store.subscribe(render);
