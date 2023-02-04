import styled from "styled-components";
import ResumeSection from "./ResumeSection";
const Resume = () => {
  return (
    <Wrapper>
      <div className="resume">
        <section className="section-about">
          <div className="about-text-ct">
            <div className="name-wrap">
              <h2 className="name"> ანზორ მუმლაძე</h2>
            </div>
            <div className="contact-info-ct">
              <p className="email">@anzorr666@redberry.ge</p>
              <p className="tel">+995 597 63 45 16</p>
            </div>
            <div className="about-textbox">
              <h4 className="resume-section-title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h4>
              <p className="resume-text">
                ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები
                გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ.{" "}
              </p>
            </div>
          </div>
          <div className="img-ct">
            <img
              src={process.env.PUBLIC_URL + "/assets/profile-picture.png"}
              alt="profile"
            />
          </div>
        </section>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .resume {
    width: 82.2rem;
    height: 108rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background-color: #ffffff;
    padding: 4.8rem 7.5rem 4.4rem 7.8rem;
    .section-about {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #c8c8c8;
      padding-bottom: 3.2rem;
      .about-text-ct {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        .name-wrap {
          height: 4.2rem;
          color: var(--cl-red);
          line-height: 4.2rem;
          font-weight: 700;
          font-size: 2rem;
          font-family: "BPG Nino Mtavruli Bold", monospace;
        }
        .contact-info-ct {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: 1rem;
          .email,
          .tel {
            font-size: 1.8rem;
            color: var(--off-black);
          }
          margin-bottom: 3.4rem;
        }
        .about-textbox {
          width: 43.2rem;
        }
      }

      .img-ct {
        width: 24.6rem;
        height: 24.6rem;
        border-radius: 50%;
        overflow: hidden;
      }
      .img-ct img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;

export default Resume;
