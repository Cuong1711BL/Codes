import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    console.log(email, password)
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 m-4 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ">
            <div className="fs-1 mb-2">Sign In</div>
            <div>
              <div className="text-start">Email</div>
              <div>
                <input
                  className="form-control"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-start">Password</div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
            </div>

            <div className="my-3">
              <button className="btn btn-primary" onClick={onLogin}>Sign In</button>
            </div>

            <div>
              Need an account?
              <Link to="/register" className="mx-3 text-primary">
                Sign up
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Login;
