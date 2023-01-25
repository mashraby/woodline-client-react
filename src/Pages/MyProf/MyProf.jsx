import React, { useContext, useState } from "react";
import CoastModal from "../../Components/CoastModal/CoastModal";
import Corzinka from "../../Components/Corzinka/Corzinka";
import Header from "../../Components/Header/Header";
import OrderModal from "../../Components/OrderModal/OrderModal";
import Table from "../../Components/Table/Table";
import UserDataModal from "../../Components/UserDataModal/UserDataModal";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import "./MyProf.css";

export default function MyProf() {
  const {
    isOpenModal,
    setIsOpenModal,
    isOpenCorzinkaModal,
    setIsOpenCorzinkaModal,
    userDataModal,
    setUserDataModal,
    coastModal,
  } = useContext(OpenModalContext);

  const headerData = ["ID", "MODEL", "MY PROFIT", "STATUS"];

  const [myProfOrders, setMyProfOrders] = useState([
    {
      id: "358832",
      model: "SANDRA",
      myprof: "135000",
      status: "ACCEPTED",
    },
    {
      id: "485735",
      model: "TUNDRA",
      myprof: "2198343",
      status: "UNACCEPTED",
    },
    {
      id: "1029380",
      model: "AJOYIB",
      myprof: "2838924",
      status: "UNACCEPTED",
    },
  ]);

  const closeModal = () => {
    setIsOpenModal(false);
    setIsOpenCorzinkaModal(false);
    setUserDataModal(false);
  };
  
  return (
    <div>
      <Header />
      <div className="myProf_actions">
        <div className="container">
          <h1 className="myProf_actions_heading">
            My profit: <span className="myProf_actions_span">4500000</span>
          </h1>
        </div>
      </div>
      <Table data={{ header: headerData, body: myProfOrders }} />
      <OrderModal />
      <Corzinka />
      <UserDataModal />
      <CoastModal />

      <div
        onClick={() => closeModal()}
        style={
          isOpenModal ||
          isOpenCorzinkaModal ||
          userDataModal ||
          coastModal === true
            ? { display: "block" }
            : { display: "none" }
        }
        className="backdrop"
      ></div>
    </div>
  );
}
