import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Quote from './components/pages/Quote';

const styles = {
  ntf: {
    textAlign: "center",
    marginTop: 300,
    fontSize: 32,
    fontWeight: "bold"
  },
  container: {
    minHeight: 400
  }
}
class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div style={styles.container}>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/request" render={(props) => <Quote {...props} />} />
          <Route path="/*" render={() => <div style={styles.ntf}>404 Page Not Found!!</div>} />
        </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}


export default App;
