import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo.png";
import user_line from "../image/user-3-line.png";
import ellipse24 from "../image/Ellipse24.png";
import icon_exit from "../image/exit.png";
import truck_line from "../image/truck-line.png";
import shopping_bag_line from "../image/shopping-bag-line.png";
import close_line from "../image/close-line.png";
import group from "../image/Group.png";
import Cookies from "js-cookie";
import "./header.css";

export default function PynkHeader(props) {
  const [groupImage, setGroupImage] = useState(false);

  let urlProd = true;
  const urlPynk = urlProd
    ? "https://staging.pynk.co/#"
    : "http://localhost:3000/#";

  const urlPreem = urlProd
    ? "https://preemworkout.pynk.co/#"
    : "http://localhost:3001/#";

  const handleLogin = () => {
    window.location.href = urlPynk + "/login";
  };

  const handleOnUserLogout = () => {
    console.log("handle OnUser Logout");
    window.location.href = urlPynk + "/home";
    Cookies.remove("loginUser");

    if (document.getElementById("icon-google")) {
      document.getElementById("icon-google").click();
    }
  };

  const handleClickLogin = (event) => {
    window.location.href = urlPreem + "/videolist";
  };

  const dataCookiesLoginUser = Cookies.get("loginUser");

  return (
    <div className="navbar-pynk">
      <nav className="navbar-expand-sm bg-light information-nav fixed-top">
        <div className="information-box">
          <div className="flex-container">
            <Link to="/">
              <img src={logo} alt="vector" />
            </Link>
            {/*       <div className="custom-input ">
              <img
                src={search_line}
                className="search-img-icon display-none"
                alt="vector"
              />
              <input
                type="text"
                className="form-control form-search  display-none"
                placeholder="ค้นหาสินค้า"
              />
            </div>
            <img
              src={search_line}
              className="search_line user-line"
              onClick={() => this.clikSearchStatus(1)}
              alt="vector"
            /> */}
          </div>
          <div>
            <div className="flex-container">
              {!props.user && !props?.googleProfile?.profile && (
                <img
                  src={user_line}
                  onClick={handleLogin}
                  className="truck-line-icon user-line"
                  alt="vector"
                />
              )}

              {dataCookiesLoginUser ? (
                <div className="nav-pynk">
                  <div class="dropdown">
                    <div
                      class="btn  dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{ marginTop: "-10px", marginRight: "-16px" }}
                    >
                      <img
                        src={ellipse24}
                        className="nav-ellipse24"
                        alt="vector"
                      />
                      <span className="d-none d-md-inline cook-email">
                        {dataCookiesLoginUser}
                      </span>
                    </div>
                    <ul class="dropdown-menu">
                      <li>
                        <Link class="dropdown-item" to="profile-pynk">
                          <img
                            src={icon_exit}
                            className="icon-edit cursor-pointer"
                            alt="icon_exit"
                          />
                          profile
                        </Link>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => handleOnUserLogout()}
                        >
                          <img
                            src={icon_exit}
                            className="icon-edit cursor-pointer"
                            alt="icon_exit"
                          />
                          ออกจากระบบ
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="pointer" onClick={() => this.props && props.logout()}>
                  ออกจากระบบ
                </div> */}
                </div>
              ) : (
                <button
                  className="nav-link nav-linkHead2 pointer bold d-none d-md-block"
                  onClick={handleLogin}
                >
                  เข้าสู่ระบบ/ลงทะเบียน
                </button>
              )}

              <h2
                style={{
                  color: "#BCCCD6",
                  fontWeight: 10,
                  height: 30,
                }}
              >
                |
              </h2>
              <div
                className="d-flex justify-content-center align-items-center cursor-pointer"
                // onClick={() =>
                //   this.props && props.history.push("/order_tracking")
                // }
              >
                <img
                  src={truck_line}
                  className="truck-line-icon"
                  alt="vector"
                />
                <p className="order-status display-none ms-1 mb-0">
                  สถานะคำสั่งซื้อ
                </p>
              </div>

              <h2
                style={{
                  color: "#BCCCD6",
                  fontWeight: 10,
                  height: 30,
                }}
              >
                |
              </h2>
              <img
                // onClick={() => this.showMinus2()}
                src={shopping_bag_line}
                className="truck-line-icon pointer"
                alt="vector"
              />
            </div>
          </div>
        </div>

        <div className="information-box-row2">
          <div className="navbar-flex-center user-line">
            {groupImage ? (
              <i
                class="fa-solid fa-xmark"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                onClick={() => setGroupImage(false)}
                aria-label="Toggle navigation"
                style={{
                  marginTop: 20,
                  color: "#EF60A3",
                  fontSize: 20,
                }}
              ></i>
            ) : (
              <i
                class="fa-solid fa-bars"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                onClick={() => setGroupImage(true)}
                aria-label="Toggle navigation"
                style={{
                  marginTop: 20,
                  color: "#EF60A3",
                  fontSize: 20,
                }}
              ></i>
            )}
          </div>

          <div className="collapse navbar-collapse navbarNav-ul" id="navbarNav">
            <div className="navbar-nav w-100 d-flex gap-2 gap-md-4">
              {/* <a
                className="nav-link link-pynk"
                onClick={() =>
                  this.props && props.history.push("/products_management")
                }
              >
                จัดการสินค้า
              </a>

              <a
                className="nav-link link-pynk"
                onClick={() =>
                  this.props && props.history.push("/contents_management")
                }
              >
                จัดการบทความ
              </a> */}

              <a
                className="nav-link  link-pynk active2"
                href="https://platform.bebefitroutine.com"
                target="_blank"
              >
                Online Training
              </a>
              <a
                className="nav-link link-pynk"
                href="https://fit.bebefitroutine.com"
                target="_blank"
              >
                Stay Fit
              </a>

              <a className="nav-link link-pynk" onClick={handleClickLogin}>
                Better Shape
              </a>

              <a
                className="nav-link link-pynk"
                // href="/#"
                // onClick={() => this.props && props.history.push("/content")}
              >
                บทความ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
