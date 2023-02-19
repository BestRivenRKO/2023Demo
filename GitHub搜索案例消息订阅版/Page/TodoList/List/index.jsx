import React, { Component } from "react";
import Item from "./Item";
export default class index extends Component {
  render() {
    const { todos, handleDelete, handleCkecked } = this.props;
    return (
      <ul className='todo-main'>
        {todos.map((item) => {
          return (
            <Item
              key={item.id}
              {...item}
              handleDelete={handleDelete}
              handleCkecked={handleCkecked}
            />
          );
        })}
      </ul>
    );
  }
}
