// actions
const INCREASE = {
  type: "Increase"
};

const DECREASE = {
  type: "Decrease"
};

const increase = () => INCREASE;
const decrease = () => DECREASE;

// reducers
counter = (state = 0, action) => {
  switch (action.type) {
    case "Increase":
      return state + 1;
    case "Decrease":
      return state - 1;
    default:
      return state;
  }
};

// store
const store = Redux.createStore(counter);
const valueEl = document.getElementById("value");

function render() {
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

document.getElementById("increase").addEventListener("click", () => {
  store.dispatch(increase());
});
document.getElementById("decrease").addEventListener("click", () => {
  store.dispatch(decrease());
});

document.getElementById("increaseIfOdd").addEventListener("click", () => {
  if (store.getState() % 2 === 0) {
    return;
  }
  store.dispatch(increase());
});

document.getElementById("increaseAsync").addEventListener("click", () => {
  setTimeout(() => {
    store.dispatch(increase());
  }, 1000);
});
