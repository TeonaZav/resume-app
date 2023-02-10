import React, { useState } from "react";

const ResumeContext = React.createContext();

const ResumeProvider = ({ children }) => {
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [emailAd, setEmailAd] = useState("");
  const [aboutG, setAboutG] = useState("");
  const [phoneN, setPhoneN] = useState("");

  const [img, setImg] = useState("");
  const [imgEmpty, setImgEmpty] = useState(false);
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
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
export { ResumeProvider, ResumeContext };
