import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
import { useSelector, useDispatch } from "react-redux";
import { getMemberInfo } from "../../redux/get";

export default function PynkHeader(props) {
  const isLocalHost = window.location.hostname != "localhost";
  const [groupImage, setGroupImage] = useState(false);
  const urlCookieLoginWeb = isLocalHost ? "pynk.co" : "localhost";
  const [pynk_coin, setPynk_coin] = useState(0);

  console.log(pynk_coin);
  const dataCookiesLoginUser = Cookies.get("loginUser", {
    domain: urlCookieLoginWeb,
    path: "/",
  });
  const dataCookiesUserPynkCoinCookies = Cookies.get("user_pynk_coin", {
    domain: urlCookieLoginWeb,
    path: "/",
  });
  // clearStatusUpdateMemberEventLogScoreConvert
  const { statusUpdateMemberEventLogScoreConvert } = useSelector(({ update }) => (update ? update : ""));

  useEffect(() => {
    if (dataCookiesLoginUser) {
      (async () => {
        try {
          const response = await fetch(`https://api.planforfit.com/pynk/getPynkCoin?email=${dataCookiesLoginUser}`);
          const data = await response.json();
          console.log(data['results']['pynk_coin'][0]['pynk_coin']);
          console.log(dataCookiesLoginUser, 'xxxxxxx');
          setPynk_coin(data['results']['pynk_coin'][0]['pynk_coin']);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      })();
    }
  }, [dataCookiesLoginUser]);
  
  const refresh_pynk_coin = async () => {
    // const response = await fetch(
    //   `http://localhost:3003/getPynkMemberInfo?email=${dataCookiesLoginUser}`
    // );

    const response = await fetch(
      `https://api.planforfit.com/pynk/getPynkCoin?email=${dataCookiesLoginUser}`
    );

    const data = await response.json();
    console.log(data);
    // console.log(data['results']['pynk_coin'][0]['pynk_coin']);
    if(data['results']['pynk_coin'][0]['pynk_coin']){
      // console.log('test');
      setPynk_coin(data['results']['pynk_coin'][0]['pynk_coin']);
    }
   
  };
  useEffect(() => {
    
    if (statusUpdateMemberEventLogScoreConvert === 'success') {
      refresh_pynk_coin();
    } else {
    }
  }, [statusUpdateMemberEventLogScoreConvert]);

  useEffect(() => {
    setPynk_coin(dataCookiesUserPynkCoinCookies);
  },[]);

  const urlPynkBase = "https://staging.pynk.co";
  const localHostBase = "http://localhost:3000";

  const gotoContent = isLocalHost
    ? urlPynkBase + "/content"
    : localHostBase + "/content";

  const gotoProfile = isLocalHost
    ? urlPynkBase + "/profile-pynk"
    : localHostBase + "/profile-pynk";

  const urlBetterHome = isLocalHost
    ? urlPynkBase + "/sale-page?link=bettershape"
    : localHostBase + "/sale-page?link=bettershape";

  const urlCarrotHome = isLocalHost
    ? urlPynkBase + "/sale-page?link=getfit"
    : localHostBase + "/sale-page?link=getfit";

  const url7DaysHome = isLocalHost
    ? urlPynkBase + "/sale-page?link=7day"
    : localHostBase + "/sale-page?link=7day";

  const urlBebefitHome = isLocalHost
    ? urlPynkBase + "/sale-page?link=bebe"
    : localHostBase + "/sale-page?link=bebe";

  const urlPynkProd = isLocalHost ? urlPynkBase : localHostBase;

  const urlPreemProd = isLocalHost
    ? "https://staging.preemworkout.pynk.co"
    : "http://localhost:3001";

  const urlCarrotProd = isLocalHost
    ? "https://staging.carrotworkout.pynk.co"
    : "http://localhost:3001";

  const url7DaysProd = isLocalHost
    ? "https://staging.7daypilates.pynk.co"
    : "http://localhost:3001";

  const urlBebeFitProd = isLocalHost
    ? "https://staging.platform.bebefitroutine.pynk.co"
    : "http://localhost:3001";

  const handleLogin = () => {
    window.location.href = urlPynkProd + "/login";
  };

  const handleOnUserLogout = () => {
    console.log("handle OnUser Logout");
    window.location.href = urlPynkProd + "/home";
    Cookies.remove("loginUser", { domain: urlCookieLoginWeb, path: "/" });
    Cookies.remove("user_pynk_coin", { domain: urlCookieLoginWeb, path: "/" });

    if (document.getElementById("icon-google")) {
      document.getElementById("icon-google").click();
    }
  };

  const handleClickLoginPreem = async () => {
    const response = await fetch(
      `https://api.planforfit.com/preem/login?email=${dataCookiesLoginUser}`
    );

    const data = await response.json();

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "admin"
    ) {
      window.location.href = urlPreemProd + `/import-members`;
      return;
    }

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "member"
    ) {
      const encodedParams = btoa(JSON.stringify(dataCookiesLoginUser));
      window.location.href =
        urlPreemProd + `/videolist?encodedParams=${encodedParams}`;
    } else {
      window.location.href = urlBetterHome;
    }
  };

  const handleClickLoginCarrot = async () => {
    const response = await fetch(
      `https://api.planforfit.com/fit_carrot/login?email=${dataCookiesLoginUser}`
    );
    const data = await response.json();

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "admin"
    ) {
      window.location.href = urlCarrotProd + `/import-members`;
      return;
    }

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "member"
    ) {
      const encodedParams = btoa(JSON.stringify(dataCookiesLoginUser));
      window.location.href =
        urlCarrotProd + `/videolist?encodedParams=${encodedParams}`;
    } else {
      window.location.href = urlCarrotHome;
    }
  };

  const handleClickLogin7Days = async () => {
    const response = await fetch(
      `https://api.planforfit.com/pilates_ring_7day/login?email=${dataCookiesLoginUser}`
    );
    const data = await response.json();

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "admin"
    ) {
      window.location.href = url7DaysProd + `/import-members`;
      return;
    }

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "member"
    ) {
      const encodedParams = btoa(JSON.stringify(dataCookiesLoginUser));
      window.location.href =
        url7DaysProd + `/videolist?encodedParams=${encodedParams}`;
    } else {
      window.location.href = url7DaysHome;
    }
  };

  const handleClickLoginBebeFit = async () => {
    const response = await fetch(
      `https://api.planforfit.com/bebe/login?email=${dataCookiesLoginUser}`
    );
    const data = await response.json();

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "admin"
    ) {
      window.location.href = urlBebeFitProd + `/import-members`;
      return;
    }

    if (
      data.results.message == "success" &&
      data.results.user.authorization == "member"
    ) {
      const encodedParams = btoa(JSON.stringify(dataCookiesLoginUser));
      window.location.href =
        urlBebeFitProd + `/videolist?encodedParams=${encodedParams}`;
    } else {
      window.location.href = urlBebefitHome;
    }
  };

  const handleBackHome = () => {
    window.location.href = urlPynkProd + "/home";
  };

  return (
    <div className="navbar-pynk">
      <nav className="navbar-expand-sm bg-light information-nav fixed-top">
        <div className="information-box">
          <div className="flex-container">
            <a onClick={handleBackHome}>
              <img src={logo} alt="vector" />
            </a>
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
                      class="btn"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        marginTop: "-10px",
                        marginRight: "-16px",
                        borderColor: "transparent",
                      }}
                    >
                      <span className="d-none d-md-inline cook-email">
                        Pynk Coin :  &nbsp;
                        {pynk_coin}
                      </span>
                    </div>
                    <div
                      class="btn dropdown-toggle"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                      style={{
                        marginTop: "-10px",
                        marginRight: "-16px",
                        borderColor: "transparent",
                      }}
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
                        <a class="dropdown-item color_link" href={gotoProfile}>
                          <img
                            src={icon_exit}
                            className="icon-edit cursor-pointer"
                            alt="icon_exit"
                          />
                          profile
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item color_link"
                          onClick={() => handleOnUserLogout()}
                        // style={{ cursor: "pointer",  }}
                        >
                          <img
                            src={icon_exit}
                            className="icon-edit"
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

              {/* <h2
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
              /> */}
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
            <div className="navbar-nav w-100 d-flex gap-2 gap-md-3">
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
              {/* <a
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
              </a> */}
              <a className="nav-link link-pynk" onClick={handleClickLoginPreem}>
                Better Shape
              </a>

              <div style={{ border: "1px solid grey" }} />
              <a
                className="nav-link link-pynk"
                onClick={handleClickLoginCarrot}
              >
                Carrot
              </a>
              <div style={{ border: "1px solid grey" }} />

              <a className="nav-link link-pynk" onClick={handleClickLogin7Days}>
                7Days
              </a>
              <div style={{ border: "1px solid grey" }} />

              <a
                className="nav-link link-pynk"
                onClick={handleClickLoginBebeFit}
              >
                Bebe Platform
              </a>
              <div style={{ border: "1px solid grey" }} />

              <a className="nav-link link-pynk" href={gotoContent}>
                บทความ
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}