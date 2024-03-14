import React from "react";
import { Link } from "react-router-dom";
import logo from "./image/logo.png";
import user_line from "./image/user-3-line.png";
import ellipse24 from "./image/Ellipse24.png";
import icon_exit from "./image/exit.png";
import truck_line from "./image/truck-line.png";
import shopping_bag_line from "./image/shopping-bag-line.png";
import close_line from "./image/close-line.png";
import group from "./image/Group.png";

export default function Header(props) {
  return (
    <div className="navbar-pynk">
      <nav className="navbar navbar-expand-sm bg-light information-nav fixed-top">
        <div className="information-box">
          <div className="information-box-row2">
            <div
              className="collapse navbar-collapse navbarNav-ul"
              id="navbarNav"
            >
              <div className="navbar-nav">
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
                  Stay Fit {props.user.email}
                </a>
                <a
                  className="nav-link link-pynk"
                  onClick={() => this.handleClickLogin("BetterShape")}
                >
                  Better Shape
                </a>

                <a
                  className="nav-link link-pynk"
                  // href="/#"
                  onClick={() =>
                    this.this.props2 && this.props2.history.push("/content")
                  }
                >
                  บทความ
                </a>
                {/* <a class="nav-link" href="#">
                  Disabled
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
