import React from "react";
import styled from "styled-components";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";

const TextField = ({ hint, size, label, ...props }) => {
  const [field, meta] = useField(props);
  console.log(field);
  return (
    <Wrapper>
      <FormControl
        isInvalid={meta.touched && meta.error}
        className={`text-ct `}
      >
        <FormLabel
          className={`label  ${
            meta.touched && meta.error ? "label-error" : null
          }`}
        >
          {label}
        </FormLabel>
        <Input
          as={Field}
          {...field}
          {...props}
          className={`${
            size === "sm" ? "box-sm" : size === "lg" ? "box-lg" : "box-xlg"
          } input-field  ${
            meta.touched && meta.error
              ? "is-invalid"
              : meta.touched && !meta.error && meta.value
              ? "valid"
              : null
          }`}
        />
        {meta.touched && meta.error ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/error-icon.png"}
            className="error-icon"
            alt="error icon"
          />
        ) : meta.touched && !meta.error && meta.value ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/success-icon.png"}
            className="success-icon"
            alt="success icon"
          />
        ) : null}
        {/* <FormErrorMessage className="error">{meta.error}</FormErrorMessage> */}
        <FormHelperText>{hint}</FormHelperText>
      </FormControl>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .text-ct {
    display: flex;
    flex-direction: column;

    position: relative;
    gap: 0;
    .input-field {
      background: #ffffff;
      border: 0.1rem solid var(--border-color);
      font-size: var(--font-sm);
      line-height: var(--lh-small);
      font-weight: 400;
      color: var(--input-color);
      padding: 1.3rem 1.6rem;
      caret-color: #6499ff;
      border-radius: 0.4rem;
      margin-bottom: 0.8rem;
      &::placeholder {
        color: var(--pl-holder-color);
      }
      &:focus {
        border: 0.1rem solid var(--border-focused);
        outline: none;
        &::placeholder {
          opacity: 0;
        }
      }
    }
    .error {
      font-size: 1.1rem;
      font-weight: 500;
      line-height: 1.6rem;
      color: var(--error-color);
      margin-bottom: 1.1rem;
      text-align: right;
      align-self: flex-end;
      margin-top: -1rem;
    }
    .is-invalid,
    .valid {
      background-repeat: no-repeat;
      background-position: center;
      background-size: 2rem;
    }
    .is-invalid {
      border: 1px solid var(--error-color);
    }
    .valid {
      border: 1px solid var(--success-color);
    }
    .error-icon,
    .success-icon {
      position: absolute;
      right: 1rem;
      top: 50%;
      transform: translateY(-25%);
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
    .hint {
      color: #2e2e2e;
      font-weight: 300;
      font-size: 1.4rem;
      line-height: var(--lh-small);
    }
  }
  .box-sm {
    width: 37.1rem;
    height: 4.8rem;
  }
  .box-lg {
    width: 79.8rem;
    height: 4.8rem;
  }
  .box-xlg {
    width: 79.8rem;
    height: 4.8rem;
    height: 10.3rem;
  }
`;
export default TextField;
