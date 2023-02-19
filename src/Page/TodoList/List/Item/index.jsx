import React, { Component } from "react";

export default class index extends Component {
  state = {
    flag: false,
  };
  // 鼠标移入移出回调
  handleShow = (flag) => {
    this.setState({
      flag: flag,
    });
  };
  //删除
  handleDel = (id) => {
    if (window.confirm("确定删除嘛")) {
      this.props.handleDelete(id);
    }
  };
  //勾选不勾选回调
  handleCheck = (id, e) => {
    this.props.handleCkecked(id, e.target.checked);
  };
  render() {
    const { id, name, done } = this.props;
    const { flag } = this.state;
    return (
      <>
        <li
          style={{ background: flag ? "#ddd" : "", cursor: "pointer" }}
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
          {flag ? (
            <button
              onClick={() => {
                this.handleDel(id);
              }}
              className='btn btn-danger'
            >
              删除
            </button>
          ) : null}
        </li>
      </>
    );
  }
}
