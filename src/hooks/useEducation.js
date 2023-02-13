import { useState, useContext, useEffect } from "react";
import { ResumeContext } from "../context/context";
import { setLocal } from "../utils/HelperFunctions";
import { convertDataToString } from "../utils/HelperFunctions";
const useEducation = () => {
  const { edu, setEdu, setCurrentEduId, setEduInitial, setArrEduId, selected } =
    useContext(ResumeContext);

  const [educationsState, setEducationsState] = useState([
    {
      id: 0,
      institute: "",
      degree_id: selected,
      description: "",
      due_date: null,
      degree_status: "",
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
            due_date: convertDataToString(new Date(el.due_date), "en-ZA"),
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
            degreeID: selected,
            descrEdu: el.description,
            dueDateEdu: new Date(el.due_date),
            degreeStatus: "",
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
      degree_id: selected,
      description: "",
      due_date: null,
      degree_status: "",
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
      degree_id: selected,
      description: edu[0].descrEdu,
      due_date: edu[0].dueDateEdu,
      degree_status: "",
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

  const handleDegreeStatus = (formId, dStatus) => {
    setEducationsState((prevEducations) => {
      return prevEducations.map((el) => {
        if (el.id == formId) {
          return { ...el, degree_status: dStatus };
        } else {
          return el;
        }
      });
    });

    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == formId) {
          return { ...el, degreeStatus: dStatus };
        } else {
          return el;
        }
      });
    });
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == formId) {
          element["degree_status"] = dStatus;
          localStorage.setItem("educations", JSON.stringify(data));
        }
      });
  };
  const handleDegreeId = (formId, degreeId) => {
    setEducationsState((prevEducations) => {
      return prevEducations.map((el) => {
        if (el.id == formId) {
          return { ...el, degree_id: degreeId };
        } else {
          return el;
        }
      });
    });

    setEdu((prevEdu) => {
      return prevEdu.map((el) => {
        if (el.id == formId) {
          return { ...el, degreeId: degreeId };
        } else {
          return el;
        }
      });
    });
    let data = getLocalEducations();
    data &&
      data.forEach((element) => {
        if (element.id == formId) {
          element["degree_id"] = degreeId;
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
        degree_id: selected,
        description: "",
        due_date: null,
        degree_status: "",
      },
    ]);
    setEdu((prevEdu) => [
      ...prevEdu,
      {
        id: edu.length,
        instituteN: "",
        degreeID: selected,
        descrEdu: "",
        dueDateEdu: new Date(),
        degreeStatus: "",
      },
    ]);
    const arr = JSON.parse(localStorage.getItem("educations"));
    arr.push({
      id: educationsState.length,
      institute: "",
      degree_id: selected,
      description: "",
      due_date: null,
      degree_status: "",
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
    handleDegreeStatus,
    handleDegreeId,
  };
};

export default useEducation;
