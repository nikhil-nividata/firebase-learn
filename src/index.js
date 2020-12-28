import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCluflTUHT30S0AcXGVYbhYdgv2dBUXsMo",
  authDomain: "flutter-chat-demo-31cb2.firebaseapp.com",
  databaseURL: "https://flutter-chat-demo-31cb2.firebaseio.com",
  projectId: "flutter-chat-demo-31cb2",
  storageBucket: "flutter-chat-demo-31cb2.appspot.com",
  messagingSenderId: "511296830221",
  appId: "1:511296830221:web:3b6945b980d858170fce44",
  measurementId: "G-RWLDHMDEKC",
};

firebase.initializeApp(firebaseConfig);

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
