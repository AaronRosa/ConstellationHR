import { Navigate, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { isUserSignedIn } from "../../redux/slices/userSlice";

export type ProtectedRouteProps = {
  outlet: JSX.Element;
};

export default function ProtectedRoute({ outlet }: ProtectedRouteProps) {
  const isAuthenticated = useSelector(isUserSignedIn);

  if (isAuthenticated) {
    return outlet;
  } else {
    return <Navigate to={{ pathname: "/login" }} />;
  }
}
