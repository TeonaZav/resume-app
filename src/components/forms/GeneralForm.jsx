import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import TextArea from "./TextArea";
import FormHeader from "./FormHeader";
import { schemaGeneral } from "../schemas/schema";
const GeneralForm = () => {
  return (
    <Wrapper>
      <div className="form-ct">
        <FormHeader />
        <Formik
          initialValues={{
            name: "",
            surname: "",
            email: "",
            about_me: "",
            phone_number: "",
          }}
          validationSchema={schemaGeneral}
          onSubmit={(values) => {
            const vals = { ...values };
            console.log(vals);
          }}
        >
          <VStack as={Form} className="form">
            <div className="info-part1">
              <TextField
                name="name"
                placeholder="ანზორ"
                autoComplete="off"
                label="სახელი"
                type="text"
                hint="მინიმუმ 2 ასო, ქართული ასოები"
                size="sm"
              />
              <TextField
                name="surname"
                placeholder="მუმლაძე"
                autoComplete="off"
                label="გვარი"
                type="text"
                hint="მინიმუმ 2 ასო, ქართული ასოები"
                size="sm"
              />
            </div>
            <div className="info-part2">
              <TextArea
                name="about_me"
                placeholder="ზოგადი ინფო შენ შესახებ"
                label="ჩემ შესახებ (არასავალდებულო)"
                size="xlg"
              />
              <TextField
                name="email"
                placeholder="anzorr666@redberry.ge"
                autoComplete="off"
                label="ელ.ფოსტა"
                hint="უნდა მთავრდებოდეს @redberry.ge-ით"
                size="lg"
              />
              <TextField
                name="phone_number"
                placeholder="+995 551 12 34 56"
                autoComplete="off"
                label="მობილურის ნომერი"
                type="text"
                hint="უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს"
                size="lg"
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
