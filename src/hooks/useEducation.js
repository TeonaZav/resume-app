import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";
import { setLocal } from "../utils/HelperFunctions";
const useEducation = () => {
  const {
    edu,
    setEdu,
    setCurrentEduId,
    eduInitial,
    setEduInitial,
    arrEduId,
    setArrEduId,
  } = useContext(ResumeContext);

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
    let extraEdu = getLocalAddedEdu();
    if (extraEdu) {
      setArrEduId(extraEdu);
    }

    let initEduLocal = getLocalEduInitial();
    if (initEduLocal) {
      setEduInitial(
        initEduLocal.map((el) => {
          return {
            ...el,
            due_date: new Date(el.due_date),
          };
        })
      );
    }
    let data = getLocalEducations();
    if (data) {
      setEducationsState(
        data.map((el) => {
          return {
            ...el,
            due_date: el.due_date ? new Date(el.due_date) : null,
          };
        })
      );
      setEdu(
        data.map((el) => {
          return {
            id: el.id,
            instituteN: el.institute,
            degreeID: el.degree_id,
            descrEdu: el.description,
            dueDateEdu: new Date(el.due_date),
          };
        })
      );
    }
  }, []);

  /*================ LOCALSTORAGE ============*/
  const getLocalEducations = () => {
    setLocal("educations", {
      id: 0,
      institute: "",
      degree_id: 0,
      description: "",
      due_date: null,
    });
    const educations = localStorage.getItem("educations");
    if (educations) {
      return JSON.parse(educations);
    }
  };

  const getLocalAddedEdu = () => {
    setLocal("addedEdu", 0);
    const added = localStorage.getItem("addedEdu");
    if (added) {
      return JSON.parse(added);
    }
  };

  const getLocalEduInitial = () => {
    setLocal("arrInitEdu", {
      institute: edu[0].instituteN,
      degree_id: edu[0].degreeID,
      description: edu[0].descrEdu,
      due_date: edu[0].dueDateEdu,
    });
    let arrInitEdu = localStorage.getItem("arrInitEdu");
    if (arrInitEdu) {
      return JSON.parse(arrInitEdu);
    }
  };

  //*================ event handlers ==================/*
  /*================
 Handle Institute Change
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
  const handleDueDateEdu = (date, formId) => {
    setEducationsState((prevEducations) => {
      return prevEducations.map((el) => {
        if (el.id == formId) {
          return { ...el, due_date: date };
        } else {
          return el;
        }
      });
    });

    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == formId) {
          return { ...el, dueDateEdu: date };
        } else {
          return el;
        }
      });
    });
    setCurrentEduId(formId);
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == formId) {
          element["due_date"] = date;
          localStorage.setItem("educations", JSON.stringify(data));
        }
      });
  };

  /*================== */
  const addEduHandler = () => {
    setEducationsState((educations) => [
      ...educations,
      {
        id: educationsState.length,
        institute: "",
        degree_id: 0,
        description: "",
        due_date: null,
      },
    ]);
    setEdu((prevEdu) => [
      ...prevEdu,
      {
        id: edu.length,
        instituteN: "",
        degreeID: 0,
        descrEdu: "",
        dueDateEdu: new Date(),
      },
    ]);
    const arr = JSON.parse(localStorage.getItem("educations"));
    arr.push({
      id: educationsState.length,
      institute: "",
      degree_id: 0,
      description: "",
      due_date: null,
    });

    localStorage.setItem("educations", JSON.stringify(arr));
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
