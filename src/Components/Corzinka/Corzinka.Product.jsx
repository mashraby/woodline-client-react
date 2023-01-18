import React, { useRef, useState } from "react";
import mebel from "../../Assets/img/mebel.png";
const CorzinkaProduct = () => {
    const [count, setCount] = useState(1);
    const countBtns = useRef();

    const handleDec = (e) => {
        if (count === 1) {
            return
        } else {
            setCount(count - 1);
        }
    };

    const handleInc = () => {
        setCount(count + 1);
    };

    return (
        <div className="corzinka-productCard order_card">
            <button className='corzinka-productRemove'>&#10005;</button>
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
                <div ref={countBtns} className="count_btns">
                    <button
                        onClick={(e) => handleDec(e)}
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

export default CorzinkaProduct;

