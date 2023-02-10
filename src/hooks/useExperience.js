import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";
const useExperience = () => {
  const [experienceState, setExperienceState] = useState([
    {
      id: 0,
      position: "",
      employer: "",
      description: "",
      start_date: null,
      due_date: null,
    },
    {
      id: 1,
      position: "",
      employer: "",
      description: "",
      start_date: null,
      due_date: null,
    },
  ]);

  const { setExp } = useContext(ResumeContext);
  /*================
 Handle Position Change
  ================== */
  const handlePosition = (e) => {
    const position = e.target.value;
    const formId = e.target.closest("form").id;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == formId) {
          return { ...el, position: position };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == formId) {
          return { ...el, positionN: position };
        } else {
          return el;
        }
      });
    });
  };
  /*================
 Handle Employer Change
  ================== */
  const handleEmployer = (e) => {
    const employer = e.target.value;
    const formId = e.target.closest("form").id;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == formId) {
          return { ...el, employer: employer };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == formId) {
          return { ...el, employerN: employer };
        } else {
          return el;
        }
      });
    });
  };
  /*================
 Handle Description Change
  ================== */
  const handleDescription = (e) => {
    const description = e.target.value;
    const formId = e.target.closest("form").id;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == formId) {
          return { ...el, description: description };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == formId) {
          return { ...el, descr: description };
        } else {
          return el;
        }
      });
    });
  };
  /*================
 Handle Start Date Change
  ================== */
  const handleStartDate = (date, id) => {
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == id) {
          return { ...el, start_date: date };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == id) {
          return { ...el, startDate: date };
        } else {
          return el;
        }
      });
    });
  };
  /*================
 Handle Due Date Change
  ================== */
  const handleDueDate = (date, id) => {
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == id) {
          return { ...el, due_date: date };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == id) {
          return { ...el, dueDate: date };
        } else {
          return el;
        }
      });
    });
  };
  /*================
 
  ================== */
  const addExpHandler = () => {
    setExperienceState((experiences) => [
      ...experiences,
      {
        position: "",
        employer: "",
        description: "",
        start_date: null,
        due_date: null,
      },
    ]);

    console.log(experienceState);
  };
  useEffect(() => {
    console.log(experienceState);
  }, [experienceState]);
  return {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
    addExpHandler,
  };
};

export default useExperience;
