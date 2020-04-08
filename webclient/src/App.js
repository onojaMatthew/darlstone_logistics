import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}


export default App;
