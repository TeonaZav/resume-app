import styled from "styled-components";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Textarea } from "@chakra-ui/react";
import { useField } from "formik";
const TextArea = ({ hint, size, label, value, changedVal, ...props }) => {
  const [field, meta, helpers] = useField(props);
  const { setValue } = helpers;
  return (
    <Wrapper>
      <FormControl>
        <FormLabel className={`label`}>{label}</FormLabel>
        <Textarea
          {...field}
          {...props}
          onKeyUp={() => setValue(changedVal)}
          onKeyDown={() => setValue(changedVal)}
          className={`box-xlg text-field  ${meta.touched && value && "valid"}`}
        />
      </FormControl>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;
export default TextArea;
