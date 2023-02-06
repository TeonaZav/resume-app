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
              {aboutG && <h2 className="resume-section-title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>}

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
    margin: auto;
    text-align: justify;
    word-break: break-word;
    white-space: pre-line;
    overflow-wrap: break-word;
    -ms-word-break: break-word;
    word-break: break-word;
    -ms-hyphens: auto;
    -moz-hyphens: auto;
    -webkit-hyphens: auto;
    hyphens: auto;
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
        align-self: flex-start;
        margin-top: 2rem;
        width: 43.2rem;
        .name-wrap {
          min-height: 4.2rem;
          color: #f93b1d;
          font-weight: 900;
          font-size: 3rem;
          line-height: 4.2rem;
          letter-spacing: -2.5px;
          margin-bottom: 1.7rem;
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
          padding: 0.2rem;
        }
      }

      .img-ct {
        width: 24.6rem;
        height: 24.6rem;
        border-radius: 50%;
        overflow: hidden;
        align-self: flex-start;
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
