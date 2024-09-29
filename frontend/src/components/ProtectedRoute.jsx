import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("isauthenticated", user);
  if (!user) {
    console.log("here!");
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
