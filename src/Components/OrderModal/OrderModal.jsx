import React, { useContext, useRef } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import OrderCard from "../OrderCard/OrderCard";
import "./OrderModal.css";

export default function OrderModal({ link }) {
  const { isOpenModal, setIsOpenModal, chooseTypes, chooseModels } =
    useContext(OpenModalContext);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div
      style={isOpenModal === true ? { display: "block" } : { display: "none" }}
      className="order_modal"
    >
      <div className="modal_contents">
        <div className="order_modal_header">
          <div className="heading_wrapper">
            <p className="order_heading">Order</p>
            <span className="order_modal_count">4</span>
          </div>
          <button onClick={() => closeModal()} className="order_close_btn">
            &#10005;
          </button>
        </div>

        <div className="filtering_wrapper">
          <form action="">
            <select name="" id="">
              {chooseTypes &&
                chooseTypes.map((item, index) => {
                  return (
                    <option key={index + 1} value={item.id}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
            <select>
              {chooseModels &&
                chooseModels.map((item, index) => {
                  return (
                    <option key={index + 1} value={item.name}>
                      {item.name}
                    </option>
                  );
                })}
            </select>
          </form>
        </div>

        <div className="orders_list">
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
          <OrderCard />
        </div>

        <button className="finish_btn">Finish</button>
      </div>
    </div>
  );
}
