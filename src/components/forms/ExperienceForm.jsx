import React, { useContext, useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import DateInput from "./DateInput";
import FormHeader from "./FormHeader";
import { schemaExperience } from "../schemas/schema";
import useExperience from "../../hooks/useExperience";
import { ResumeContext } from "../../context/context";

import BtnGoHome from "../BtnGoHome";
import ExperienceF from "./ExperiencesF";
const ExperienceForm = () => {
  const {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
    addExpHandler,
  } = useExperience();
  console.log(experienceState);
  const {
    setPositionN,
    setEmployerN,
    setDescr,
    setStartDate,
    setDueDate,
    positionN,
    employerN,
    descr,
    startDate,
    dueDate,
    img,
    setImgEmpty,
  } = useContext(ResumeContext);

  return (
    <Wrapper>
      <div className="form-ct">
        <BtnGoHome />
        <FormHeader heading={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"} pageN={"2 / 3"} />

        {experienceState.map((exp) => {
          return <ExperienceF />;
        })}
        <button className="btn btn-add" onClick={addExpHandler}>
          მეტი გამოცდილების დამატება
        </button>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form-ct {
    position: relative;
    .btn-add {
      margin-top: 4.5rem;
      margin-bottom: 22.7rem;
      align-self: flex-start;
      margin-left: 15rem;
    }
  }
`;
export default ExperienceForm;
