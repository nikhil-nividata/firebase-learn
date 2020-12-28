import React, { Component } from "react";
import "materialize-css";
import firebase from "firebase";
import "firebase/auth";
import Navbar from "./components/common/navbar";
import styles from "./App.module.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.authWatch();
  }

  authWatch = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Auth State Changed ", user);
    });
  };

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
