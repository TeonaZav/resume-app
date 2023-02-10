import React, { useContext, useState } from "react";
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
export const MultistepForm = () => {
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

  return (
    <Wrapper>
      <div className="form-ct">
        <Stepper>
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
          </div>
          <div></div>
        </Stepper>
      </div>
    </Wrapper>
  );
};
export const Stepper = ({ children, ...props }) => {
  const { firstN, lastN, emailAd, aboutG, phoneN, img, setImgEmpty } =
    useContext(ResumeContext);
  const arrChildren = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentCh = arrChildren[step];

  return (
    <Formik
      {...props}
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
      onSubmit={(values, helpers) => {
        const vals = { ...values };
        console.log(vals);
        !img && setImgEmpty(true);
        window.setTimeout(() => {
          setStep((s) => s + 1);
        }, 2000);
      }}
    >
      <VStack as={Form} className="form" autoComplete="off">
        <BtnGoHome />
        <FormHeader
          heading={
            step === 0
              ? "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ"
              : step === 1
              ? "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"
              : step === 2
              ? "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"
              : null
          }
          pageN={`${step + 1} / 3`}
        />
        {currentCh}
        {step >= 1 && (
          <Button
            type="button"
            className="btn btn-back"
            onClick={(e) => setStep((s) => s - 1)}
          >
            ᲣᲙᲐᲜ
          </Button>
        )}

        <Button type="submit" className="btn submit-btn">
          {step <= 1 ? "ᲨᲔᲛᲓᲔᲒᲘ" : "ᲓᲐᲡᲠᲣᲚᲔᲑᲐ"}
        </Button>
      </VStack>
    </Formik>
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
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    min-height: 67.2rem;
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
