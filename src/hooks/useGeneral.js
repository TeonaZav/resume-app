import { useState, useEffect, useContext } from "react";
import { ResumeContext } from "../context/context";
const useGeneral = () => {
  const [generalsState, setGeneralsState] = useState({
    name: "",
    surname: "",
    email: "",
    about_me: "",
    phone_number: "",
  });
  const {
    firstN,
    setFirstN,
    lastN,
    setLastN,
    emailAd,
    setEmailAd,
    aboutG,
    setAboutG,
    phoneN,
    setPhoneN,
  } = useContext(ResumeContext);
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
    setFirstN(name);
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
    setLastN(surname);
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
    setEmailAd(email);
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
    setAboutG(about);
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
    setPhoneN(tel);
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