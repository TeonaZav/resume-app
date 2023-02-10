import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { FormLabel, FormErrorMessage } from "@chakra-ui/form-control";
import { useField, useFormikContext } from "formik";
import useGeneral from "../../hooks/useGeneral";
import { ResumeContext } from "../../context/context";
const ImgInput = ({ ...props }) => {
  const [meta] = useField(props);
  const { generalsState, handleImage } = useGeneral();
  const { setFieldValue } = useFormikContext();
  const { img, imgEmpty } = useContext(ResumeContext);
  useEffect(() => {
    console.log(`File ${generalsState.image?.name} has been set.`);
  }, [generalsState.image]);
  return (
    <Wrapper>
      <div className="image-upload-ct">
        <FormLabel
          className={`label  ${!img && imgEmpty ? "label-error" : null}`}
          htmlFor="avatar"
        >
          პირადი ფოტოს ატვირთვა
        </FormLabel>
        <div className="file">
          <FormLabel htmlFor="avatar" className="upload">
            ატვირთვა
          </FormLabel>
          <input
            {...props}
            id="avatar"
            type="file"
            onChange={(e) => {
              handleImage(e);
              setFieldValue("image", e.target.files[0]);
            }}
            accept="image/*"
          />
          {!img && imgEmpty ? (
            <img
              src={process.env.PUBLIC_URL + "/assets/error-icon.png"}
              className="error-icon"
              alt="error icon"
            />
          ) : img ? (
            <img
              src={process.env.PUBLIC_URL + "/assets/success-icon.png"}
              className="success-icon"
              alt="success icon"
            />
          ) : null}
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: relative;
  .image-upload-ct {
    width: 79.8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.9rem;
  }
  .file {
    position: relative;
    width: 10.7rem;
    height: 2.7rem;
  }
  .file > input[type="file"] {
    position: absoulte;
    opacity: 0;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .file > .upload {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: #0e80bf;
    border-radius: 0.4rem;
    font-weight: 400;
    font-size: 1.4rem;
    line-height: 1.7rem;
    line-height: 2.8rem;
    text-align: center;
    cursor: pointer;
    color: #ffffff;
  }
  .file > label {
    color: black;
    position: absolute;
    top: 0;
    right: 10rem;
    left: 10rem;
    bottom: 0;
  }
  .error-icon,
  .success-icon {
    position: absolute;
    top: 10%;
  }
  .success-icon {
    right: -3rem;
  }
  .error-icon {
    right: -3rem;
  }
  .label {
    margin-bottom: 0;
  }
`;
export default ImgInput;
