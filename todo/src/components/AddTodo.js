import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import "../css/AddTodo.css";

function AddTodo({ dispatch }) {
  let input;
  return (
    <div>
      <form
        action=""
        id="addTodo"
        onSubmit={e => {
          if (input.value) {
            e.preventDefault();
            dispatch(addTodo(input.value));
            input.value = "";
          } else {
            alert("값을 넣어주세요.");
          }
        }}
      >
        <input
          className="form-control"
          type="text"
          placeholder="Enter todo"
          id="inputTodo"
          ref={node => {
            input = node;
          }}
        />
        <button className="btn btn-primary" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
}

export default connect()(AddTodo);
