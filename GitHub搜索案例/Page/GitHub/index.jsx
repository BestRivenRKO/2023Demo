import React, { Component } from "react";
import List from "./List";
import Search from "./Search";
export default class index extends Component {
  state = {
    lists: [], //初始化状态
    isFirst: true, //是否是第一次打开页面
    isLoding: false, // 标识是否处于加载中
    err: "", //存储请求错误信息
  };
  // 更新app的state
  handleData = (lists) => {
    this.setState(lists);
  };
  render() {
    return (
      <>
        <div className='container'>
          <Search handleData={this.handleData} />
          <List {...this.state} />
        </div>
      </>
    );
  }
}
