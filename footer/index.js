import React from "react";
import "./footer.css";
import pinklogo from "../image/pinklogo.png";
import phonelogo from "../image/phonelogo.png";
import emaillogo from "../image/emaillogo.png";
import fb from "../image/icon_fb.png";
import instagram from "../image/icon_ig.png";
import te from "../image/icon_tk.png";
import line from "../image/icon_line.png";

export default function FooterPynk() {
  return (
    <div>
      <div className="box-footer">
        <div className="footer-center">
          <div className="row col-12 ">
            <div className="col-12 col-md-4">
              <img src={pinklogo} alt="" className="layer1-image" />
              <p className="company-bbpf">
                บริษัท บีบีพีเอฟ จำกัด (สำนักงานใหญ่)
              </p>
              <p className="company-address">
                1/2 ซอย พระรามที่ 2 ซอย 82 แยก 6 แขวงแสมดำ เขตบางขุนเทียน
                กรุงเทพมหานคร 10150
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="contact-us">ติดต่อเรา</p>
              <div className="hr" />
              <p className="company-address">
                <img src={phonelogo} alt="" className="phone-line" />
                <a href="tel:0938832339">093-883-2339</a>
              </p>
              <p className="company-address">
                <img src={emaillogo} alt="" className="phone-line" />
                <a href="mailto:contact@pynk.co">contact@pynk.co</a>
              </p>
            </div>
            <div className="col-12 col-md-4">
              <p className="contact-us">Social Media</p>
              <div className="hr" />
              <div className="social-icons">
                <img src={fb} alt="" className="fb-icon" />
                <img src={instagram} alt="" className="fb-icon" />{" "}
                <img src={te} alt="" className="fb-icon" />
                <img src={line} alt="" className="fb-icon" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box-footer-bottom">
        <p>© 2022 BBPF RIGHTS RESERVED</p>
        <div className="policy-bottom">
          <div className="hr-policy policy-none" />
          <p>Privacy Policy</p>
          <div className="hr-policy" />
          <p>Cookies Policy</p>
          <div className="hr-policy" />
          <p>Cookies Setting</p>
        </div>
      </div>
    </div>
  );
}
