import React, { Component } from "react";
import store from "../../../Redux/store";
import {
  createIncrementAction,
  createDecrementAction,
} from "../../../Redux/count_action";
export default class index extends Component {
  componentDidMount() {
    store.subscribe(() => {
      this.setState({});
    });
  }
  // 求和
  handleNumber = (data) => {
    const { value } = this.handleCount;
    switch (data) {
      case "add":
        return store.dispatch(createIncrementAction(value * 1));
      case "del":
        return store.dispatch(createDecrementAction(value * 1));
      case "jiadd":
        return store.getState() % 2 !== 0
          ? store.dispatch(createIncrementAction(value * 1))
          : null;
      case "asyncadd":
        return setTimeout(() => {
          store.dispatch(createIncrementAction(value * 1));
        }, 1000);
      default:
        return false;
    }
  };
  render() {
    return (
      <>
        <div className='box'>
          <div className='box_x'>
            <h2>当前求和为{store.getState()}</h2>
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
