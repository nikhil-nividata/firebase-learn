import React from "react";
import { Navbar } from "react-materialize";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <Navbar
      alignLinks="right"
      brand={
        <a className="brand-logo" href="/">
          Logo
        </a>
      }
      centerLogo
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Link style={{ fontSize: "1.6rem" }} to="/login">
        {" "}
        Login{" "}
      </Link>
      <Link style={{ fontSize: "1.6rem", marginRight: "2vw" }} to="/signUp">
        Sign Up
      </Link>
    </Navbar>
  );
};

export default index;
