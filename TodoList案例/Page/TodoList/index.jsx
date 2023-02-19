import React, { Component } from "react";
import Header from "./Header";
import List from "./List";
import Footer from "./Footer";
export default class index extends Component {
  // 初始化状态
  state = {
    todos: [
      { id: 1, name: "吃饭", done: true },
      { id: 2, name: "睡觉", done: true },
      { id: 3, name: "打代码", done: false },
    ],
  };
  // addTodo用于添加一个todo，参数是todo对象
  addTodo = (todoObj) => {
    console.log("111", todoObj);
    const { todos } = this.state;
    const newTodos = [todoObj, ...todos];
    this.setState({
      todos: newTodos,
    });
  };
  // checkedTodo用于勾选和未勾选todo
  checkedTodo = (id, done) => {
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
  // 删除一个todo 的回调
  deleteTodo = (id) => {
    const { todos } = this.state;
    const newTodo = todos.filter((item) => {
      return item.id !== id;
    });
    this.setState({
      todos: newTodo,
    });
  };
  // 全选/不全选
  checkedAllTodo = (done) => {
    const { todos } = this.state;
    const newTodo = todos.map((item) => {
      return { ...item, done };
    });
    this.setState({
      todos: newTodo,
    });
  };
  // 删除已完成
  delAllDone = () => {
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
            <Header addTodo={this.addTodo} />
            <List
              todos={todos}
              checkedTodo={this.checkedTodo}
              deleteTodo={this.deleteTodo}
            />
            <Footer
              todos={todos}
              checkedAllTodo={this.checkedAllTodo}
              delAllDone={this.delAllDone}
            />
          </div>
        </div>
      </div>
    );
  }
}
