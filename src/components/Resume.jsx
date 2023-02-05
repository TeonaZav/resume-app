import React, { useContext } from "react";
import styled from "styled-components";
import ResumeSection from "./ResumeSection";
import { ResumeContext } from "../context/context";

const Resume = () => {
  const { firstN, lastN, emailAd, aboutG, phoneN } = useContext(ResumeContext);
  return (
    <Wrapper>
      <div className="resume">
        <section
          className={`${
            firstN && lastN && emailAd && aboutG && phoneN
              ? "section-about b-bottom"
              : "section-about"
          }`}
        >
          <div className="about-text-ct">
            <div className="name-wrap">
              <h2 className="name">
                {" "}
                {firstN} {lastN}
              </h2>
            </div>
            <div className="contact-info-ct">
              <p className="email">{emailAd}</p>
              <p className="tel">{phoneN}</p>
            </div>
            <div className="about-textbox">
              {aboutG && <h4 className="resume-section-title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h4>}

              <p className="resume-text">{aboutG}</p>
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
    .b-bottom {
      border-bottom: 1px solid #c8c8c8;
    }
  }
`;

export default Resume;
