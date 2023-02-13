import React, { useEffect, useState } from "react";
import axios from "axios";
import { useMenuState } from "@chakra-ui/react";
const ResumeContext = React.createContext();
const URL = "https://resume.redberryinternship.ge/api";
const ResumeProvider = ({ children }) => {
  const [firstN, setFirstN] = useState("");
  const [lastN, setLastN] = useState("");
  const [emailAd, setEmailAd] = useState("");
  const [aboutG, setAboutG] = useState("");
  const [phoneN, setPhoneN] = useState("");
  const [img, setImg] = useState("");
  const [selectedDegree, setSelectedDegree] = useState(null);
  const [currentEpxId, setCurrentExpId] = useState(0);
  const [currentEduId, setCurrentEduId] = useState(0);
  const [expError, setExpError] = useState({});
  const [arrAdded, setArrAdded] = useState([]);
  const [arrEduId, setArrEduId] = useState([]);
  console.log(expError);
  useEffect(() => {
    console.log(selectedDegree);
  }, [selectedDegree]);
  useEffect(() => {
    console.log(arrAdded);
  }, [arrAdded]);
  const [exp, setExp] = useState([
    {
      id: 0,
      positionN: "",
      employerN: "",
      descr: "",
      startDate: new Date(),
      dueDate: new Date(),
    },
  ]);
  console.log(exp);
  const [edu, setEdu] = useState([
    {
      id: 0,
      instituteN: "",
      degreeID: 0,
      descrEdu: "",
      dueDateEdu: null,
    },
  ]);
  //degrees data
  const [degrees, setDegrees] = useState([]);
  //errors
  const [nameInvalid, setNameInvalid] = useState(undefined);
  const [lastnameInvalid, setLastnameInvalid] = useState(undefined);
  const [imgEmpty, setImgEmpty] = useState(undefined);
  const [emailInvalid, setEmailInvalid] = useState(undefined);
  const [telInvalid, setTelInvalid] = useState(undefined);
  const [metaExp, setMetaExp] = useState([]);
  const [expInitial, setExpInitial] = useState([
    {
      position: exp[0].positionN,
      employer: exp[0].employerN,
      start_date: exp[0].startDate,
      due_date: exp[0].dueDate,
      description: exp[0].descr,
    },
  ]);

  const [eduInitial, setEduInitial] = useState([
    {
      institute: edu[0].instituteN,
      degree_id: edu[0].degreeID,
      description: edu[0].descrEdu,
      due_date: edu[0].dueDateEdu,
    },
  ]);

  useEffect(() => {
    console.log(
      "nameInvalid:" + nameInvalid,
      "lastnameInvalid:" + lastnameInvalid,
      "emailInvalid:" + emailInvalid,
      "telInvalid:" + telInvalid
    );
  }, [nameInvalid, lastnameInvalid, emailInvalid, telInvalid]);
  useEffect(() => {
    getDegrees();
  }, []);

  //fetch degrees data
  const getDegrees = async () => {
    const response = await axios(`${URL}/degrees`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setDegrees(response.data);
    } else {
      console.log("something went wrong");
    }
  };
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
        edu,
        setEdu,
        degrees,
        selectedDegree,
        setSelectedDegree,
        currentEpxId,
        setCurrentExpId,
        currentEduId,
        setCurrentEduId,
        expError,
        setExpError,
        expInitial,
        setExpInitial,
        arrAdded,
        setArrAdded,
        metaExp,
        setMetaExp,
        arrEduId,
        setArrEduId,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};
export { ResumeProvider, ResumeContext };
