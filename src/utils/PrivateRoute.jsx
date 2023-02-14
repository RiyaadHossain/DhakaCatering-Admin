import React from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { useUserPersistencyQuery } from "../features/auth/authAPI";
import { getToken } from "./token";

const PrivateRoute = ({ children }) => {

  const token = getToken();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  if (!token) navigate("/signin");
  const { isFetching, data } = useUserPersistencyQuery(token);
  const email = data?.data?.email;
  const role = data?.data?.role;

  if (isFetching) {
    return <Loading />;
  }

  if (!email && !role?.inclueds("Admin")) {
    return <Navigate to="/signin" state={{ path: pathname }} />;
  }

  return children;
};

export default PrivateRoute;
