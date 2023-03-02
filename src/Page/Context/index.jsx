import React, { Component, createContext } from "react";
const MyContext = createContext();

export default class A extends Component {
  state = {
    count: 1,
    age: 13,
  };
  render() {
    const { count, age } = this.state;
    return (
      <div style={{ background: "orange", width: "500px", padding: "8px" }}>
        <h2>当前组件是A</h2>
        <h2>数据是：{this.state.count}</h2>
        <MyContext.Provider value={{ count, age }}>
          <B />
        </MyContext.Provider>
      </div>
    );
  }
}

class B extends Component {
  render() {
    return (
      <div style={{ background: "pink", width: "100%", padding: "8px" }}>
        <h2>当前组件是B</h2>
        <h2>数据是：{this.props.count}</h2>
        <C count={this.props.count}></C>
      </div>
    );
  }
}

const C = () => {
  return (
    <div style={{ background: "yellow", width: "100%", padding: "8px" }}>
      <h2>当前组件是C</h2>
      <h2>
        数据是：
        <MyContext.Consumer>
          {(value) => {
            return ` ${value.count} ,年龄是${value.age}`;
          }}
        </MyContext.Consumer>
      </h2>
    </div>
  );
};
