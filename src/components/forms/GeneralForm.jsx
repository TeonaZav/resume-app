import { Button, VStack } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import styled from "styled-components";
import TextField from "./TextField";
import FormHeader from "./FormHeader";
import { schemaGeneral } from "../schemas/schema";
const GeneralForm = () => {
  return (
    <Wrapper>
      <div className="form-ct">
        <FormHeader />
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            about: "",
            email: "",
            mobile: "",
          }}
          validationSchema={schemaGeneral}
        >
          <VStack as={Form} className="form">
            <div className="info-part1">
              <TextField
                name="firstName"
                placeholder="ანზორ"
                autoComplete="off"
                label="სახელი"
                type="text"
                hint="მინიმუმ 2 ასო, ქართული ასოები"
                size="sm"
              />
              <TextField
                name="lastName"
                placeholder="მუმლაძე"
                autoComplete="off"
                label="გვარი"
                type="text"
                hint="მინიმუმ 2 ასო, ქართული ასოები"
                size="sm"
              />
            </div>
            <div className="info-part2">
              <TextField
                name="about"
                placeholder="ზოგადი ინფო შენ შესახებ"
                autoComplete="off"
                label="ჩემ შესახებ (არასავალდებულო)"
                size="lg-lg"
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
                name="mobile"
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
`;
export default GeneralForm;
