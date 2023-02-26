import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addaction,
  delaction,
  asyncaddaction,
} from "../../Redux/actions/count";
import Person from "../Person";
class index extends Component {
  handleSetCount = (data) => {
    const { value } = this.handleValue;
    switch (data) {
      case "add":
        return this.props.addaction(value * 1);
      case "del":
        return this.props.delaction(value * 1);
      case "jiadd":
        return this.props.state % 2 !== 0
          ? this.props.addaction(value * 1)
          : null;
      case "asyncadd":
        return this.props.asyncaddaction(value * 1, 1000);
      default:
        return false;
    }
  };
  render() {
    return (
      <div>
        <h2>Count组件</h2>
        当前求和：{this.props.state}
        <br />
        <select
          ref={(c) => {
            this.handleValue = c;
          }}
        >
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
        </select>
        <button
          onClick={() => {
            this.handleSetCount("add");
          }}
        >
          加
        </button>
        <button
          onClick={() => {
            this.handleSetCount("del");
          }}
        >
          减
        </button>
        <button
          onClick={() => {
            this.handleSetCount("jiadd");
          }}
        >
          奇数加
        </button>
        <button
          onClick={() => {
            this.handleSetCount("asyncadd");
          }}
        >
          异步加
        </button>
        <br />
        <div>
          <ul>
            {this.props.persons.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}----{item.age}
                </li>
              );
            })}
          </ul>
        </div>
        <hr />
        <Person />
      </div>
    );
  }
}
export default connect(
  (state) => ({ state: state.count, persons: state.persons }),
  {
    addaction,
    delaction,
    asyncaddaction,
  }
)(index);
