import axios from "axios";
import { useEffect } from "react";
import { createContext, useState } from "react";

const OpenModalContext = createContext();

function Provider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [chooseTypes, setChooseTypes] = useState([]);
  const [chooseModels, setChooseModels] = useState([]);

  useEffect(() => {
    axios.get("/types")
      .then(res => setChooseTypes(res.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    axios.get("/models")
      .then(res => setChooseModels(res.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <OpenModalContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
        setChooseTypes, 
        chooseTypes, 
        chooseModels
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
}

export { OpenModalContext, Provider };
