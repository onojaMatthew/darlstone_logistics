import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Header from './components/pages/Header';
import Footer from './components/pages/Footer';
import Quote from './components/pages/Quote';
import Dashboard from './components/Dashboard/Dashboard';

const styles = {
  ntf: {
    textAlign: "center",
    marginTop: 300,
    fontSize: 32,
    fontWeight: "bold"
  },
  container: {
    // minHeight: 400
  }
}
class App extends Component{
  state = {
    loading: true
  }

  componentWillMount = async () => {
    this.loaderTimeOut().then(() => {
      this.setState({
        loading: false
      })
    })
  }

  loaderTimeOut = () => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(), 2500)
    })
  }

  render() {
    const { loading } = this.state;
    if(loading) { // if your component doesn't have to wait for an async action, remove this block 
      return "Hey loading is happing now"; // render null when app is not ready
    }

    return (
      <BrowserRouter>
        {window.location.pathname.slice(0,12).includes("/dashboard") ? null : <Header />}
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/request" render={(props) => <Quote {...props} />} />
          <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
          <Route path="/*" render={() => <div style={styles.ntf}>404 Page Not Found!!</div>} />
        </Switch>
        {window.location.pathname.slice(0,12).includes("/dashboard") ? null : <Footer />}
      </BrowserRouter>
    );
  }
}


export default App;
