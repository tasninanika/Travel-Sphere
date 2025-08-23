import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import { FirebaseAuthContext } from "../provider/FirebaseAuthContext";
import Spinner from "../components/Spinner";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = use(FirebaseAuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate state={location?.pathname} to="/signin" />;
  }

  return children;
};

export default PrivateRoutes;
