import React, { Component } from "react";

export default class index extends Component {
  state = {
    flag: false, //标识鼠标移入移出状态
  };
  // 鼠标移入移出的回调
  handleShow = (state) => {
    this.setState({
      flag: state,
    });
  };
  // 鼠标勾选未勾选回调
  handleCheck = (id, e) => {
    this.props.checkedTodo(id, e.target.checked);
  };
  // 删除一个todo的回调
  handleDel = (id) => {
    if (window.confirm("确定删除嘛？")) {
      this.props.deleteTodo(id);
    } else {
      return;
    }
  };
  render() {
    const { id, name, done } = this.props;
    const { flag } = this.state;
    return (
      <>
        <li
          style={{ backgroundColor: flag ? "#ddd" : "", cursor: "pointer" }}
          onMouseEnter={() => {
            this.handleShow(true);
          }}
          onMouseLeave={() => {
            this.handleShow(false);
          }}
        >
          <label>
            <input
              type='checkbox'
              checked={done}
              onChange={(e) => {
                this.handleCheck(id, e);
              }}
            />
            <span>{name}</span>
          </label>
          <button
            className='btn btn-danger'
            style={{ display: flag ? "block" : "none" }}
            onClick={() => {
              this.handleDel(id);
            }}
          >
            删除
          </button>
        </li>
      </>
    );
  }
}
