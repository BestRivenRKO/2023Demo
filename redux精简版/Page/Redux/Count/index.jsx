import React, { Component } from "react";
import store from "../../../Redux/store";
export default class index extends Component {
  componentDidMount() {
    // 检测redux里状态的变化，只要变化就调用render
    store.subscribe(() => {
      this.setState({});
    });
  }
  //   加
  handleAdd = () => {
    const { value } = this.handleCount;
    store.dispatch({ type: "increment", data: Number(value) });
  };
  //   减
  handleDel = () => {
    const { value } = this.handleCount;
    store.dispatch({ type: "decrement", data: Number(value) });
  };
  //   奇数加
  handleJiAdd = () => {
    const { value } = this.handleCount;
    const count = store.getState();
    if (count % 2 !== 0) {
      store.dispatch({ type: "increment", data: Number(value) });
    }
  };
  //   异步加
  handleAsyncAdd = () => {
    const { value } = this.handleCount;
    setTimeout(() => {
      store.dispatch({ type: "increment", data: Number(value) });
    }, 1000);
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
            <button onClick={this.handleAdd}>+</button>&nbsp;&nbsp;
            <button onClick={this.handleDel}>-</button>&nbsp;&nbsp;
            <button onClick={this.handleJiAdd}>奇数加</button>&nbsp;&nbsp;
            <button onClick={this.handleAsyncAdd}>异步加</button>
          </div>
        </div>
      </>
    );
  }
}
