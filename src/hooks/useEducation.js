import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";
import { dateIsValid } from "../utils/HelperFunctions";
const useEducation = () => {
  const { setEdu, setCurrentEduId } = useContext(ResumeContext);

  const [educationsState, setEducationsState] = useState([
    {
      id: 0,
      institute: "",
      degree_id: 0,
      description: "",
      due_date: null,
    },
  ]);

  useEffect(() => {
    let data = getLocalEducations();
    if (data) {
      setEducationsState(data);
    }
  }, []);

  const getLocalEducations = () => {
    saveLocal("educations");
    const educations = localStorage.getItem("educations");
    if (educations) {
      console.log(JSON.parse(educations));
      return JSON.parse(educations);
    }
  };
  const saveLocal = (name) => {
    let existing = localStorage.getItem(name);
    existing = existing
      ? JSON.parse(existing)
      : [
          {
            id: 0,
            institute: "",
            degree_id: 0,
            description: "",
            due_date: null,
          },
        ];
    localStorage.setItem(name, JSON.stringify(existing));
  };
  /*================
 Handle Position Change
  ================== */
  const handleIstitute = (e, index) => {
    const institute = e.target.value;
    setEducationsState((prevEducations) => {
      return prevEducations.map((el) => {
        if (el.id == index) {
          return { ...el, institute: institute };
        } else {
          return el;
        }
      });
    });
    setCurrentEduId(index);
    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == index) {
          return { ...el, instituteN: institute };
        } else {
          return el;
        }
      });
    });
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == index) {
          element["institute"] = institute;
          localStorage.setItem("educations", JSON.stringify(data));
        }
      });
  };

  /*================
 Handle Description Change
  ================== */
  const handleEduDescription = (e, index) => {
    const description = e.target.value;
    setEducationsState((prevEducations) => {
      return prevEducations.map((el) => {
        if (el.id == index) {
          return { ...el, description: description };
        } else {
          return el;
        }
      });
    });
    setCurrentEduId(index);
    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == index) {
          return { ...el, descrEdu: description };
        } else {
          return el;
        }
      });
    });
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == index) {
          element["description"] = description;
          localStorage.setItem("educations", JSON.stringify(data));
        }
      });
  };

  /*================
 Handle Due Date Change
  ================== */
  const handleDueDateEdu = (date, id) => {
    setEducationsState((prevExperiences) => {
      return prevExperiences.map((el) => {
        if (el.id == id) {
          return { ...el, due_date: date };
        } else {
          return el;
        }
      });
    });

    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == id) {
          return { ...el, dueDateEdu: date };
        } else {
          return el;
        }
      });
    });
    setCurrentEduId(id);
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == id) {
          element["due_date"] = date;
          localStorage.setItem("educations", JSON.stringify(data));
        }
      });
  };
  /*================
 
  ================== */
  const addEduHandler = () => {
    setEducationsState((experiences) => [
      ...experiences,
      {
        id: educationsState.length,
        position: "",
        employer: "",
        description: "",
        start_date: null,
        due_date: null,
      },
    ]);
  };
  useEffect(() => {
    console.log(educationsState);
  }, [educationsState]);
  return {
    educationsState,
    handleIstitute,
    handleEduDescription,
    handleDueDateEdu,
    addEduHandler,
  };
};

export default useEducation;
