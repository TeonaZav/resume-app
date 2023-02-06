import { useState, useContext } from "react";
import { ResumeContext } from "../context/context";
const useExperience = () => {
  const [experienceState, setExperienceState] = useState({
    position: "",
    employer: "",
    description: "",
  });
  const { setPositionN, setEmployerN, setDescr } = useContext(ResumeContext);
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
 Handle DandlDescription Change
  ================== */
  const handleDescription = (e) => {
    const description = e.target.value;
    setExperienceState({
      ...experienceState,
      description,
    });
    setDescr(description);
  };
  return {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
  };
};

export default useExperience;
