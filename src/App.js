import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; //导入路由包
import store from "./Redux/store";
const Count = lazy(() => import("./containers/Count"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Count store={store} />} />
        </Routes>
      </Suspense>
    );
  }
}

export default App;
