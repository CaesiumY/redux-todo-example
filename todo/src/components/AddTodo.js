import React, { Component } from "react";

export default class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.inputTodo = document.getElementById("inputTodo");
  }

  onClick(e) {
    e.preventDefault();
    const { addTodo } = this.props;
    addTodo(this.inputTodo.value);
    this.inputTodo.value = "";
  }

  render() {
    return (
      <div>
        <form action="" id="addTodo">
          <input type="text" placeholder="Enter todo" id="inputTodo" />
          <button type="submit" onClick={this.onClick}>
            ADD
          </button>
        </form>
      </div>
    );
  }
}
