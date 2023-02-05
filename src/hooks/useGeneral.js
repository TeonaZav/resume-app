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
 Handle Firstname Change
  ================== */
  const handleFirstName = (e) => {
    const name = e.target.value;
    setGeneralsState({
      ...generalsState,
      name,
    });
    console.log(e);
  };
  /*================
 Handle Lastname Change
  ================== */
  const handleLastName = (e) => {
    const surname = e.target.value;
    setGeneralsState({
      ...generalsState,
      surname,
    });
    console.log(e);
  };
  /*================
 Handle Email Change
  ================== */
  const handleEmail = (e) => {
    const email = e.target.value;
    setGeneralsState({
      ...generalsState,
      email,
    });
    console.log(e);
  };
  /*================
 Handle About Info
  ================== */
  const handleAbout = (e) => {
    const about = e.target.value;
    setGeneralsState({
      ...generalsState,
      about_me: about,
    });
    console.log(e);
  };
  /*================
 Handle Phone Number Change
  ================== */
  const handlePhone = (e) => {
    const tel = e.target.value;
    setGeneralsState({
      ...generalsState,
      phone_number: tel,
    });
    console.log(e);
  };
  return {
    generalsState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleAbout,
    handlePhone,
  };
};

export default useGeneral;
