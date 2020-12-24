import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

const firebaseConfig = {
  apiKey: "AIzaSyDj2T5UWZqW3SB-rocJbxyYxO_BHDKc6VU",
  authDomain: "learn-project-nj.firebaseapp.com",
  projectId: "learn-project-nj",
  storageBucket: "learn-project-nj.appspot.com",
  messagingSenderId: "691336416721",
  appId: "1:691336416721:web:5b01bd4bd6ec777905a4f0",
  measurementId: "G-M70RVR713R",
};

firebase.initializeApp(firebaseConfig);
