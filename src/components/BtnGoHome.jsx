import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function BtnGoHome() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button type="button" className="btn" onClick={() => navigate("/")}>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-back.png"}
          alt="back-icon"
          className="back-icon"
        />
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.button`
  border: none;
  display: inline-block;
  width: 4rem;
  height: 4rem;
  background-color: #ffffff;
  border-radius: 50%;
  border: none;
  text-decoration: none;
  position: absolute;
  left: 4.8rem;
  top: 3.2rem;
`;

export default BtnGoHome;
