import React, { Component } from "react";
import axios from "axios";
export default class index extends Component {
  handleSearch = () => {
    // 获取用户输入
    const { value } = this.inp1;
    //发送网络请求
    if (value.trim() === "") {
      alert("输入不能为空");
      return;
    }
    // 通知app更新状态
    this.props.handleData({ isFirst: false, isLoding: true });
    axios.get(`/api1/search/users?q=${value}`).then(
      (res) => {
        const p = res.data.items;
        // 请求成功后通知app更新状态
        console.log(p);
        this.props.handleData({ isLoding: false, lists: p });
      },
      (err) => {
        // 请求失败后通知app更新状态
        this.props.handleData({ isLoding: false, err: err.message });
      }
    );
    // 清空输入
    this.inp1.value = "";
  };
  handleaaa = (e) => {
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
              onKeyUp={this.handleaaa}
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
