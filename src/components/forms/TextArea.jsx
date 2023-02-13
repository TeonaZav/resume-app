import React, { useContext } from "react";
import styled from "styled-components";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { ResumeContext } from "../../context/context";
import { Textarea } from "@chakra-ui/react";
import { useField } from "formik";
const TextArea = ({
  formId,
  hint,
  size,
  label,
  value,
  changedVal,
  ...props
}) => {
  const [field, meta, helpers] = useField(props);
  const { setValue, setTouched } = helpers;
  const { currentEpxId, setCurrentExpId } = useContext(ResumeContext);
  return (
    <Wrapper onClick={(e) => formId && setCurrentExpId(formId)}>
      <FormControl className={`text-ct `}>
        <FormLabel className={`label`}>{label}</FormLabel>
        <Textarea
          {...field}
          {...props}
          onKeyUp={() => setValue(changedVal)}
          onKeyDown={() => setValue(changedVal)}
          onFocus={() => {
            setTouched(true);
            setValue(changedVal);
          }}
          className={`box-xlg text-field  ${
            label == "აღწერა" && meta.touched && meta.error
              ? "box-xlg-control is-invalid"
              : meta.touched && value
              ? "box-xlg-control valid"
              : label == "აღწერა"
              ? "box-xlg-control"
              : null
          }`}
        />
        {label == "აღწერა" && meta.touched && meta.error ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/error-icon.png"}
            className="error-icon"
            alt="error icon"
          />
        ) : label == "აღწერა" && meta.touched && !meta.error && meta.value ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/success-icon.png"}
            className="success-icon"
            alt="success icon"
          />
        ) : null}
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
  }
  .box-xlg {
    width: 79.8rem;
    height: 4.8rem;
    height: 10.3rem;
  }
  .text-field {
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
    resize: none;
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
  .valid {
    border: 1px solid var(--success-color);
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
`;
export default TextArea;
