import styled from "styled-components";
import { useNavigate } from "react-router-dom";
function BtnGoBack() {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="btn btn-back" onClick={() => navigate(-1)}>
        ᲣᲙᲐᲜ
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .btn-back {
    left: 15rem;
  }
`;

export default BtnGoBack;
