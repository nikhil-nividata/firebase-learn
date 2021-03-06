import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../components/login";
import SignUp from "../components/signUp";
import HomePage from "../components/homepage";
import MyPosts from "../components/myPosts";

const index = () => {
  return (
    <Switch>
      <Route exact path="/login" render={(props) => <Login props={props} />} />
      <Route
        exact
        path="/signUp"
        render={(props) => <SignUp props={props} />}
      />
      <Route exact path="/" render={(props) => <HomePage props={props} />} />\
      <Route
        exact
        path="/myPosts"
        render={(props) => <MyPosts props={props} />}
      />
    </Switch>
  );
};

export default index;
