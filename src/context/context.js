import React, { useEffect, useState } from "react";

const ResumeContext = React.createContext();

const ResumeProvider = ({ children }) => {
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [emailAd, setEmailAd] = useState("");
  const [aboutG, setAboutG] = useState("");
  const [phoneN, setPhoneN] = useState("");
  const [img, setImg] = useState("");
  const [exp, setExp] = useState([
    {
      id: 0,
      positionN: "",
      employerN: "",
      descr: "",
      startDate: new Date(),
      dueDate: new Date(),
    },
    {
      id: 1,
      positionN: "",
      employerN: "",
      descr: "",
      startDate: new Date(),
      dueDate: new Date(),
    },
  ]);
  //errors
  const [nameInvalid, setNameInvalid] = useState(undefined);
  const [lastnameInvalid, setLastnameInvalid] = useState(undefined);
  const [imgEmpty, setImgEmpty] = useState(undefined);
  const [emailInvalid, setEmailInvalid] = useState(undefined);
  const [telInvalid, setTelInvalid] = useState(undefined);
  useEffect(() => {
    console.log(
      "nameInvalid:" + nameInvalid,
      "lastnameInvalid:" + lastnameInvalid,
      "emailInvalid:" + emailInvalid,
      "telInvalid:" + telInvalid
    );
  }, [nameInvalid, lastnameInvalid, emailInvalid, telInvalid]);

  return (
    <ResumeContext.Provider
      value={{
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
        img,
        setImg,
        imgEmpty,
        setImgEmpty,
        exp,
        setExp,
        nameInvalid,
        setNameInvalid,
        lastnameInvalid,
        setLastnameInvalid,
        emailInvalid,
        setEmailInvalid,
        telInvalid,
        setTelInvalid,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
export { ResumeProvider, ResumeContext };
