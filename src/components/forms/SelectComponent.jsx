import React, { useState, useContext } from "react";
import styled from "styled-components";
import Select from "react-select";
import { ResumeContext } from "../../context/context";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { useField } from "formik";

const SelectComponent = ({ formId, value, name, size, label, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { isMulti, placeholder, handleOnChange } = props;
  const { edu, setEdu, degrees, selected, setSelected } =
    useContext(ResumeContext);
  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
    setEdu((prevEdu) => [
      ...prevEdu,
      {
        id: formId,
        degreeID: selected,
      },
    ]);
  };

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
      <FormControl className={`text-ct `}>
        <FormLabel
          className={`label  ${touchedS && !selected ? "label-error" : null}`}
        >
          {label}
        </FormLabel>

        <div id="options" class="section">
          {/* <Select
            {...props}
            {...field}
            name={name}
            id={name}
            options={options}
            label={selected.label}
            onChange={handleChange}
            autoFocus={true}
            value={selected.value}
            placeholder="აირჩიეთ ხარისხი"
            classNames={{
              control: (state) =>
                state.isFocused
                  ? "box-sm select"
                  : touchedS && !selected
                  ? "box-sm is-invalid select"
                  : selected
                  ? "box-sm valid select"
                  : "box-sm select",
            }}
            styles={colourStyles}
            onBlur={() => {
              setTouchedS(true);
            }}
          >
            {console.log(selected, selected.value)}
          </Select> */}
          <select id={name} name={name} {...props} {...field}>
            {options.map((el, index) => {
              return (
                <option key={index} value={el.value}>
                  {el.label}
                </option>
              );
            })}
          </select>
        </div>

        {/* {console.log(meta)} */}

        {touchedS && !selected ? (
          <img
            src={process.env.PUBLIC_URL + "/assets/error-icon.png"}
            className="error-icon"
            alt="error icon"
          />
        ) : selected ? (
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
