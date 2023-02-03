import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import GeneralInfo from "../pages/GeneralInfo";
import Experiences from "../pages/Experiences";
import Education from "../pages/Education";
const RoutesComponent = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/general" element={<GeneralInfo />} />
      <Route path="/experience" element={<Experiences />} />
      <Route path="/education" element={<Education />} />
    </Routes>
  );
};
export default RoutesComponent;
