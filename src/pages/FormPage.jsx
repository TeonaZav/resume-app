import React from "react";
import { MultistepForm } from "../components/forms/MultistepForm";
import Resume from "../components/Resume";
const GeneralInfo = () => {
  return (
    <div className="page-flex-ct">
      <MultistepForm />
      <Resume />
    </div>
  );
};

export default GeneralInfo;
