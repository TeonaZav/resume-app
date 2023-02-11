import React, { useContext, useState } from "react";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import FormHeader from "./FormHeader";
import useGeneral from "../../hooks/useGeneral";
import useExperience from "../../hooks/useExperience";
import { schema } from "../schemas/schema";
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
    addExpHandler,
  } = useExperience();
  console.log(generalsState);
  const { exp } = useContext(ResumeContext);

  return (
    <Wrapper>
      <div className="form-ct">
        <Stepper>
          <FormikStep className="page-1-3" validationSchema={schema}>
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
          </FormikStep>
          <FormikStep className="page-2-3 form-ct" validationSchema={schema}>
            {experienceState &&
              experienceState.length > 0 &&
              experienceState.map((el, index) => {
                return (
                  <div key={index} id={index}>
                    <div className="info-part1">
                      <TextField
                        onChange={(e) => handlePosition(e)}
                        value={el.position}
                        name={`experiences.${index}.position`}
                        placeholder="დეველოპერი, დიზაინერი, ა.შ."
                        autoComplete="off"
                        label="თანამდებობა"
                        type="text"
                        hint="მინიმუმ 2 სიმბოლო"
                        size="lg"
                        changedVal={el.position}
                      />

                      <TextField
                        onChange={(e) => handleEmployer(e)}
                        value={el.employer}
                        name={`experiences.${index}.employer`}
                        placeholder="დამსაქმებელი"
                        autoComplete="off"
                        label="დამსაქმებელი"
                        type="text"
                        hint="მინიმუმ 2 სიმბოლო"
                        size="lg"
                        changedVal={el.employer}
                      />
                    </div>
                    <div className="info-part3">
                      <DateInput
                        name={`experiences.${index}.start_date`}
                        label="დაწყების რიცხვი"
                        start_date={el.start_date}
                        due_date={el.due_date}
                        handleDate={handleStartDate}
                        value={el.start_date}
                        selected={el.start_date}
                        minDate={new Date(5, 13, 1900)}
                        maxDate={el.due_date}
                        id={index}
                      />
                      <DateInput
                        name={`experiences.${index}.due-date`}
                        label="დამთავრების რიცხვი"
                        start_date={el.start_date}
                        due_date={el.due_date}
                        handleDate={handleDueDate}
                        value={el.due_date}
                        selected={el.due_date}
                        minDate={el.start_date}
                        id={index}
                      />
                    </div>
                    <div className="info-part2">
                      <TextArea
                        onChange={(e) => handleDescription(e)}
                        value={el.description}
                        name={`experiences.${index}.description`}
                        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                        label="აღწერა"
                        size="lg"
                        changedVal={el.description}
                      />
                    </div>
                  </div>
                );
              })}
            <button className="btn btn-add" onClick={addExpHandler}>
              მეტი გამოცდილების დამატება
            </button>
          </FormikStep>
          <FormikStep></FormikStep>
        </Stepper>
      </div>
    </Wrapper>
  );
};

export const FormikStep = ({ children }) => {
  return <>{children}</>;
};
export const Stepper = ({ children, ...props }) => {
  const { firstN, lastN, emailAd, aboutG, phoneN, img, setImgEmpty } =
    useContext(ResumeContext);
  const arrChildren = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentCh = arrChildren[step];
  const nextHandler = () => {
    !img && setImgEmpty(true);
    window.setTimeout(() => {
      setStep((s) => s + 1);
    }, 2000);
  };
  return (
    <Formik
      {...props}
      enableReinitialize
      validationSchema={schema}
      initialValues={{
        name: firstN,
        surname: lastN,
        email: emailAd,
        about_me: aboutG,
        phone_number: phoneN,
        image: img,
        experiences: [
          {
            position: "",
            employer: "",
            start_date: "",
            due_date: "",
            description: "",
          },
        ],
      }}
      onSubmit={(values, helpers) => {
        const vals = { ...values };
        alert(JSON.stringify(values, null, 2));
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

        {step <= 1 ? (
          <Button
            type="button"
            className="btn submit-btn"
            onClick={nextHandler}
          >
            ᲨᲔᲛᲓᲔᲒᲘ
          </Button>
        ) : step === 2 ? (
          <Button type="button" className="btn submit-btn">
            ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
          </Button>
        ) : null}
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
