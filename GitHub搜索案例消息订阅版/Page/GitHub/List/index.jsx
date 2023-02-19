import React, { Component } from "react";
// import Pubsub from "pubsub-js";
const Pubsubs = require("pubsub-js");
export default class index extends Component {
  state = {
    lists: [], //初始化状态
    isFirst: true, //是否是第一次打开页面
    isLoding: false, // 标识是否处于加载中
    err: "", //存储请求错误信息
  };
  // 订阅消息
  componentDidMount() {
    this.token = Pubsubs.subscribe("handle", (msg, data) => {
      this.setState(data);
    });
  }
  // 卸载组件时取消订阅
  componentWillUnmount() {
    Pubsubs.unsubscribe(this.token);
  }
  render() {
    const { lists, isFirst, isLoding, err } = this.state;
    return (
      <>
        <div className='row'>
          {isFirst ? (
            <h2
              style={{ fontSize: "50px", margin: "0px auto", width: "490px" }}
            >
              欢迎使用GitHub搜索!
            </h2>
          ) : isLoding ? (
            <h2
              style={{ fontSize: "50px", margin: "0px auto", width: "190px" }}
            >
              Loding...
            </h2>
          ) : err !== "" ? (
            <h2
              style={{
                fontSize: "20px",
                margin: "0px auto",
                width: "430px",
                color: "red",
              }}
            >
              {err}
            </h2>
          ) : lists.length === 0 ? (
            <h2
              style={{ fontSize: "50px", margin: "0px auto", width: "390px" }}
            >
              搜索无结果...
            </h2>
          ) : (
            lists.map((item) => {
              return (
                <div className='card' key={item.id}>
                  {/* eslint-disable-next-line react/jsx-no-target-blank */}
                  <a href={item.html_url} target='_blank'>
                    {/* eslint-disable-next-line jsx-a11y/alt-text */}
                    <img
                      src={item.avatar_url}
                      // eslint-disable-next-line react/style-prop-object
                      style={{ width: "100px" }}
                    />
                  </a>
                  <p className='card-text'>{item.login}</p>
                </div>
              );
            })
          )}
        </div>
      </>
    );
  }
}
