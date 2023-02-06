import { useState } from "react";

const useExperience = () => {
  const [experienceState, setExperienceState] = useState({
    position: "",
    employer: "",
    description: "",
  });

  /*================
 Handle Position Change
  ================== */
  const handlePosition = (e) => {
    const position = e.target.value;
    setExperienceState({
      ...experienceState,
      position,
    });
  };
  /*================
 Handle Employer Change
  ================== */
  const handlEmployer = (e) => {
    const employer = e.target.value;
    setExperienceState({
      ...experienceState,
      employer,
    });
  };
  /*================
 Handle DandlDescription Change
  ================== */
  const handlDescription = (e) => {
    const description = e.target.value;
    setExperienceState({
      ...experienceState,
      description,
    });
  };
  return {
    experienceState,
    handlePosition,
    handlEmployer,
    handlDescription,
  };
};

export default useExperience;
