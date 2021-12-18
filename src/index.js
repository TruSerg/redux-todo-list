import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import Routes from "./routes/Routes";
import { configureStore } from "./store/configureStore";
import MainLayout from "./CommonComponents/MainLayout";

import "./styles/index.scss";

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <MainLayout>
      <Provider store={store}>
        <Routes />
      </Provider>
    </MainLayout>
  </BrowserRouter>,
  document.getElementById("root")
);
