import React from "react";
import { useContext } from "react";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import "./UserDataStyle.css";

export default function UserDataModal() {
  const {
    userDataModal,
    setUserDataModal,
    isOpenCorzinkaModal,
    setIsOpenCorzinkaModal,
    coastModal,
    setCoastModal,
  } = useContext(OpenModalContext);

  const closeUserDataForm = () => {
    setUserDataModal(!userDataModal);
  };

  const backModal = () => {
    setUserDataModal(!userDataModal);
    setIsOpenCorzinkaModal(!isOpenCorzinkaModal);
  };

  const openToCoastModal = () => {
    setUserDataModal(!userDataModal);
    setCoastModal(!coastModal);
  };

  return (
    <div
      style={{ display: userDataModal ? "flex" : "none" }}
      className="userdata_modal"
    >
      <div className="userdata_modal_header">
        <button onClick={() => backModal()} className="arrow_btn">
          &#8592;
        </button>

        <div className="corzinka-id">
          <p className="corzinka-idIext">
            ID: <span className="corzinka-idNum">2386282</span>
          </p>
        </div>

        <button onClick={() => closeUserDataForm()} className="corzinka-close">
          <p className="corzinka-closeText">Cancel</p>
          <span className="corzinka-closeBtn">&#10005;</span>
        </button>
      </div>

      <div className="modal_body">
        <form action="">
          <input type="text" placeholder="Client name" />
          <input type="text" placeholder="Search ID" />
          <select>
            <option value="1">Where did you know our service</option>
            <option value="1">2</option>
            <option value="1">3</option>
          </select>
          <input type="text" placeholder="Search ID" />
          <input type="text" placeholder="Delivery date" />
        </form>
        <button onClick={() => openToCoastModal()}>Next</button>
      </div>
    </div>
  );
}
