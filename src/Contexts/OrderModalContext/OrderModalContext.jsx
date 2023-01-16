import { createContext, useState } from "react";

const OpenModalContext = createContext();

function Provider({ children }) {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <OpenModalContext.Provider
      value={{
        isOpenModal,
        setIsOpenModal,
      }}
    >
      {children}
    </OpenModalContext.Provider>
  );
}

export { OpenModalContext, Provider };
