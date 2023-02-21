import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
export default class index extends Component {
  state = {
    todos: [
      { id: 1, name: "吃饭", done: false },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打代码", done: true },
      { id: 4, name: "lol", done: false },
    ],
  };
  //删除
  handleDelete = (id) => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => {
      if (item.id !== id) return item;
    });
    this.setState({
      todos: newTodo,
    });
  };
  // 添加
  AddTodo = (todoObj) => {
    const { todos } = this.state;
    const newTodo = [todoObj, ...todos];
    this.setState({
      todos: newTodo,
    });
  };
  //勾选不勾选回调
  handleCkecked = (id, done) => {
    const { todos } = this.state;
    const newTodo = todos.map((item) => {
      if (item.id === id) {
        return { ...item, done };
      } else {
        return item;
      }
    });
    this.setState({
      todos: newTodo,
    });
  };
  // 全选
  handleAllCheck = (done) => {
    const { todos } = this.state;
    const newTodo = todos.map((item) => {
      return { ...item, done };
    });
    this.setState({
      todos: newTodo,
    });
  };
  // 删除选中
  handleAlldelte = () => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => {
      return !item.done;
    });
    this.setState({
      todos: newTodo,
    });
  };
  render() {
    const { todos } = this.state;
    return (
      <div id='root'>
        <div className='todo-container'>
          <div className='todo-wrap'>
            <Header AddTodo={this.AddTodo} />
            <List
              todos={todos}
              handleDelete={this.handleDelete}
              handleCkecked={this.handleCkecked}
            />
            <Footer
              todos={todos}
              handleAllCheck={this.handleAllCheck}
              handleAlldelte={this.handleAlldelte}
            />
          </div>
        </div>
      </div>
    );
  }
}
