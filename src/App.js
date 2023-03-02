import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; //导入路由包
const Count = lazy(() => import("./Page/Count"));
const Context = lazy(() => import("./Page/Context"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Context />} />
        </Routes>
      </Suspense>
    );
  }
}

export default App;
