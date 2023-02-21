import React, { Component } from "react";
import axios from "axios";
const Pubsub = require("pubsub-js");
export default class index extends Component {
  handleSearch = async () => {
    Pubsub.publish("handle", { name: "桥", age: "小花" });
    // 获取用户输入
    const { value } = this.inp1;
    //发送网络请求
    if (value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    // 通知app更新状态
    Pubsub.publish("handle", { isFirst: false, isLoding: true });
    try {
      const res = await fetch(`/api1/search/users2?q=${value}`);
      const data = await res.json();
      console.log(data);
      Pubsub.publish("handle", { isLoding: false, lists: data.items });
    } catch (err) {
      console.log(err);
    }

    // 清空输入
    this.inp1.value = "";
  };
  // 回车搜索
  handleKeySearch = (e) => {
    if (e.keyCode !== 13) return;
    this.handleSearch();
  };
  render() {
    return (
      <>
        <section className='jumbotron'>
          <h3 className='jumbotron-heading'>Search Github Users</h3>
          <div>
            <input
              onKeyUp={this.handleKeySearch}
              ref={(c) => {
                this.inp1 = c;
              }}
              type='text'
              placeholder='enter the name you search'
            />
            &nbsp;<button onClick={this.handleSearch}>Search</button>
          </div>
        </section>
      </>
    );
  }
}
