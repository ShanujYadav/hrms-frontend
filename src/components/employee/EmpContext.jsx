import React, { useState, createContext } from "react";

export const EmpContext = createContext()

export const EmpContextProvider = (props) => {
  
  const [data, setData] = useState({
    gateway: "",
    amount: "",
  })

  return (
    <EmpContext.Provider value={[data, setData]}>
      {props.children}
    </EmpContext.Provider>
  );
};
