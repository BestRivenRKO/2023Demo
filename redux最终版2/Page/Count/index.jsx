import React, { Component } from "react";
import { connect } from "react-redux";
import {
  addAction,
  delAction,
  asyncaddAction,
} from "../../Redux/actions/count";
import Person from "../Person";
class index extends Component {
  handleSetValue = (data) => {
    const { value } = this.handleValue;
    switch (data) {
      case "add":
        return this.props.addAction(value * 1);
      case "jiadd":
        return this.props.count % 2 !== 0
          ? this.props.addAction(value * 1)
          : null;
      case "del":
        return this.props.delAction(value * 1);
      case "asyncadd":
        return this.props.asyncaddAction(value * 1, 1000);
      default:
        return false;
    }
  };
  render() {
    return (
      <>
        <div>
          <h2>当前是Count组件</h2>
          <h2>当前求和为：{this.props.count}</h2>
          <h2>下方组件人数为：{this.props.persons}</h2>
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
              this.handleSetValue("add");
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              this.handleSetValue("del");
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              this.handleSetValue("jiadd");
            }}
          >
            奇数+
          </button>
          <button
            onClick={() => {
              this.handleSetValue("asyncadd");
            }}
          >
            异步+
          </button>
          <hr />
          <Person />
        </div>
      </>
    );
  }
}
export default connect(
  (state) => ({ count: state.count, persons: state.persons.length }),
  {
    addAction,
    delAction,
    asyncaddAction,
  }
)(index);
