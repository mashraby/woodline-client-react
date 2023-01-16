import React, { useRef, useState } from "react";
import mebel from "../../Assets/img/mebel.png";
import "./OrderCard.css";

export default function OrderCard() {
  const [count, setCount] = useState(1);
  const countBtns = useRef();
  const takeBtn = useRef();

  const openCountBtns = (e) => {
    e.target.style.display = "none";
    countBtns.current.style.display = "flex";
    countBtns.current.style.alignItems = "center";
    countBtns.current.style.gap = "9px";
  };

  const handleDec = () => {
    if (count === 1) {
      takeBtn.current.style.display = "block";
      countBtns.current.style.display = "none";
    } else {
      setCount(count - 1);
    }
  };

  const handleInc = () => {
    setCount(count + 1);
  };

  return (
    <div className="order_card">
      <img
        className="order_card_img"
        src={mebel}
        alt=""
        width="237"
        height="164"
      />
      <div className="order_card_infos">
        <div className="card_info card_info_name">
          <span className="value name_value">Nomi:</span>
          <span className="property name_property">SOFT SOFA</span>
        </div>
        <div className="card_info card_info_price">
          <span className="value price_value">Narxi:</span>
          <span className="property price_property">2 550 000 uzs</span>
        </div>
      </div>
      <div className="order_card_btns_wrapper">
        <button
          ref={takeBtn}
          onClick={(e) => openCountBtns(e)}
          className="take_btn"
        >
          Take
        </button>
        <div ref={countBtns} className="count_btn_wrapper">
          <button
            onClick={() => handleDec()}
            className="count_btn btn_decrement"
          >
            -
          </button>
          <span className="count_btn count_span">{count}</span>
          <button
            onClick={() => handleInc()}
            className="count_btn btn_increment"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
