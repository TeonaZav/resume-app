import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import ResumeSection from "./SectionExperience";
import { convertDataToString } from "../utils/HelperFunctions";
import { ResumeContext } from "../context/context";

const Resume = () => {
  const {
    firstN,
    lastN,
    emailAd,
    aboutG,
    phoneN,
    img,
    positionN,
    employerN,
    descr,
    startDate,
    dueDate,
  } = useContext(ResumeContext);

  console.log(img);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const reader = new FileReader();
    img && reader.readAsDataURL(img);

    reader.onload = () => {
      setPreview(reader.result);
    };
  }, [img]);
  console.log(preview);
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
              <div className="email-ct">
                <img
                  src={process.env.PUBLIC_URL + "/assets/email-icon.png"}
                  alt="profile"
                  className={`${emailAd ? "email-icon" : "email-icon hidden"}`}
                />
                <p className="email">{emailAd}</p>
              </div>

              <div className="phone-n-ct">
                <img
                  src={process.env.PUBLIC_URL + "/assets/phone-icon.png"}
                  alt="profile"
                  className={`${phoneN ? "phone-icon" : "phone-icon hidden"}`}
                />
                <p className="tel">{phoneN}</p>
              </div>
            </div>
            <div className="about-textbox">
              {aboutG && <h2 className="resume-section-title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>}

              <p className="resume-text">{aboutG}</p>
            </div>
          </div>
          <div className="img-ct">
            <img
              // src={process.env.PUBLIC_URL + "/assets/profile-picture.png"}
              src={preview}
              alt="profile"
            />
          </div>
        </section>
        <ResumeSection
          position={positionN}
          employer={employerN}
          workStart={convertDataToString(startDate, "sv")}
          workEnd={convertDataToString(dueDate, "sv")}
          text={descr}
        />
        {console.log(convertDataToString(startDate, "en-ZA"))}
        <img
          src={process.env.PUBLIC_URL + "/assets/resume-logo.png"}
          alt="profile"
          className="resume-logo"
        />
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
    position: relative;
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
    .phone-n-ct,
    .email-ct {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 1rem;
    }
    .resume-logo {
      position: absolute;
      width: 4.2rem;
      height: 4.2rem;
      left: 7.8rem;
      bottom: 4.4rem;
    }
  }
`;

export default Resume;
