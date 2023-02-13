import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ResumeSection from "./SectionExperience";
import { convertDataToString } from "../utils/HelperFunctions";
import { ResumeContext } from "../context/context";
const ResumeComponent = () => {
  const { responseData } = useContext(ResumeContext);
  useEffect(() => {
    console.log(responseData);
  }, [responseData]);

  //   {
  //     "id": 13847,
  //     "name": "ანზორ",
  //     "surname": "მუმლაძე",
  //     "email": "anzor@redberry.ge",
  //     "phone_number": "+995577054677",
  //     "about_me": null,
  //     "experiences": [
  //         {
  //             "id": 14950,
  //             "position": "fdfsdfsfsfsdfs",
  //             "employer": "fdsfsfsfdfsdfsf",
  //             "start_date": "2023-02-13",
  //             "due_date": "2023-02-13",
  //             "description": "fdsfdf fsfsgdgs gdgsgdsgdg sgdgsd gs gs gs gs gsg"
  //         },
  //         {
  //             "id": 14951,
  //             "position": "gdsgsgdgsdgdgsgdg",
  //             "employer": "gdsgsgdg",
  //             "start_date": "2023-02-04",
  //             "due_date": "2023-02-10",
  //             "description": "dasdsa dsad d adasdada da dad adadadad"
  //         }
  //     ],
  //     "educations": [
  //         {
  //             "id": 15452,
  //             "institute": "dsdasfsfagsgasgag",
  //             "degree": "მაგისტრი",
  //             "due_date": "2023-02-13",
  //             "description": "dsad dad ada jkjlkjlkjlakjsldkjlkjl"
  //         }
  //     ],
  //     "image": "/storage/images/9Fgf7BmxBpFh4LUsQHkibJZkZc5JJu0Q35m4gE8m.jpg"
  // }

  const {
    name,
    surname,
    email,

    phone_number,
    experiences,
    educations,
    image,
    about_me,
  } = responseData;
  console.log(name);
  return (
    <Wrapper>
      {responseData ? (
        <div className="resume">
          <section className={"section-about b-bottom"}>
            <div className="about-text-ct">
              <div className="name-wrap">
                <h2 className="name">
                  {name} {surname}
                </h2>
              </div>
              <div className="contact-info-ct">
                <div className="email-ct">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/email-icon.png"}
                    alt="profile"
                    className={`email-icon`}
                  />
                  <p className="email">{email}</p>
                </div>

                <div className="phone-n-ct">
                  <img
                    src={process.env.PUBLIC_URL + "/assets/phone-icon.png"}
                    alt="profile"
                    className={`phone-icon`}
                  />
                  <p className="tel">{phone_number}</p>
                </div>
              </div>
              <div className="about-textbox">
                <h2 className="resume-section-title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>
                <p className="resume-text">{about_me}</p>
              </div>
            </div>
            <div className="img-ct">
              <img
                src={`https://resume.redberryinternship.ge${image}`}
                alt="profile"
              />
              s
            </div>
          </section>

          {experiences.length > 0 &&
            experiences.map((el, index) => {
              return (
                <ResumeSection
                  position={el.position}
                  employer={el.employer}
                  workStart={el.start_date}
                  workEnd={el.due_date}
                  text={el.description}
                  key={el.id}
                  id={index + 1}
                  data={experiences}
                  heading={"ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ"}
                />
              );
            })}
          {educations.length > 0 &&
            educations.map((el, index) => {
              return (
                <ResumeSection
                  position={el.degree}
                  employer={el.institute}
                  workStart=""
                  workEnd={el.due_date}
                  text={el.description}
                  key={el.id}
                  id={index + 1}
                  data={educations}
                  heading={"ᲒᲐᲜᲐᲗᲚᲔᲑᲐ"}
                />
              );
            })}

          <img
            src={process.env.PUBLIC_URL + "/assets/resume-logo.png"}
            alt="profile"
            className="resume-logo"
          />
        </div>
      ) : (
        <div>
          <h2>Something Went Wrong Try Again</h2>
        </div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  .resume {
    width: 82.2rem;
    height: 108rem;
    max-height: 108rem;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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

export default ResumeComponent;
