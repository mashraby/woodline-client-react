import React from "react";
import { useContext } from "react";
import Header from "../../Components/Header/Header";
import SearchBar from "../../Components/SearchBar/SearchBar";
import Table from "../../Components/Table/Table";
import "./Home.css";
import OrderModal from "../../Components/OrderModal/OrderModal";
import { OpenModalContext } from "../../Contexts/OrderModalContext/OrderModalContext";


export default function Home({link}) {
  const { isOpenModal, setIsOpenModal } = useContext(OpenModalContext);

  const closeModal = () => {
    setIsOpenModal(false);
  };

  return (
    <div>
      <Header link={link} />
      <SearchBar link={link} />
      <Table link={link} />
      <OrderModal link={link} />

      <div
        onClick={() => closeModal()}
        style={
          isOpenModal === true ? { display: "block" } : { display: "none" }
        }
        className="backdrop"
      ></div>
    </div>
  );
}
