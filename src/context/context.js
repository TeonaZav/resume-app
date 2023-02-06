import React, { useState } from "react";

const ResumeContext = React.createContext();

const ResumeProvider = ({ children }) => {
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [emailAd, setEmailAd] = useState("");
  const [aboutG, setAboutG] = useState("");
  const [phoneN, setPhoneN] = useState("");
  const [positionN, setPositionN] = useState("");
  const [employerN, setEmployerN] = useState("");
  const [descr, setDescr] = useState("");
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
        positionN,
        setPositionN,
        employerN,
        setEmployerN,
        descr,
        setDescr,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
export { ResumeProvider, ResumeContext };
