import React, { Component } from "react";
import { nanoid } from "nanoid";
export default class index extends Component {
  handleAdd = (e) => {
    const { target, keyCode } = e;
    if (keyCode !== 13) return false;
    if (target.value.trim() === "") {
      alert("输入不能为空！");
      return;
    }
    const todoObj = { id: nanoid(), name: target.value, done: false };
    this.props.AddTodo(todoObj);
    target.value = "";
  };
  render() {
    return (
      <div className='todo-header'>
        <input
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
          onKeyUp={(e) => {
            this.handleAdd(e);
          }}
        />
      </div>
    );
  }
}
