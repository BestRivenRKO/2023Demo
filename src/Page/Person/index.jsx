import React, { Component } from "react";
import { connect } from "react-redux";
import { addPerson } from "../../Redux/actions/person";
class index extends Component {
  state = {
    list: [{ id: Date.now(), name: "tom", age: "12" }],
  };
  handlePerson = () => {
    const name = this.handleInp.value;
    const age = this.handleInp2.value * 1;

    const PersonObj = { id: Date.now(), name, age };
    this.props.addPerson(PersonObj);

    this.handleInp.value = "";
    this.handleInp2.value = "";
  };
  render() {
    return (
      <>
        <div>
          <h2>当前是Person组件</h2>
          <h2>上方求和为：{this.props.count}</h2>
          <input
            ref={(c) => {
              this.handleInp = c;
            }}
            placeholder='输入名字'
          />
          <input
            ref={(c) => {
              this.handleInp2 = c;
            }}
            placeholder='输入年龄'
          />
          <button onClick={this.handlePerson}>添加</button>
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
      </>
    );
  }
}
export default connect(
  (state) => ({ persons: state.persons, count: state.count }),
  {
    addPerson,
  }
)(index);
