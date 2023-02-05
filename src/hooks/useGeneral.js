import { useState, useEffect } from "react";
const useGeneral = () => {
  const [generalsState, setGeneralsState] = useState({
    name: "",
    surname: "",
    email: "",
    about_me: "",
    phone_number: "",
  });
  /*================
 Handle Name Change
  ================== */
  const handleFirstName = (e) => {
    const name = e.target.value;
    setGeneralsState({
      ...generalsState,
      name,
    });
    console.log(e);
  };
  const handleLastName = (e) => {
    const name = e.target.value;
    setGeneralsState({
      ...generalsState,
      name,
    });
    console.log(e);
  };
  return {
    generalsState,
    handleFirstName,
    handleLastName,
  };
};

export default useGeneral;
