import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { signupUser, setAuthorization } from '../services/axios';
import { AuthContext } from '../App';

export const Register = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [isMatchPassword, setIsMatchPassword] = useState(true);
  const [isCheck, setIsCheck] = useState(false);
  const [checkMail, setCheckMail] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const { setAuthState } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSignUp = () => {
    if (!canSubmit()) {
      return;
    }

    setLoading(true);
    signupUser({
      username, email, password
    })
      .then((res) => {
        setAuthorization(res.data?.token);
        setAuthState({
          isAuthenticated: true,
          user: res.data?.user
        });
        navigate('/predict');

        localStorage.setItem("store", JSON.stringify(res.data));
        setLoading(false);
      }).catch((e) => {
        setLoading(false);
      })
  };

  const canSubmit = () => {
    return !(!username || !ValidateEmail(email) || !password || !rePassword || !isMatchPassword || isLoading);
  }

  const ValidateEmail = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    return false
  }

  const changeEmail = (mail) => {
    setEmail(mail);
    setCheckMail(ValidateEmail(email) ? 2 : 1);
  }

  const changePassword = (pass) => {
    setPassword(pass);
    if (!isCheck) return;
    if (rePassword !== pass) {
      setIsMatchPassword(false);
    }
    else setIsMatchPassword(true);
  }

  const changeRePassword = (pass) => {
    setRePassword(pass);
    if (password !== pass) {
      setIsMatchPassword(false);
    }
    else setIsMatchPassword(true);
    setIsCheck(true);
  }

  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col-0 col-md-3 col-lg-4"></div>
          <div className="col-11 col-md-6 col-lg-4 m-4 p-3 shadow p-3 mb-5 bg-body-tertiary rounded ">
            <div className="fs-2 mb-2">ĐĂNG KÝ</div>
            <div>
              <div className="text-start">Tên người dùng</div>
              <div>
                <input
                  className="form-control"
                  value={username}
                  onChange={(event) => setUserName(event.target.value)}
                />
              </div>
            </div>
            <div>
              <div className="text-start">Email</div>
              <div>
                <input
                  className="form-control"
                  value={email}
                  onChange={(event) => changeEmail(event.target.value)}
                />
              </div>
              {checkMail=== 1 && <div className="text-danger d-flex"><span>Email chưa hợp lệ</span></div>}
            </div>
            <div className="mt-2">
              <div className="text-start">Mật khẩu</div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(event) => changePassword(event.target.value)}
                />
              </div>
            </div>
            <div className="mt-2">
              <div className="text-start">Mật khẩu xác nhận</div>
              <div>
                <input
                  type="password"
                  className="form-control"
                  value={rePassword}
                  onChange={(event) => changeRePassword(event.target.value)}
                />
              </div>
              {!isMatchPassword && <div className="text-danger d-flex"><span>Mật khẩu chưa trùng khớp</span></div>}
            </div>

            <div className="my-3">
              <button className="btn btn-primary" onClick={onSignUp} disabled={!canSubmit()}>
                Đăng ký
              </button>
            </div>

            <div>
              Đã có tài khoản?
              <Link to="/login" className="mx-3 text-primary">
                Đăng nhập
              </Link>
            </div>
          </div>
          <div className="col-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Register;
