import React, { useContext, useRef } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import OrderCard from "../OrderCard/OrderCard";
import "./OrderModal.css";

export default function OrderModal() {

  const { isOpenModal, setIsOpenModal } = useContext(OpenModalContext)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <div style={isOpenModal===true ? {"display": "block"} : {"display": "none"}} className="order_modal">
      <div className="order_modal_header">
        <div className="heading_wrapper">
          <p className="order_heading">Order</p>
          <span className="order_modal_count">4</span>
        </div>
        <button onClick={() => closeModal()} className="order_close_btn">&#10005;</button>
      </div>

      <div className="filtering_wrapper">
        <form action="">
          <select name="" id="">
            <option value="">Choose type</option>
          </select>
          <select name="" id="">
            <option value="">Choose model</option>
          </select>
        </form>
      </div>

      <div className="orders_list">
        <OrderCard /> 
      </div>
   
    </div>
  );
}
