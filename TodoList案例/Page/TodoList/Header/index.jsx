import React, { Component } from "react";
import { nanoid } from "nanoid";
export default class index extends Component {
  handleKeyUp = (e) => {
    const { keyCode, target } = e;
    if (keyCode !== 13) return;
    if (target.value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    // 准备一个todo对象
    const todoObj = { id: nanoid(), name: target.value, done: false };
    // 把todo对象当作参数传给App
    this.props.addTodo(todoObj);
    //添加完事件输入栏置空
    target.value = "";
  };
  render() {
    return (
      <div className='todo-header'>
        <input
          onKeyUp={this.handleKeyUp}
          type='text'
          placeholder='请输入你的任务名称，按回车键确认'
        />
      </div>
    );
  }
}
