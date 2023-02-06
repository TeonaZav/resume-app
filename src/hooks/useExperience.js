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
  const handleEmployer = (e) => {
    const employer = e.target.value;
    setExperienceState({
      ...experienceState,
      employer,
    });
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
  };
  return {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
  };
};

export default useExperience;
