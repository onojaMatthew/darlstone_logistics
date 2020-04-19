import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Home from './components/pages/Home';
import Quote from './components/pages/Quote';
import Dashboard from './components/Dashboard/Dashboard';
import Signup from './components/Dashboard/Signup';
import SignIn from './components/Dashboard/SignIn';
import Auth from "./helper/Auth";

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

  componentDidMount = async () => {
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
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/request" render={(props) => <Quote {...props} />} />
          <Route path="/accounts" render={(props) => <Signup {...props} />} />
          <Route path="/accountl" render={(props) => <SignIn {...props} />} />
          {Auth.isUserAuthenticated() ? (
            <Route path="/dashboard" render={(props) => <Dashboard {...props} />} />
          ) : <Redirect to="/accountl" />}
          
          <Route path="/*" render={() => <div style={styles.ntf}>404 Page Not Found!!</div>} />
        </Switch>
      </BrowserRouter>
    );
  }
}


export default App;
