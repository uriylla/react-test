import React, { Component } from "react";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import store from "./store";
import { Normalize } from 'styled-normalize'

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Normalize />
        <Provider store={store}>
          <AppRouter />
        </Provider>
      </React.Fragment>
    );
  }
}
