import React from "react";
import "./home.css";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '../App';
import { Link , useParams } from "react-router-dom";

export const Home = (props) => {
  const { authState } = useContext(AuthContext);
  const [select, setSelect] = useState(1);
  useEffect(()=>{
    setSelect(authState.select)
  },[authState])

  return (
    <div className="homepage">
      <div className="container text-center ">
        <div className="row pt-5">
          <div className="col-5 text-start">
            <div className="fs-3 fw-bold text-center">Giới thiệu các bệnh trên cây mai vàng ứng dụng có thể dự đoán</div>
            <div className="border d-flex justify-content-between mt-5 p-3 rounded bg-light">
              <div className="d-flex align-items-center fw-bold fs-5">Bệnh vàng lá</div>
              <button className="btn btn-primary" onClick={() => setSelect(3)}>
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
            <div className="border d-flex justify-content-between mt-4 p-3 rounded bg-light">
              <div className="d-flex align-items-center fw-bold fs-5">Bệnh rỉ sét</div>
              <button className="btn btn-primary" onClick={() => setSelect(2)}>
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
            <div className="border d-flex justify-content-between mt-4 p-3 rounded bg-light">
              <div className="d-flex align-items-center fw-bold fs-5">Bệnh cháy lá</div>
              <button className="btn btn-primary" onClick={() => setSelect(0)}>
                <i className="bi bi-arrow-right-circle"></i>
              </button>
            </div>
          </div>
          <div className="col-7">
            {select === 1 && (
              <div className="p-3 ml-3">
                <div className="shadow-lg p-3 fs-4 p-5 container-main rounded ">
                  Ứng dụng dự đoán những bệnh phổ biến trên cây mai vàng thông qua hình ảnh dấu hiệu trên lá giúp người sử dụng phát hiện các bệnh phổ biến trên cây mai vàng một cách nhanh chóng và tiện lợi.
                  <div className="mt-3">
                    <Link to={authState?.isAuthenticated ? '/predict' : '/login'} className="mx-1 btn btn-primary fs-4" >
                      Sử dụng App <i className="bi bi-arrow-right-circle-fill"></i>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {select === 3 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
                <div className='fw-bold text-center fs-4 mb-2'>
                  Bệnh vàng lá
                </div>
                <div className="d-flex text-start">
                  <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Biểu hiện: </span>
                  <span>
                    Điển hình của bệnh vàng lá gân xanh trên cây mai vàng là lá mai sẽ bị nhỏ lại,
                    cả gân chính và gân phụ đều xanh, nhưng phần thịt lá lại chuyển vàng.
                  </span>
                </div>
                <div className="d-flex text-start">
                  <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Nguyên nhân: </span>
                  <span >
                    Bệnh vàng lá gân xanh xảy ra trên cây mai nguyên nhân chính là
                    do cây không được cung cấp đủ các nguyên tố như Sắt và Magie.
                  </span>
                  </div>
                  <div className="d-flex text-start">
                  <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Hệ quả: </span>
                  <span>
                    Bệnh vàng lá gân xanh gây sụt giảm khả năng quang hợp của cây mai vàng,
                    khiến cho cây sinh trưởng kém, có thể mất khả năng cho hoa hoặc hoa không được lớn.
                  </span>
                  </div>
                  <div className="d-flex text-start">
                  <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Cách điều trị: </span>
                  <span>
                  Bổ sung kịp thời các loại khoáng trung vi lượng như Sắt và Magie cho 
                  cây mai thông qua việc bón phân cho cây.
                  </span>
                  </div>

                <div className="mt-3">
                  <img
                    className="img-detail"
                    src={require("../Assets/Bệnh vàng lá.jpg")}
                    alt="mai vàng"
                  />
                </div>
              </div>
            )}

            {select === 2 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
              <div className='fw-bold text-center fs-4 mb-2'>
                Bệnh lá rỉ sét
              </div>
              <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Biểu hiện: </span>
                <span>
                Đây là loại bệnh thường xuất hiện trên cây mai vàng vào mùa mưa. 
                Đầu tiên, lá cây bị bệnh rỉ sét sẽ xuất hiện những đốm li ti có màu nâu đỏ 
                giống như cái điểm rỉ sét của kim loại bị oxi hóa khi để thời gian dài trong 
                môi trường ẩm ướt. Sau một thời gian, những vết li ti này sẽ lan rộng ra hơn, 
                đồng thời hình thành quầng màu vàng bao xung quanh.
                </span>
              </div>
              <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Nguyên nhân: </span>
                <span >
                Một loại nấm có tên chuyên ngành là Phragmidium mucronatum là tác nhân gây ra loại bệnh này.
                </span>
                </div>
                <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Hệ quả: </span>
                <span>
                Bệnh rỉ sét là giảm tính thẩm mỹ của cây mai, dẫn đến làm giảm giá trị kinh tế của cây. 
                Bên cạnh đó, bệnh rỉ sét còn ảnh hưởng tiêu cực đến bộ lá của cây mai, 
                khiến cây mai giảm khả năng quang hợp, khiến cây ra hoa kém hoặc thậm chí không 
                ra hoa. Nếu bệnh rỉ sét phát triển quá mạnh mà người trồng chưa kịp ngăn chặn có thể dẫn đến cây chết.
                </span>
                </div>
                <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Cách điều trị: </span>
                <span>
                Thường xuyên vệ sinh cành mai bằng cách tỉa bớt các lá già, lá dưới gốc, đặt biệt vào mùa mưa, 
                khi cây sinh sôi những chồi non, cần dọn dẹp các lá khô trong vườn và phun thuốc trừ bệnh 
                định kỳ 1-2 lần trên tháng. Tạo không gian thoáng mát cho cây mai phát triển bằng cách trồng 
                những cây mai cách nhau một khoảng đủ rộng để ánh sáng chiếu được vào phần lớn tán lá. 
                Bón phân định kỳ, đặc biệt không nên lạm dụng nhiều Đạm Ure, nên sử dụng phân hỗn hợp NPK.
                </span>
                </div>

              <div className="mt-3">
                <img
                  className="img-detail"
                  src={require("../Assets/Bệnh lá rỉ sét.jpg")}
                  alt="mai vàng"
                />
              </div>
            </div>
            )}

            {select === 0 && (
              <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded p-3 ml-3">
              <div className='fw-bold text-center fs-4 mb-2'>
              Bệnh cháy lá
              </div>
              <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Biểu hiện: </span>
                <span>
                Bệnh cháy lá biểu hiện phần lớn ở các lá mai già. 
                Bệnh cháy lá khiến các lá già bị héo từ mép lá vào trong với màu nâu đỏ hoặc xám bạc.
                </span>
              </div>
              <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Nguyên nhân: </span>
                <span >
                Bệnh cháy lá trên cây mai vàng có thể xảy ra do nhiều nguyên nhân: 
                phần lớn là do loại nấm Pestalotia funerea, hoặc do thời tiết nắng gắt 
                hoặc bị chịu ảnh hưởng của việc sử dụng chất hóa học, có thể do 
                môi trường đất bị nhiễm phèn, nhiễm mặn, hoặc do cây không được cung cấp 
                đầy đủ các chất cần thiết như Kẽm (Zn), Kali (K), Mangan (Mn).
                </span>
                </div>
                <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Hệ quả: </span>
                <span>
                Bệnh héo lá làm giảm tính thẩm mỹ của cây mai, dẫn đến làm giảm giá trị kinh tế của cây. 
                Bên cạnh đó, bệnh héo lá còn ảnh hưởng tiêu cực đến bộ lá của cây mai, khiến cây mai giảm 
                khả năng quang hợp, khiến cây ra hoa kém hoặc thậm chí không ra hoa. Nếu bệnh héo lá phát 
                triển quá mạnh mà người trồng chưa kịp ngăn chặn có thể dẫn đến cây chết.
                </span>
                </div>
                <div className="d-flex text-start">
                <span className='fw-bold text-width' style={{ whiteSpace: 'nowrap', marginRight: '0.5em' }}>Cách điều trị: </span>
                <span>
                Che nắng cho cây mai vàng khi vào mùa nắng nóng cao điểm, cung cấp nước đầy đủ cho cây 
                (cần tránh sử dụng nước phèn) và các nguyên tố vi lượng qua việc bón phân vừa phải 
                để tránh tình trạng cây thiếu nước dẫn đến cháy lá. Hạn chế tối đa việc phun 
                các chất hóa học vào dịp trời nắng quá gắt để tránh tình trạng mai vàng cháy lá.
                </span>
                </div>

              <div className="mt-3">
                <img
                  className="img-detail"
                  src={require("../Assets/Bệnh cháy lá.jpg")}
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
