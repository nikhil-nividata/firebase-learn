import React, { Component } from "react";
import "materialize-css";
import Navbar from "./components/common/navbar";
import styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes />
      </Router>
    );
  }
}

export default App;
