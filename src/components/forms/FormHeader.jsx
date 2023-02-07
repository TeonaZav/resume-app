import styled from "styled-components";
function FormHeader({ heading, pageN }) {
  return (
    <Wrapper>
      <div>
        <h2>{heading}</h2>
        <p>{pageN}</p>
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
