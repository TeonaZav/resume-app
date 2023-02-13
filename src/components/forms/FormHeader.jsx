import React, { useContext } from "react";
import styled from "styled-components";
import BtnGoHome from "../BtnGoHome";
import { ResumeContext } from "../../context/context";

function FormHeader({ heading, pageN }) {
  const { refreshForm } = useContext(ResumeContext);
  return (
    <Wrapper>
      <div>
        <BtnGoHome onClick={refreshForm} />
        <h2>{heading}</h2>
        <p>{pageN}</p>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  div {
    position: relative;
    width: 79.8rem;
    height: 8.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--off-black);
    p {
      font-weight: 400;
      font-size: 1.8rem;
      line-height: 2rem;
    }
  }
`;
export default FormHeader;
