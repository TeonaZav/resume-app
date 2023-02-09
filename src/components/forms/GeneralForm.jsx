import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";

import FormHeader from "./FormHeader";
import useGeneral from "../../hooks/useGeneral";
import { schemaGeneral } from "../schemas/schema";
import ImgInput from "./ImgInput";
import BtnGoHome from "../BtnGoHome";
const GeneralForm = () => {
  const {
    generalsState,
    handleFirstName,
    handleLastName,
    handleEmail,
    handleAbout,
    handlePhone,
    handleImage,
  } = useGeneral();
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
            name: "",
            surname: "",
            email: "",
            about_me: "",
            phone_number: "",
            image: "",
          }}
          validationSchema={schemaGeneral}
          onSubmit={(values) => {
            const vals = { ...values };
            console.log(vals);
            localStorage.setItem(
              "generals",
              JSON.stringify({
                name: vals.name,
                surname: vals.surname,
                email: vals.email,
                about_me: vals.about_me,
                phone_number: vals.phone_number,
                image: vals.image,
              })
            );
            window.setTimeout(() => {
              navigate("/experience");
            }, 2000);
          }}
          onChange={(values) => {
            const vals = { ...values };
            console.log(vals);
          }}
        >
          <VStack as={Form} className="form">
            <div className="info-part1">
              <TextField
                onChange={(e) => handleFirstName(e)}
                value={generalsState.name}
                name="name"
                placeholder="ანზორ"
                autoComplete="off"
                label="სახელი"
                type="text"
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
export default GeneralForm;
