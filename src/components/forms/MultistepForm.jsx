import React, { useContext, useState } from "react";
import axios from "axios";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import SelectComponent from "./SelectComponent";
import FormHeader from "./FormHeader";
import useGeneral from "../../hooks/useGeneral";
import useExperience from "../../hooks/useExperience";
import useEducation from "../../hooks/useEducation";
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

  const {
    educationsState,
    handleIstitute,
    handleEduDescription,
    handleDueDateEdu,
    addEduHandler,
  } = useEducation();

  const {
    setNameInvalid,
    setLastnameInvalid,
    setEmailInvalid,
    setTelInvalid,
    selectedDegree,
  } = useContext(ResumeContext);
  return (
    <Wrapper>
      <div className="form-ct">
        <Stepper validateOnChange>
          <FormikStep className="page page-1-3" validationSchema={schema}>
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
                setInvalid={setNameInvalid}
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
                setInvalid={setLastnameInvalid}
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
                setInvalid={setEmailInvalid}
              />
              <TextField
                onChange={(e) => handlePhone(e)}
                value={generalsState.phone_number.replace(/\s/g, "")}
                name="phone_number"
                placeholder="+995 551 12 34 56"
                autoComplete="off"
                label="მობილურის ნომერი"
                type="text"
                hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                size="lg"
                changedVal={generalsState.phone_number.replace(/\s/g, "")}
                setInvalid={setTelInvalid}
              />
            </div>
          </FormikStep>
          <FormikStep className="page-2-3 form-ct" validationSchema={schema}>
            {experienceState &&
              experienceState.length > 0 &&
              experienceState.map((el, index) => {
                return (
                  <div
                    key={`${index}_experience`}
                    id={`form${index}`}
                    className="form"
                  >
                    <div className="exp-part1">
                      <TextField
                        onChange={(e) => handlePosition(e, index)}
                        value={el.position}
                        name={`experiences.${index}.position`}
                        placeholder="დეველოპერი, დიზაინერი, ა.შ."
                        autoComplete="off"
                        label="თანამდებობა"
                        type="text"
                        hint="მინიმუმ 2 სიმბოლო"
                        size="lg"
                        changedVal={el.position}
                        formId={index}
                        id={`position${index}`}
                      />
                      <TextField
                        onChange={(e) => handleEmployer(e, index)}
                        value={el.employer}
                        name={`experiences.${index}.employer`}
                        placeholder="დამსაქმებელი"
                        autoComplete="off"
                        label="დამსაქმებელი"
                        type="text"
                        hint="მინიმუმ 2 სიმბოლო"
                        size="lg"
                        changedVal={el.employer}
                        formId={index}
                        id={`employer${index}`}
                      />
                    </div>
                    <div className="exp-part2">
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
                        formId={index}
                        id={`start_date${index}`}
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
                        formId={index}
                        id={`due_date${index}`}
                      />
                    </div>
                    <div className="exp-part3">
                      <TextArea
                        onChange={(e) => handleDescription(e, index)}
                        value={el.description}
                        name={`experiences.${index}.description`}
                        placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
                        label="აღწერა"
                        size="lg"
                        changedVal={el.description}
                        formId={index}
                        id={`description${index}`}
                      />
                    </div>
                  </div>
                );
              })}
            <button className="btn btn-add" onClick={addExpHandler}>
              მეტი გამოცდილების დამატება
            </button>
          </FormikStep>
          <FormikStep>
            {educationsState &&
              educationsState.map((el, index) => {
                return (
                  <div key={`${index}_education`} id={index} className="form">
                    <div className="exp-part1">
                      <TextField
                        onChange={(e) => handleIstitute(e, index)}
                        value={el.institute}
                        name={`educations.${index}.institute`}
                        placeholder="სასწავლებელი"
                        autoComplete="off"
                        label="სასწავლებელი"
                        type="text"
                        hint="მინიმუმ 2 სიმბოლო"
                        size="lg"
                        changedVal={el.institute}
                        formId={index}
                      />
                    </div>
                    <div className="exp-part2">
                      <SelectComponent
                        size="sm"
                        value={selectedDegree}
                        name={`educations.${index}.degree_id`}
                        // name={`degree_id`}
                        formId={index}
                      />
                      <DateInput
                        name={`educations.${index}.due-date`}
                        label="დამთავრების რიცხვი"
                        due_date={el.due_date}
                        handleDate={handleDueDateEdu}
                        value={el.due_date}
                        selected={el.due_date}
                        formId={index}
                      />
                    </div>
                    <div className="exp-part3">
                      <TextArea
                        onChange={(e) => handleEduDescription(e, index)}
                        value={el.description}
                        name={`educations.${index}.description`}
                        placeholder="განათლების აღწერა"
                        label="აღწერა"
                        size="lg"
                        changedVal={el.description}
                        formId={index}
                      />
                    </div>
                  </div>
                );
              })}

            <button className="btn btn-add" onClick={addEduHandler}>
              სხვა სასწავლებლის დამატება
            </button>
          </FormikStep>
        </Stepper>
      </div>
    </Wrapper>
  );
};

export const FormikStep = ({ children }) => {
  return <>{children}</>;
};
export const Stepper = ({ children, ...props }) => {
  const { firstN, lastN, emailAd, aboutG, phoneN, img } =
    useContext(ResumeContext);
  const { expInitial, eduInitial } = useContext(ResumeContext);
  const { nextHandlerGenerals } = useGeneral();
  const { nextHandlerExperiences } = useExperience();
  const arrChildren = React.Children.toArray(children);
  const [step, setStep] = useState(0);
  const currentCh = arrChildren[step];

  return (
    <Formik
      {...props}
      enableReinitialize
      validationSchema={schema}
      validateOnChange={true}
      validateOnBlur={true}
      initialValues={{
        name: firstN,
        surname: lastN,
        email: emailAd,
        about_me: aboutG,
        phone_number: phoneN.replace(/\s/g, ""),
        image: img,
        experiences: expInitial,
        educations: eduInitial,
      }}
      onSubmit={(values, actions) => {
        const vals = { ...values };
        alert(JSON.stringify(values, null, 2));
        // console.log({
        //   name: values.name,
        //   surname: values.surname,
        //   email: values.email,
        //   phone_number: values.phone_number,
        //   experiences: values.experiences,
        //   educations: values.educations,
        //   image: imgBinary,
        // });

        axios
          .post(
            "https://resume.redberryinternship.ge/api/cvs",
            {
              name: values.name,
              surname: values.surname,
              email: values.email,
              phone_number: values.phone_number,
              experiences: values.experiences,
              educations: values.educations,
              image: values.image,
            },
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          )
          .then((resp) => {
            console.log(resp.data);
          })
          .catch((err) => console.log(err));
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
            className="btn submit-btn btn-next"
            onClick={
              step === 0
                ? () => nextHandlerGenerals(step, setStep)
                : step === 1
                ? () => nextHandlerExperiences(step, setStep)
                : null
            }
          >
            ᲨᲔᲛᲓᲔᲒᲘ
          </Button>
        ) : step === 2 ? (
          <Button type="submit" className="btn submit-btn">
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
    width: 79.8rem;
    gap: 4.6rem;
    margin-bottom: 4.5rem;
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

  .exp-part1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3.4rem;
  }
  .exp-part3 {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
  .exp-part2 {
    width: 100%;
    display: flex;
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
