import styled from "styled-components";
import useExperience from "../hooks/useExperience";
const ResumeSection = ({
  position,
  employer,
  text,
  workStart,
  workEnd,
  id,
  data,
  heading,
}) => {
  console.log(id);
  const { experienceState } = useExperience();
  return (
    <Wrapper>
      <div
        className={
          data.length == id ? "section-ct border-bottom" : "section-ct"
        }
      >
        {position || employer || text || workStart || workEnd ? (
          <div className="textbox">
            <h4 className="resume-section-title">{heading}</h4>
            <h6 className="position-title">
              {position}, {employer}
            </h6>
            <p className="working-period">
              {workStart} - {workEnd}
            </p>
            <p className="resume-text">{text}</p>
          </div>
        ) : null}
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .section-ct {
    padding: 2.4rem 0 3.2rem 0;
    width: 66.2rem;
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
  }
`;
export default ResumeSection;
