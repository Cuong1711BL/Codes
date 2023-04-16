import React from "react";
import "./home.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [select, setSelect] = useState(0);

  return (
    <div className="homepage">
      <div class="container text-center ">
        <div class="row pt-5">
          <div class="col-5 text-start">
            <div className="fs-3">Giới thiệu các bệnh trang web dự đoán</div>
            <div className="border d-flex justify-content-between mt-5 p-3 rounded bg-light">
              <div className="d-flex align-items-center">hjkl</div>
              <button className="btn btn-primary" onClick={() => setSelect(1)}>
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
            <div className="border d-flex justify-content-between mt-4 p-3 rounded bg-light">
              <div className="d-flex align-items-center">hjkl</div>
              <button className="btn btn-primary" onClick={() => setSelect(2)}>
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
            <div className="border d-flex justify-content-between mt-4 p-3 rounded bg-light">
              <div className="d-flex align-items-center">hjkl</div>
              <button className="btn btn-primary" onClick={() => setSelect(3)}>
                <i class="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
          <div class="col-7">
            {select === 0 && (
              <div className="p-3 ml-3 my-5">
                <div className="shadow-lg p-3 mb-5 rounded-pill fs-2 p-5 container-main ">
                  Yellow Apricot Tree Disease Classification
                  <div>
                    <Link to="/login" className="mx-1 btn btn-primary">
                      Sử dụng App <i class="bi bi-arrow-right-circle-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {select === 1 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
                <div>
                  11111111111111111111111 dolor sit amet, consectetur adip lorem
                  ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
                  amet, consectetur adip lorem ipsum dolor sit amet, consectetur
                  adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                  dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip
                </div>

                <div className="mt-3">
                  <img
                    className="img-detail"
                    src={require("../Assets/bg.png")}
                    alt="mai vàng"
                  />
                </div>
              </div>
            )}

            {select === 2 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
                <div>
                  222222222222222222222222 amet, consectetur adip lorem ipsum
                  dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip
                </div>

                <div className="mt-3">
                  <img
                    className="img-detail"
                    src={require("../Assets/bg.png")}
                    alt="mai vàng"
                  />
                </div>
              </div>
            )}

            {select === 3 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
                <div>
                  33333333333333333333333333333 amet, consectetur adip lorem
                  ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit
                  amet, consectetur adip lorem ipsum dolor sit amet, consectetur
                  adip lorem ipsum dolor sit amet, consectetur adip lorem ipsum
                  dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor
                  sit amet, consectetur adip lorem ipsum dolor sit amet,
                  consectetur adip lorem ipsum dolor sit amet, consectetur adip
                  lorem ipsum dolor sit amet, consectetur adip
                </div>

                <div className="mt-3">
                  <img
                    className="img-detail"
                    src={require("../Assets/bg.png")}
                    alt="mai vàng"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
