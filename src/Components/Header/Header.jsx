import React from "react";
import "./Header.css";
import bag from "../../Assets/svg/Bag.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="wrapper">
          <nav className="header_nav">
            <ul className="nav_list">
              <li className="list_item">
                <NavLink to="/" className="item_link">
                  My orders
                </NavLink>
              </li>
              <li className="list_item">
                <NavLink to="/myprof" className="item_link">
                  My profit
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="btn_group">
            <button className="order_btn">Order</button>
            <button className="order_modal_btn">
              <span className="order_count">4</span>
              <img className="bag" src={bag} alt="Bag img" width="24" height="24" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
