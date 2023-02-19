import React, { Component } from "react";
import Item from "./Item";
export default class index extends Component {
  render() {
    const { todos, checkedTodo, deleteTodo } = this.props;
    return (
      <ul className='todo-main'>
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              checkedTodo={checkedTodo}
              deleteTodo={deleteTodo}
            />
          );
        })}
      </ul>
    );
  }
}
