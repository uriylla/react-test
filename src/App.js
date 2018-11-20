import React, { Component } from "react";
import { Provider } from "react-redux";
import styled from 'styled-components';
import AppRouter from "./routers/AppRouter";
import store from "./store";
import { Normalize } from 'styled-normalize'

const AppWrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #232323;
`

export default class App extends Component {
  render() {
    return (
      <AppWrapper>
        <React.Fragment>
          <Normalize />
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </React.Fragment>
      </AppWrapper>
    );
  }
}
