import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../pages/Home";
import GeneralInfo from "../pages/GeneralInfo";
import ResumePage from "../pages/ResumePage";
const RoutesComponent = () => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" exact={true} element={<Home />} />
      <Route path="/general" element={<GeneralInfo />} />

      <Route path="/resume" element={<ResumePage />} />
    </Routes>
  );
};
export default RoutesComponent;
