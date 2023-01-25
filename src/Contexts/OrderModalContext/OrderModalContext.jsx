import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

const OpenModalContext = createContext();

function Provider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isOpenCorzinkaModal, setIsOpenCorzinkaModal] = useState(false);
  const [userDataModal, setUserDataModal] = useState(false);
  const [coastModal, setCoastModal] = useState(false);
  const [archiveOrders, setArchiveOrders] = useState(false);
  const [chooseTypes, setChooseTypes] = useState([]);
  const [chooseModels, setChooseModels] = useState([]);

  const [input, setInput] = useState("");

  useEffect(() => {
    axios
      .get("/types")
      .then((res) => setChooseTypes(res.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    axios
      .get("/models")
      .then((res) => setChooseModels(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <OpenModalContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        setChooseTypes,
        chooseTypes,
        chooseModels,
        isOpenCorzinkaModal,
        setIsOpenCorzinkaModal,
        input,
        setInput,
        userDataModal,
        setUserDataModal,
        coastModal, 
        setCoastModal,
        archiveOrders, 
        setArchiveOrders
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
}

export { OpenModalContext, Provider };
