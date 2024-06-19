import React, { useState, createContext } from "react";

export const AdminContext = createContext()

export const AdminContextProvider = (props) => {
  
  const [data, setData] = useState({
    gateway: "",
    amount: "",
  });

  const Gateway = [
    { name: "CC Avenue", logo: 'jnjn'},
  ];

  const [ui, setUI] = useState({
    show_topupform: true,
    show_receipt: false,
    show_gateway: false,
  })
  

  
  return (
    <AdminContext.Provider value={[data, setData, ui, setUI, Gateway]}>
      {props.children}
    </AdminContext.Provider>
  );
};
