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

    this.state = {
      uid: "",
    };
  }

  componentDidMount() {
    this.authWatch();
  }

  authWatch = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log("Auth State Changed ", user);
      this.setState({
        uid: user.uid,
      });
    });
  };

  render() {
    const { uid } = this.state;
    return (
      <Router>
        <Navbar />
        <Routes uid />
      </Router>
    );
  }
}

export default App;
