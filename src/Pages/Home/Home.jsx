import React from "react";
import { useContext } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Table from "../../Components/Table/Table";
import "./Home.css";
import OrderModal from "../../Components/OrderModal/OrderModal";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";
import Corzinka from "../../Components/Corzinka/Corzinka";
import { useState } from "react";
import UserDataModal from "../../Components/UserDataModal/UserDataModal";
import CoastModal from "../../Components/CoastModal/CoastModal";

export default function Home({ link }) {
  const {
    isOpenModal,
    setIsOpenModal,
    isOpenCorzinkaModal,
    setIsOpenCorzinkaModal,
    userDataModal,
    setUserDataModal,
    coastModal,
  } = useContext(OpenModalContext);

  const headerData = ["ID", "MODEL", "DELIVERY DATE", "STATUS"];

  const [orders, setOrders] = useState([
    {
      id: "358832",
      model: "SANDRA",
      delevr_date: "2022.09.19",
      status: "ACCEPTED",
    },
    {
      id: "485735",
      model: "TUNDRA",
      delevr_date: "2022.09.18",
      status: "REJECTED",
    },
    {
      id: "1029380",
      model: "AJOYIB",
      delevr_date: "2022.09.17",
      status: "IN_PROGRESS",
    },
    {
      id: "842498",
      model: "UDAR",
      delevr_date: "2022.09.27",
      status: "REJECTED",
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
      <SearchBar />
      <Table data={{ header: headerData, body: orders }} />
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
