import React from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import FormHeader from "./FormHeader";
import { schemaExperience } from "../schemas/schema";
import useExperience from "../../hooks/useExperience";
const ExperienceForm = () => {
  const { experienceState, handlePosition, handleEmployer, handleDescription } =
    useExperience();
  return (
    <Wrapper>
      <div className="form-ct">
        <FormHeader />
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
                size="sm"
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
                size="sm"
                changedVal={experienceState.employer}
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
    height: calc(100% - 8.8rem);
    width: 79.8rem;
    gap: 4.6rem;
    padding-top: 6.9rem;
  }
  .info-part1 {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .info-part2 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .submit-btn {
    position: absolute;
    bottom: 8.8rem;
    right: 15rem;
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
`;
export default ExperienceForm;
