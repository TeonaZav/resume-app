import { useState, useEffect, useContext } from "react";
import { ResumeContext } from "../context/context";
import { formatPhoneNumber } from "../utils/HelperFunctions";
import { base64toFile, getBase64 } from "../utils/HelperFunctions";
const useGeneral = () => {
  const [generalsState, setGeneralsState] = useState({
    name: "",
    surname: "",
    email: "",
    about_me: "",
    phone_number: "",
    image: "",
  });
  const { setFirstN, setLastN, setEmailAd, setAboutG, setPhoneN, setImg } =
    useContext(ResumeContext);
  useEffect(() => {
    let data = getLocalGenerals();
    if (data) {
      setGeneralsState(data);
      setGeneralsState({
        ...data,
        image: base64toFile(data.image, "recovered.jpg"),
      });
      setFirstN(data.name);
      setLastN(data.surname);
      setEmailAd(data.email);
      setAboutG(data.about_me);
      setPhoneN(data.phone_number);
      setImg(base64toFile(data.image, "recovered.jpg"));
    }
  }, []);

  const getLocalGenerals = () => {
    saveLocal();
    const generals = localStorage.getItem("generals");
    if (generals) {
      return JSON.parse(generals);
    }
  };
  const saveLocal = (name, key, value) => {
    let existing = localStorage.getItem(name);
    existing = existing
      ? JSON.parse(existing)
      : {
          name: "",
          surname: "",
          email: "",
          about_me: "",
          phone_number: "",
          image: "",
        };
    existing[key] = value;
    localStorage.setItem(name, JSON.stringify(existing));
  };
  /*================
 Handle Firstname Change
  ================== */
  const handleFirstName = (e) => {
    const name = e.target.value;
    setGeneralsState({
      ...generalsState,
      name,
    });
    setFirstN(name);
    saveLocal("generals", "name", e.target.value);
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
    setLastN(surname);
    saveLocal("generals", "surname", e.target.value);
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
    setEmailAd(email);
    saveLocal("generals", "email", e.target.value);
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
    setAboutG(about);
    saveLocal("generals", "about_me", e.target.value);
  };
  /*================
 Handle Phone Number Change
  ================== */
  const handlePhone = (e) => {
    formatPhoneNumber(e.target);
    setGeneralsState({
      ...generalsState,
      phone_number: e.target.value,
    });
    setPhoneN(e.target.value);
    saveLocal("generals", "phone_number", e.target.value);
  };
  /*================
 Handle Phone Number Change
  ================== */

  const handleImage = (e) => {
    setGeneralsState({
      ...generalsState,
      image: e.target.files[0],
    });
    setImg(e.target.files[0]);
    console.log(e.target.value);
    const file = e.target.files[0];
    getBase64(file).then((base64) => {
      saveLocal("generals", "image", base64);
    });
  };
  return {
    generalsState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleAbout,
    handlePhone,
    handleImage,
  };
};

export default useGeneral;
