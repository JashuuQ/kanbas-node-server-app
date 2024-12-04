import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function AccountRedirect() {
  const currentUser = useSelector((state: any) => state.accountReducer.currentUser);

  if (currentUser) {
    return <Navigate to="/Kanbas/Profile" replace />;
  }

  return <Navigate to="/Kanbas/Account/Signin" replace />;
}
