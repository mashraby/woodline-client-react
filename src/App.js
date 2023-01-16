import { useContext } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import OrderModal from "./Components/OrderModal/OrderModal";
import SearchBar from "./Components/SearchBar/SearchBar";
import { OpenModalContext } from "./Contexts/OrderModalContext/OrderModalContext";

function App() {
  const { isOpenModal, setIsOpenModal } = useContext(OpenModalContext)

  const closeModal = () => {
    setIsOpenModal(false)
  }

  return (
    <>
      <Header />
      <SearchBar />
      <OrderModal />
      <div onClick={() => closeModal()} style={isOpenModal===true ? {"display": "block"} : {"display": "none"}} className="backdrop"></div>
    </>
  );
}

export default App;
 