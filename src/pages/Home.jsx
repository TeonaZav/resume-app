import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  return (
    <Wrapper>
      <div className="home">
        <div className="hompage-header">
          <img
            src={process.env.PUBLIC_URL + "/assets/LOGO.png"}
            className="logo"
            alt="company logo"
          />
        </div>
        <NavLink className="btn btn--home" to="/general">
          <img
            src={process.env.PUBLIC_URL + "/assets/home-btn-text.png"}
            alt=""
          />
        </NavLink>
        <img
          src={process.env.PUBLIC_URL + "/assets/stamp-logo.png"}
          className="stamp-logo"
          alt="company stamp logo"
        />
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  .home {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-image: url(${require(`../assets/images/home-bg-img.png`)});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    position: relative;
    .hompage-header {
      width: 92.7%;
      height: 8.9rem;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      border-bottom: 1px solid var(--off-black);
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      .logo {
        width: 23.6rem;
        height: 3.8rem;
      }
    }
    .btn--home:link,
    .btn--home:visited {
      background-color: var(--off-black);

      color: #ffffff;
      padding: 1.8rem 12.6rem;
      border-radius: 0.8rem;
      font-size: 2rem;
      line-height: 2.4rem;
      z-index: 999;
    }
    .stamp-logo {
      position: absolute;
      left: 56%;
      top: 43.4%;
      width: 29.9rem;
      height: 29.9rem;
      z-index: -1;
    }
  }
`;
export default Home;
