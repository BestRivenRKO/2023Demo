import React, { Component } from "react";
export default class index extends Component {
  // 求和
  handleNumber = (data) => {
    const { value } = this.handleCount;
    switch (data) {
      case "add":
        return;
      case "del":
        return;
      case "jiadd":
        return;
      case "asyncadd":
        return;
      default:
        return false;
    }
  };
  render() {
    return (
      <>
        <div className='box'>
          <div className='box_x'>
            <h2>当前求和为</h2>
            <select
              ref={(c) => {
                this.handleCount = c;
              }}
            >
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                this.handleNumber("add");
              }}
            >
              +
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                this.handleNumber("del");
              }}
            >
              -
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                this.handleNumber("jiadd");
              }}
            >
              奇数加
            </button>
            &nbsp;&nbsp;
            <button
              onClick={() => {
                this.handleNumber("asyncadd");
              }}
            >
              异步加
            </button>
          </div>
        </div>
      </>
    );
  }
}
