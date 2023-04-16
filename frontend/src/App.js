import Login from './login/Login';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Predict from "./predict";
import Header from './header/header';
import Register from './register/register';
import Home from './home/home';


function App() {
  return (
    <React.Fragment>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/predict" element={<Predict />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
