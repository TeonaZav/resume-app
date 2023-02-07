import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function BtnGoBack() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <button
        type="button"
        className="btn btn-back"
        onClick={() => navigate(-1)}
      >
        ᲣᲙᲐᲜ
      </button>
    </Wrapper>
  );
}
const Wrapper = styled.button`
  .btn-back {
    left: 15rem;
  }
`;

export default BtnGoBack;
