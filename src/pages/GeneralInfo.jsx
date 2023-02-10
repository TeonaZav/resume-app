import React from "react";
// import GeneralForm from "../components/forms/GeneralForm";
import { MultistepForm } from "../components/forms/MultistepForm";
import Resume from "../components/Resume";
const GeneralInfo = () => {
  return (
    <div className="page-flex-ct">
      {/* <GeneralForm /> */}
      <MultistepForm />
      <Resume />
    </div>
  );
};

export default GeneralInfo;
