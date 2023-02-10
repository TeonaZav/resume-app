import React, { useContext, useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import FormHeader from "./FormHeader";
import useExperience from "../../hooks/useExperience";
import { ResumeContext } from "../../context/context";

import BtnGoHome from "../BtnGoHome";
import ExperienceF from "./ExperiencesF";
const ExperienceForm = () => {
  const { addExpHandler } = useExperience();

  const { exp } = useContext(ResumeContext);

  useEffect(() => {
    console.log(exp);
  }, [exp]);
  return (
    <Wrapper>
      <div className="form-ct">
        <BtnGoHome />
        <FormHeader heading={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"} pageN={"2 / 3"} />

        {exp.map((el) => {
          return (
            <ExperienceF
              key={el.id}
              id={el.id}
              position={el.positionN}
              employer={el.employerN}
              start_date={el.startDate}
              due_date={el.dueDate}
            />
          );
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
