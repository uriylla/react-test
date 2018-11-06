import React, { Component } from "react";
import { Provider } from "react-redux";
import AppRouter from "./AppRouter";
import store from "./store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}
