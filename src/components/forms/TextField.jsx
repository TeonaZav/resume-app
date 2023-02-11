import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { ResumeContext } from "../../context/context";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/form-control";
import useGeneral from "../../hooks/useGeneral";
import { Input } from "@chakra-ui/input";
import { Field, useField } from "formik";
const TextField = ({ hint, size, setInvalid, label, changedVal, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const { generalsState } = useGeneral();
  const [blurControl, setBlurControl] = useState(false);

  return (
    <Wrapper>
      <FormControl
        isInvalid={meta.touched && meta.error}
        className={`text-ct `}
      >
        <FormLabel
          className={`label  ${
            meta.touched && meta.error
              ? "label-error"
              : !meta.touched && meta.error && blurControl
              ? "label-error"
              : null
          }`}
        >
          {label}
        </FormLabel>
        <Input
          as={Field}
          {...field}
          {...props}
          onKeyUp={() => {
            setValue(changedVal);
          }}
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
        {setInvalid(meta.error)}
        {console.log(meta)}
        {console.log(blurControl)}
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
      top: 50%;
      transform: translateY(-25%);
    }
    .success-icon {
      right: 1rem;
    }
    .error-icon {
      right: -3rem;
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
`;
export default TextField;
