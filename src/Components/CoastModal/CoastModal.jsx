import React from "react";
import { useContext } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import "./CoastModal.css";

export default function CoastModal() {
  const { userDataModal, setUserDataModal, coastModal, setCoastModal } =
    useContext(OpenModalContext);

  const closeCoastModal = () => {
    setCoastModal(!coastModal);
  };

    const backModal = () => {
      setCoastModal(!coastModal);
      setUserDataModal(!userDataModal);
    };

  return (
    <div
      style={{ display: coastModal ? "flex" : "none" }}
      className="userdata_modal"
    >
      <div className="userdata_modal_header">
        <button onClick={() => backModal()} className="arrow_btn">&#8592;</button>

        <div className="corzinka-id">
          <p className="corzinka-idIext">
            ID: <span className="corzinka-idNum">2386282</span>
          </p>
        </div>

        <div className="client_name">
          <p>Client name</p>
        </div>

        <button onClick={() => closeCoastModal()} className="corzinka-close">
          <p className="corzinka-closeText">Cancel</p>
          <span className="corzinka-closeBtn">&#10005;</span>
        </button>
      </div>

      <div className="modal_body">
        <form action="">
          <input type="text" placeholder="Total cost" />
          <input type="text" placeholder="Pre-payment" />
          <input type="text" placeholder="advanced payment in $" />
          <input type="text" placeholder="course $" />
          <input type="text" placeholder="advanced payment in sums" />
          <input type="text" placeholder="My total profit" />
        </form>
        <button>Next</button>
      </div>
    </div>
  );
}
