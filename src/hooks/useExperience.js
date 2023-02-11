import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";
import { dateIsValid } from "../utils/HelperFunctions";
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
  useEffect(() => {
    let data = getLocalExperiences();
    if (data) {
      setExperienceState(data);
    }
  }, []);

  const getLocalExperiences = () => {
    saveLocal("experiences");
    const experiences = localStorage.getItem("experiences");
    if (experiences) {
      console.log(JSON.parse(experiences));
      return JSON.parse(experiences);
    }
  };
  const saveLocal = (name) => {
    let existing = localStorage.getItem(name);
    existing = existing
      ? JSON.parse(existing)
      : [
          {
            id: 0,
            position: "",
            employer: "",
            description: "",
            start_date: null,
            due_date: null,
          },
        ];
    localStorage.setItem(name, JSON.stringify(existing));
  };
  /*================
 Handle Position Change
  ================== */
  const handlePosition = (e, index) => {
    const position = e.target.value;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == index) {
          return { ...el, position: position };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == index) {
          return { ...el, positionN: position };
        } else {
          return el;
        }
      });
    });
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == index) {
          element["position"] = position;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
      });
  };

  /*================
 Handle Employer Change
  ================== */
  const handleEmployer = (e, index) => {
    const employer = e.target.value;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == index) {
          return { ...el, employer: employer };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == index) {
          return { ...el, employerN: employer };
        } else {
          return el;
        }
      });
    });
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == index) {
          element["employer"] = employer;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
      });
  };
  /*================
 Handle Description Change
  ================== */
  const handleDescription = (e, index) => {
    const description = e.target.value;
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == index) {
          return { ...el, description: description };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == index) {
          return { ...el, descr: description };
        } else {
          return el;
        }
      });
    });
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == index) {
          element["description"] = description;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
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

    console.log(dateIsValid(date));
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == id) {
          element["start_date"] = date;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
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
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == id) {
          element["due_date"] = date;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
      });
  };
  /*================
 
  ================== */
  const addExpHandler = () => {
    setExperienceState((experiences) => [
      ...experiences,
      {
        id: experienceState.length,
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
