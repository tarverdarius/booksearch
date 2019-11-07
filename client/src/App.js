import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Title from "./components/Title";
import SavedBooks from "./pages/SavedBooks";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container.fluid">
          <Navbar />
          <Title />
          <Switch>
            <Route exact path="/" component={SavedBooks} />
            <Route exact path="/books" component={SavedBooks} />
            <Route exact path="/search" component={Search} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
