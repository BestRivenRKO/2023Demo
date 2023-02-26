import React from "react";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";
import store from "./Redux/store";
import { Provider } from "react-redux";

const Router = () => (
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
export default Router;
