import { Navigate } from "react-router-dom";

const Landing = () => {
  // Entry point should always go to the non-3D experience.
  return <Navigate to="/home" replace />;
};

export default Landing;
