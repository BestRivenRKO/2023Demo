import React, { Component } from "react";

export default class index extends Component {
  // 全选不全选
  handleAll = (e) => {
    this.props.handleAllCheck(e.target.checked);
  };
  // 删除选中
  handleAllDel = () => {
    const { todos } = this.props;
    const num = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    if (num === 0) {
      alert("当前没有选中");
      return;
    }
    if (window.confirm("确定删除嘛")) {
      this.props.handleAlldelte();
    }
  };
  render() {
    const { todos } = this.props;
    const num = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            onChange={this.handleAll}
            checked={num === todos.length && num !== 0 ? true : false}
          />
        </label>
        <span>
          <span>已完成{num}</span> / 全部{todos.length}
        </span>
        <button onClick={this.handleAllDel} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    );
  }
}
