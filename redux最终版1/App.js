import React, { Component, Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom"; //导入路由包
const Count = lazy(() => import("./Page/Count"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Count />} />
        </Routes>
      </Suspense>
    );
  }
}

export default App;
