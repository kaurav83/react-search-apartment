import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import Header from './components/layout/Header';
import Main from './components/layout/Main';
import Footer from './components/layout/Footer';

import layout from './components/layout/Layout.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className={layout.wrapper}>
            <Header />
            <Route exact path="/" component={Main} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
