import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from '../App';
import { signinUser , setAuthorization } from '../services/axios';

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = () => {
    if(!email || !password) {
      return;
    }
    setLoading(true);
    signinUser({
      email, password
    })
      .then((res) => {
        setAuthorization(res.data?.token);
        setAuthState({
          isAuthenticated: true,
          user: res.data?.user
        });
        localStorage.setItem("store", JSON.stringify(res.data));

        navigate('/predict');
        setLoading(false);
      }).catch((e) => {
        setLoading(false);
        console.log(e?.message)
      })
  }
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4 m-4 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ">
            <div className="fs-2 mb-2">ĐĂNG NHẬP</div>
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
              <div className="text-start">Mật khẩu</div>
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
              <button className="btn btn-primary" onClick={onLogin} disabled={isLoading}>Đăng nhập</button>
            </div>

            <div>
              Tạo tài khoản mới?
              <Link to="/register" className="mx-3 text-primary">
                Đăng ký
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
