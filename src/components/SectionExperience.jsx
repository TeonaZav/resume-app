import styled from "styled-components";
const SectionExperience = ({
  position,
  employer,
  text,
  workStart,
  workEnd,
}) => {
  return (
    <Wrapper>
      <div className="textbox">
        <h4 className="resume-section-title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h4>
        <h6 className="position-title">
          {position}, {employer}
        </h6>
        <p className="working-period">
          {workStart} - {workEnd}
        </p>
        <p className="resume-text">{text}</p>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  border-bottom: 1px solid #c8c8c8;
  padding: 2.4rem 0 3.2rem 0;
  .position-title {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 2rem;
    color: var(--off-black);
    margin-bottom: 0.7rem;
  }
  .working-period {
    color: #909090;
    font-style: italic;
    font-weight: 300;
    font-size: 1.6rem;
    line-height: 1.9rem;
    margin-bottom: 1.6rem;
  }
`;
export default SectionExperience;
