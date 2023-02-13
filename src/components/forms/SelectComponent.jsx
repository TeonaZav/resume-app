import React, { useState, useContext } from "react";
import styled from "styled-components";
import Select from "react-select";
import { ResumeContext } from "../../context/context";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Field, useField } from "formik";
const SelectComponent = ({ size, label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  const { degrees, selectedDegree, setSelectedDegree } =
    useContext(ResumeContext);
  const [touchedS, setTouchedS] = useState(false);
  const options = degrees.map((obj) => {
    return { value: obj.id, label: obj.title };
  });
  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "#ffffff",
      overflow: "hidden",
      height: "369px",
      borderRadius: "4px",
      filter: "dropShadow(0px 16px 28px rgba(0, 0, 0, 0.24))",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? "#ffffff" : isSelected ? "#ffffff" : undefined,
      zIndex: 1,
      color: "black",
      fontSize: "16px",
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  return (
    <Wrapper>
      <FormControl
        isInvalid={meta.touched && meta.error}
        className={`text-ct `}
      >
        <FormLabel
          className={`label  ${
            touchedS && !selectedDegree ? "label-error" : null
          }`}
        >
          {label}
        </FormLabel>

        <div id="options" className="section">
          <Select
            name="Phone"
            id="Phone"
            options={options}
            {...props}
            placeholder="აირჩიეთ ხარისხი"
            classNames={{
              control: (state) =>
                state.isFocused
                  ? "box-sm select"
                  : touchedS && !selectedDegree
                  ? "box-sm is-invalid select"
                  : selectedDegree
                  ? "box-sm valid select"
                  : "box-sm select",
            }}
            styles={colourStyles}
            onBlur={() => {
              setTouchedS(true);
            }}
            onChange={(e) => setSelectedDegree(e.value)}
          ></Select>
        </div>

        {console.log(meta)}

        {touchedS && !selectedDegree ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/error-icon.png"}
            className="error-icon"
            alt="error icon"
          />
        ) : selectedDegree ? (
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
      top: 55%;
    }
    .success-icon {
      right: 5rem;
    }
    .error-icon {
      right: -3rem;
    }
    .select {
      outline: none;

      font-size: 1.6rem;
      font-weight: 500;
      line-height: 2.1rem;
      color: #1a1a1a;
    }
    .select::placeholder {
      color: var(--pl-holder-color);
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
  .react-select__option {
    border: 0.1rem solid var(--border-color);
    background-color: #f9f9f9f9;
  }
`;
export default SelectComponent;
