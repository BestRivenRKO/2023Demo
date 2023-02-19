import React, { Component } from "react";
import List from "./List";
import Search from "./Search";
export default class index extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <Search />
          <List />
        </div>
      </>
    );
  }
}
