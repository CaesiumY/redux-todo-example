import React, { Component } from "react";
import Todo from "./Todo";

export default class TodoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { todos } = this.props;
    const todoElements = todos.map((todo, index) => (
      <Todo key={index} {...todo} />
    ));
    return (
      <div>
        <ul>{todoElements}</ul>
      </div>
    );
  }
}
