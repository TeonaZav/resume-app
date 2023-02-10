import React, { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import FormHeader from "./FormHeader";
import useGeneral from "../../hooks/useGeneral";
import useExperience from "../../hooks/useExperience";
import { schemaGeneral } from "../schemas/schema";
import ImgInput from "./ImgInput";
import BtnGoHome from "../BtnGoHome";
import DateInput from "./DateInput";
import { ResumeContext } from "../../context/context";
const GeneralForm = () => {
  const { firstN, lastN, emailAd, aboutG, phoneN, img, setImgEmpty } =
    useContext(ResumeContext);
  const {
    generalsState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleAbout,
    handlePhone,
  } = useGeneral();
  const {
    experienceState,
    handlePosition,
    handleEmployer,
    handleDescription,
    handleStartDate,
    handleDueDate,
  } = useExperience();
  console.log(generalsState);
  const navigate = useNavigate();

  return (
    <Wrapper>
      <div className="form-ct">
        <BtnGoHome />
        <FormHeader heading={"ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"} pageN={"1 / 3"} />
        <Formik
          enableReinitialize
          initialValues={{
            name: firstN,
            surname: lastN,
            email: emailAd,
            about_me: aboutG,
            phone_number: phoneN,
            image: img,
            experiences: [
              {
                id: 0,
                position: "position",
                employer: "",
                start_date: "",
                due_date: "",
                description: "",
              },
            ],
          }}
          validationSchema={schemaGeneral}
          onSubmit={(values) => {
            const vals = { ...values };
            console.log(vals);

            window.setTimeout(() => {
              navigate("/experience");
            }, 2000);
          }}
          onClick={(values) => {
            const vals = { ...values };
            console.log(vals);
            console.log("hii");
          }}
        >
          <VStack as={Form} className="form">
            <div className="page-1-3">
              <div className="info-part1">
                <TextField
                  onChange={(e) => handleFirstName(e)}
                  value={generalsState.name}
                  name="name"
                  placeholder="ანზორ"
                  autoComplete="off"
                  label="სახელი"
                  hint="მინიმუმ 2 ასო, ქართული ასოები"
                  size="sm"
                  changedVal={generalsState.name}
                />
                <TextField
                  onChange={(e) => handleLastName(e)}
                  value={generalsState.surname}
                  name="surname"
                  placeholder="მუმლაძე"
                  autoComplete="off"
                  label="გვარი"
                  type="text"
                  hint="მინიმუმ 2 ასო, ქართული ასოები"
                  size="sm"
                  changedVal={generalsState.surname}
                />
              </div>
              <ImgInput />
              <div className="info-part2">
                <TextArea
                  onChange={(e) => handleAbout(e)}
                  value={generalsState.about_me}
                  name="about_me"
                  placeholder="ზოგადი ინფო შენ შესახებ"
                  label="ჩემ შესახებ (არასავალდებულო)"
                  size="xlg"
                  changedVal={generalsState.about_me}
                />
                <TextField
                  onChange={(e) => handleEmail(e)}
                  value={generalsState.email}
                  name="email"
                  placeholder="anzorr666@redberry.ge"
                  autoComplete="off"
                  label="ელ.ფოსტა"
                  hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                  size="lg"
                  changedVal={generalsState.email}
                />
                <TextField
                  onChange={(e) => handlePhone(e)}
                  value={generalsState.phone_number}
                  name="phone_number"
                  placeholder="+995 551 12 34 56"
                  autoComplete="off"
                  label="მობილურის ნომერი"
                  type="text"
                  hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                  size="lg"
                  changedVal={generalsState.phone_number}
                />
              </div>
              <Button
                type="button"
                className="btn submit-btn"
                onClick={(e) => !img && setImgEmpty(true)}
              >
                ᲨᲔᲛᲓᲔᲒᲘ
              </Button>
            </div>
            <div className="page-2-3">
              {" "}
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
                  // id={id}
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
                  // id={id}
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
              <Button
                type="button"
                className="btn submit-btn"
                onClick={(e) => !img && setImgEmpty(true)}
              >
                ᲨᲔᲛᲓᲔᲒᲘ
              </Button>
            </div>
            <div>
              <Button
                type="submit"
                className="btn submit-btn"
                onClick={(e) => !img && setImgEmpty(true)}
              >
                ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
              </Button>
            </div>
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
export default GeneralForm;
