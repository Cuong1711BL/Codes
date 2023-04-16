import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import React from "react";
import { ReactComponent as Cblogo } from "../cblogo.svg";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar header">
      <div class="container-fluid ">
        <span class="navbar-brand mb-0 h1 text-white">
          Cuong
        </span>
        <div>
          <Link to="/login" className="mx-1 btn btn-light">
            Log in
          </Link>
          <Link to="/register" className="mx-1 btn btn-light">
            Sign up
          </Link>
          <Link to="/" className="mx-1 btn btn-light">
            Home
          </Link>
          <div className="btn btn-outline-dark">Log Out</div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
