import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import React from "react";
import "./header.css";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from '../App';
import { useState, useEffect, useContext } from "react";
import { setAuthorization } from '../services/axios';

const Header = () => {
  const { authState, setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOut = () => {
    setAuthorization();
    localStorage.setItem('store', null);
    setAuthState({
      select: 1,
      isAuthenticated: false,
      user: {}
    });
    navigate('/');

  }

  const goHome = () => {
    setAuthState((state)=>({
      ...state,
      select: 1
    }));
    navigate('/')
  }

  return (
    <nav className="navbar header">
      <div className="container-fluid ">
        <span className="navbar-brand mb-0 h1 text-white fw-bold">
          DỰ ĐOÁN BỆNH TRÊN CÂY MAI VÀNG CÙNG TRÍ TUỆ NHÂN TẠO
        </span>
        <div>
          {!authState?.isAuthenticated &&
            <><Link to="/login" className="mx-1 btn btn-light fw-bold">
              Đăng nhập
            </Link>
              <Link to="/register" className="mx-1 btn btn-light  fw-bold">
                Đăng ký
              </Link>
            </>}

          <button className="mx-1 btn btn-light fw-bold" onClick={goHome}>Trang chủ</button>
          {authState?.isAuthenticated &&
            <button className="btn btn-outline-dark" onClick={logOut}>Đăng xuất</button>}
        </div>
      </div>
    </nav>
  );
};

export default Header;
