import React from "react";
import "../App.css";

function Footer() {
  return (
    <div className="footer text-white p-4 mt-2 w-100" style={{ backgroundColor: "#006CB0" }}>

      <div className="container-fluid m-0 mt-2 w-100">
        <div className="row row-footer justify-content-between w-100">

          {/* Cột 1: Thông tin liên hệ */}
          <div className="col-md-5 col-sm-12">
            <h5 className="title-footer">LIÊN HỆ VỚI SKY TRIPS TRAVEL</h5>
            <div className="hr mb-3"></div>
            <p className="text-footer">
              <img src="/src/image/pin1.png" alt="Logo" className="icon-custom"/>
              12 Nguyễn Văn Bảo, Phường 4, quận Gò Vấp, TPHCM
            </p>
            <p className="text-footer">
              <img src="/src/image/call1.png" alt="Logo" className="icon-custom"/>
              19000001 - 0902123456
            </p>
            <p className="text-footer">
              <img src="/src/image/email1.png" alt="Logo" className="icon-custom"/>
              skytripstravel@gmail.com
            </p>
            <p className="text-footer">
              <img src="/src/image/facebook1.png" alt="Logo" className="icon-custom"/> 
              <a href="https://www.facebook.com/cheaptravel" className="text-white text-decoration-none">
                www.facebook.com/skytripstravel
              </a>
            </p>
          </div>

          {/* Cột 2: Thanh toán */}
          <div className="col-md-4 col-sm-12">
            <h5 className="title-footer">CÁC HÌNH THỨC THANH TOÁN</h5>
            <div className="hr mb-3"></div>
            <p className="text-footer"> 
              <img src="/src/image/coin1.png" alt="Logo" className="icon-custom"/> 
              Thanh toán trực tiếp tại văn phòng
            </p>
            <p className="text-footer">
            <img src="/src/image/credit-card1.png" alt="Logo" className="icon-custom"/> 
              Thanh toán qua cổng thanh toán trực tuyến
            </p>
          </div>

          {/* Cột 3: Các chứng nhận */}
          <div className="col-md-3 col-sm-12 text-center">
            <h5 className="title-footer">CÁC CHỨNG NHẬN</h5>
            <div className="hr mb-3"></div>
            <div className="d-flex justify-content-center gap-3">
              <div >
                <img src="/src/image/certification1.jpg" alt="" style={{height: 70, width: 70}}/> 
              </div>
              <div >
                <img src="/src/image/certification2.jpg" alt=""style={{height: 70, width: 100}}/> 
              </div>
              <div >
                <img src="/src/image/certification3.jpg" alt="" style={{height: 70, width: 70}}/> 
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
