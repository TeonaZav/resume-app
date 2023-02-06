import styled from "styled-components";
function FormHeader({ heading }) {
  return (
    <Wrapper>
      <div>
        <h2>{heading}</h2>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  width: 79.8rem;
  div {
    width: 100%;
    height: 8.5rem;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid var(--off-black);
  }
`;
export default FormHeader;
