import React, { Component } from "react";
import axios from "axios";
export default class View extends Component {
  handleGet = () => {
    axios.defaultsUrl = "http://localhost:3000/";
    axios
      .get("api1/students")
      .then((res) => {
        console.log("成功了", res.data);
      })
      .catch((err) => {
        console.log("失败了", err.message);
      });
  };
  handleGetCars = () => {
    axios.defaultsUrl = "http://localhost:3000/";
    axios
      .get("api2/cars")
      .then((res) => {
        console.log("成功了", res.data);
      })
      .catch((err) => {
        console.log("失败了", err.message);
      });
  };
  render() {
    return (
      <div>
        <button onClick={this.handleGet}>点击获取学生数据</button>
        <button onClick={this.handleGetCars}>点击获取汽车数据</button>
      </div>
    );
  }
}
