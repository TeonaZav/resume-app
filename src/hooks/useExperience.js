import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";

import { convertDataToString, setLocal } from "../utils/HelperFunctions";
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
  ]);

  const {
    exp,
    setExp,
    setCurrentExpId,
    expError,
    expInitial,
    setExpInitial,
    arrAdded,
    setArrAdded,
    metaExp,
  } = useContext(ResumeContext);
  useEffect(() => {
    let extraExp = getLocalAddedExp();
    if (extraExp) {
      setArrAdded(extraExp);
    }

    let initExpLocal = getLocalExpInitial();
    if (initExpLocal) {
      setExpInitial(
        initExpLocal.map((el) => {
          return {
            ...el,
            start_date: convertDataToString(new Date(el.start_date), "en-ZA"),
            due_date: convertDataToString(new Date(el.due_date), "en-ZA"),
          };
        })
      );
    }
    let data = getLocalExperiences();
    if (data) {
      setExperienceState(
        data.map((el) => {
          return {
            ...el,
            start_date: el.start_date ? new Date(el.start_date) : null,
            due_date: el.due_date ? new Date(el.due_date) : null,
          };
        })
      );
      setExp(
        data.map((el) => {
          return {
            id: el.id,
            positionN: el.position,
            descr: el.description,
            startDate: convertDataToString(new Date(el.start_date), "en-ZA"),
            dueDate: convertDataToString(new Date(el.due_date), "en-ZA"),
          };
        })
      );
    }
  }, []);

  /*================ LOCALSTORAGE ============*/

  const getLocalExperiences = () => {
    setLocal("experiences", {
      id: 0,
      position: "",
      employer: "",
      description: "",
      start_date: null,
      due_date: null,
    });

    const experiences = localStorage.getItem("experiences");
    if (experiences) {
      return JSON.parse(experiences);
    }
  };

  const getLocalAddedExp = () => {
    setLocal("addedExp", 0);
    const added = localStorage.getItem("addedExp");
    if (added) {
      return JSON.parse(added);
    }
  };

  const getLocalExpInitial = () => {
    setLocal("arrInitEx", {
      position: exp[0].positionN,
      employer: exp[0].employerN,
      start_date: exp[0].startDate,
      due_date: exp[0].dueDate,
      description: exp[0].descr,
    });
    let arrInitEx = localStorage.getItem("arrInitEx");
    if (arrInitEx) {
      return JSON.parse(arrInitEx);
    }
  };

  /*===============================================/*
  /*===================
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
    setCurrentExpId(index);
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
    setCurrentExpId(index);
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
    setCurrentExpId(index);
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
  const handleStartDate = (date, formId) => {
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == formId) {
          return { ...el, start_date: date };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == formId) {
          return { ...el, startDate: date };
        } else {
          return el;
        }
      });
    });
    setCurrentExpId(formId);
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == formId) {
          element["start_date"] = date;
          localStorage.setItem("experiences", JSON.stringify(data));
        }
      });
  };
  /*================
 Handle Due Date Change
  ================== */
  const handleDueDate = (date, formId) => {
    setExperienceState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == formId) {
          return { ...el, due_date: date };
        } else {
          return el;
        }
      });
    });
    setExp((prevExp) => {
      return prevExp.map((el) => {
        if (el.id == formId) {
          return { ...el, dueDate: date };
        } else {
          return el;
        }
      });
    });
    setCurrentExpId(formId);
    let data = getLocalExperiences();
    data &&
      data.forEach((element) => {
        if (element.id == formId) {
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
    setExp((prevExp) => [
      ...prevExp,
      {
        id: exp.length,
        positionN: "",
        employerN: "",
        descr: "",
        startDate: convertDataToString(new Date(), "en-ZA"),
        dueDate: convertDataToString(new Date(), "en-ZA"),
      },
    ]);
    const arr = JSON.parse(localStorage.getItem("experiences"));
    arr.push({
      id: experienceState.length,
      position: "",
      employer: "",
      description: "",
      start_date: null,
      due_date: null,
    });

    localStorage.setItem("experiences", JSON.stringify(arr));
  };

  const nextHandlerExperiences = (step, setStep) => {
    handleExtraForms();
    document.getElementById(`position${0}`).focus();
    document.getElementById(`position${0}`).blur();
    document.getElementById(`employer${0}`).focus();
    document.getElementById(`employer${0}`).blur();
    document.getElementById(`description${0}`).focus();
    document.getElementById(`description${0}`).blur();
    let count = 0;
    metaExp.map((el, i) => {
      if (
        el.position ||
        el.employer ||
        el.description ||
        el.start_date ||
        el.due_date
      ) {
        document.getElementById(`position${i}`).focus();
        document.getElementById(`position${i}`).blur();
        document.getElementById(`employer${i}`).focus();
        document.getElementById(`employer${i}`).blur();
        document.getElementById(`description${i}`).focus();
        document.getElementById(`description${i}`).blur();

        count++;
      }
    });
    // let timeOut = window.setTimeout(() => {
    //   document.querySelector(".btn-next").click();
    // }, 500);
    // if (count === 3) {
    //   window.clearTimeout(timeOut);
    // }
    if (!expError.hasOwnProperty("experiences")) {
      window.setTimeout(() => {
        setStep((s) => s + 1);
      }, 2000);
    }
  };

  const handleExtraForms = () => {
    if (expError && expError.hasOwnProperty("experiences")) {
      expError.experiences.map((el, index) => {
        if (index !== 0) {
          if (!arrAdded.includes(index) && exp[index]) {
            setExpInitial((prev) => {
              return [
                ...prev,
                {
                  position: exp[index].positionN,
                  employer: exp[index].employerN,
                  start_date: exp[index].startDate,
                  due_date: exp[index].dueDate,
                  description: exp[index].descr,
                },
              ];
            });
            setArrAdded((prev) => {
              return [...prev, index];
            });
            const arr = JSON.parse(localStorage.getItem("addedExp"));
            arr.push(index);
            localStorage.setItem("addedExp", JSON.stringify(arr));
            const arrInitEx = JSON.parse(localStorage.getItem("arrInitEx"));
            arrInitEx.push({
              position: exp[index].positionN,
              employer: exp[index].employerN,
              start_date: exp[index].startDate,
              due_date: exp[index].dueDate,
              description: exp[index].descr,
            });
            localStorage.setItem("arrInitEx", JSON.stringify(arrInitEx));
          }
        }
      });
    } else {
      return;
    }
  };
  useEffect(() => {
    console.log(expError);
    console.log(arrAdded);
    console.log(expInitial);
  }, [expInitial]);
  return {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
    addExpHandler,
    nextHandlerExperiences,
  };
};

export default useExperience;
