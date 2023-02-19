import React, { Component } from "react";

export default class index extends Component {
  // 全选的回调
  handleCheckAll = (e) => {
    this.props.checkedAllTodo(e.target.checked);
  };
  // 删除已完成
  delAll = () => {
    if (window.confirm("确定删除已完成的嘛")) {
      this.props.delAllDone();
    } else {
      return;
    }
  };
  render() {
    const { todos } = this.props;
    // 已经完成的
    const todosNum = todos.reduce((pre, cur) => {
      return pre + (cur.done ? 1 : 0);
    }, 0);
    return (
      <div className='todo-footer'>
        <label>
          <input
            type='checkbox'
            checked={todosNum === todos.length && todosNum !== 0 ? true : false}
            onChange={(e) => {
              this.handleCheckAll(e);
            }}
          />
        </label>
        <span>
          <span>已完成{todosNum}</span> / 全部{todos.length}
        </span>
        <button onClick={this.delAll} className='btn btn-danger'>
          清除已完成任务
        </button>
      </div>
    );
  }
}
