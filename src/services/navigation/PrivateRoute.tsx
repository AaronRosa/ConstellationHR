import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import React, { PropsWithChildren } from "react";
import { history } from "./NavigationHelpers";
import { selectCurrentUser } from "../../redux/slices/userSlice";

export type ProtectedRouteProps = {
  authenticationPath: string;
  outlet: JSX.Element;
};

export default function ProtectedRoute({
  authenticationPath,
  outlet,
}: ProtectedRouteProps) {
  const user = useSelector(selectCurrentUser);

  if (user) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: authenticationPath }} />;
  }
}
