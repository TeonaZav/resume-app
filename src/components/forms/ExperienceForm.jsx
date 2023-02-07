import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import DateInput from "./DateInput";
import FormHeader from "./FormHeader";
import { schemaExperience } from "../schemas/schema";
import useExperience from "../../hooks/useExperience";
import BtnGoBack from "../BtnGoBack";
import BtnGoHome from "../BtnGoHome";
const ExperienceForm = () => {
  const {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
  } = useExperience();
  console.log(experienceState);

  return (
    <Wrapper>
      <div className="form-ct">
        <BtnGoHome />
        <FormHeader heading={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"} pageN={"2 / 3"} />
        <Formik
          enableReinitialize
          initialValues={{
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          }}
          validationSchema={schemaExperience}
          onSubmit={(values) => {
            const vals = { ...values };
            console.log(vals);
          }}
        >
          <VStack as={Form} className="form">
            <div className="info-part1">
              <TextField
                onChange={(e) => handlePosition(e)}
                value={experienceState.position}
                name="position"
                placeholder="დეველოპერი, დიზაინერი, ა.შ."
                autoComplete="off"
                label="თანამდებობა"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                size="lg"
                changedVal={experienceState.position}
              />

              <TextField
                onChange={(e) => handleEmployer(e)}
                value={experienceState.employer}
                name="employer"
                placeholder="დამსაქმებელი"
                autoComplete="off"
                label="დამსაქმებელი"
                type="text"
                hint="მინიმუმ 2 სიმბოლო"
                size="lg"
                changedVal={experienceState.employer}
              />
            </div>
            <div className="info-part3">
              <DateInput
                name="start_date"
                label="დაწყების რიცხვი"
                start_date={experienceState.start_date}
                due_date={experienceState.due_date}
                handleDate={handleStartDate}
                value={experienceState.start_date}
                selected={experienceState.start_date}
                minDate={new Date(5, 13, 1900)}
                maxDate={experienceState.due_date}
              />
              <DateInput
                name="due-date"
                label="დამთავრების რიცხვი"
                start_date={experienceState.start_date}
                due_date={experienceState.due_date}
                handleDate={handleDueDate}
                value={experienceState.due_date}
                selected={experienceState.due_date}
                minDate={experienceState.start_date}
              />
            </div>
            <div className="info-part2">
              <TextArea
                onChange={(e) => handleDescription(e)}
                value={experienceState.description}
                name="description"
                placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                label="აღწერა"
                size="lg"
                changedVal={experienceState.description}
              />
            </div>

            <BtnGoBack />
            <Button type="submit" className="btn submit-btn">
              ᲨᲔᲛᲓᲔᲒᲘ
            </Button>
          </VStack>
        </Formik>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .form-ct {
    position: relative;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 67.2rem;
    width: 79.8rem;
    gap: 4.6rem;
    padding-top: 6.9rem;
    border-bottom: 1px solid #c1c1c1;
  }

  .info-part1,
  .info-part2,
  .info-part3 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .info-part1 {
    flex-direction: column;
    justify-content: space-between;
    gap: 3.4rem;
  }
  .info-part2 {
    flex-direction: column;
    gap: 2.5rem;
  }
  .info-part3 {
    flex-direction: row;
    justify-content: space-between;
  }
  .submit-btn,
  .btn-back {
    position: absolute;
    bottom: 8.8rem;
  }
  .submit-btn {
    right: 15rem;
  }
  .btn-back {
    left: 15rem;
  }
  .label {
    color: #2e2e2e;
    font-size: 1.4rem;
    line-height: var(--lh-small);
    font-weight: 600;
    font-weight: bold;
    margin-bottom: 0.8rem;
  }
  .label.label-error {
    color: var(--error-color);
  }
  .box-sm {
    width: 37.1rem;
    height: 4.8rem;
  }
  .box-lg {
    width: 79.8rem;
    height: 4.8rem;
  }
`;
export default ExperienceForm;
