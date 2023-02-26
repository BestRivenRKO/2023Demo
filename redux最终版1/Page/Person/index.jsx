import React, { Component } from "react";
import { connect } from "react-redux";
import { personAction } from "../../Redux/actions/person";
class index extends Component {
  handleAdd = () => {
    const name = this.handleName.value;
    const age = this.handleAge.value * 1;
    const personObj = { id: Date.now(), name, age };
    console.log(personObj);
    this.props.personAction(personObj);
    this.handleName.value = "";
    this.handleAge.value = "";
  };
  render() {
    return (
      <div>
        <h2>Person组件</h2>
        <h2>当前求和是：{this.props.count}</h2>
        <input
          ref={(c) => {
            this.handleName = c;
          }}
          placeholder='输入名字'
        />
        <input
          ref={(c) => {
            this.handleAge = c;
          }}
          placeholder='输入年龄'
        />
        <button onClick={this.handleAdd}>添加</button>
        <ul>
          {this.props.state.map((item) => {
            return (
              <li key={item.id}>
                {item.name}----{item.age}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default connect(
  (state) => ({ state: state.persons, count: state.count }),
  { personAction }
)(index);
