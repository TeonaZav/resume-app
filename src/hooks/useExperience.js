import { useState, useContext } from "react";
import { ResumeContext } from "../context/context";
const useExperience = () => {
  const [experienceState, setExperienceState] = useState({
    experiences: [
      {
        position: "",
        employer: "",
        description: "",
        start_date: null,
        due_date: null,
      },
      {
        position: "",
        employer: "",
        description: "",
        start_date: null,
        due_date: null,
      },
    ],
  });

  const {
    setPositionN,
    setEmployerN,
    setDescr,
    setStartDate,
    setDueDate,
    positionN,
    employerN,
    descr,
    startDate,
    dueDate,
    img,
    setImgEmpty,
  } = useContext(ResumeContext);
  /*================
 Handle Position Change
  ================== */
  const handlePosition = (e) => {
    const position = e.target.value;
    setExperienceState({
      ...experienceState,
      position,
    });
    setPositionN(position);
  };
  /*================
 Handle Employer Change
  ================== */
  const handleEmployer = (e) => {
    const employer = e.target.value;
    setExperienceState({
      ...experienceState,
      employer,
    });
    setEmployerN(employer);
  };
  /*================
 Handle Description Change
  ================== */
  const handleDescription = (e) => {
    const description = e.target.value;
    setExperienceState({
      ...experienceState,
      description,
    });
    setDescr(description);
  };
  /*================
 Handle Start Date Change
  ================== */
  const handleStartDate = (date) => {
    setExperienceState({
      ...experienceState,
      start_date: date,
    });
    setStartDate(date);
  };
  /*================
 Handle Due Date Change
  ================== */
  const handleDueDate = (date) => {
    setExperienceState({
      ...experienceState,
      due_date: date,
    });
    setDueDate(date);
  };

  return {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
  };
};

export default useExperience;
