import './App.css';
import React, { Fragment } from 'react';

import Header from './components/layout/Header';
import Dashboard from './components/project/Dashboard';
import Container from '@mui/material/Container'

import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Fragment>
        <Header />
        <Container>
          <Dashboard />
        </Container>
      </Fragment>
    </Provider>
  );
}

export default App;
