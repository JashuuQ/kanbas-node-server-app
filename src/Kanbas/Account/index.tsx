import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";
import AccountNavigation from "./Navigation";
import Profile from "./Profile";
import Signin from "./Signin";
import Signup from "./Signup";

export default function Account() {
  // check if the user is logged in
  const { currentUser } = useSelector((state: any) => state.accountReducer); 

  return (
    <div id="wd-account-screen">
      <table>
        <tr>
          <td valign="top">
            <AccountNavigation />
          </td>

          <td valign="top">
            <Routes>
              {/* Redirect based on login status */}
              <Route
                path="/"
                element={
                  currentUser ? (
                    <Navigate to="/Kanbas/Account/Profile" replace />
                  ) : (
                    <Navigate to="/Kanbas/Account/Signin" replace />
                  )
                }
              />

              {/* logged-in users can access the Profile page */}
              <Route
                path="/Profile"
                element={currentUser ? <Profile /> : <Navigate to="/Kanbas/Account/Signin" replace />}
              />

              {/* non-logged-in users can access Signin and Signup pages */}
              <Route
                path="/Signin"
                element={!currentUser ? <Signin /> : <Navigate to="/Kanbas/Account/Profile" replace />}
              />
              <Route
                path="/Signup"
                element={!currentUser ? <Signup /> : <Navigate to="/Kanbas/Account/Profile" replace />}
              />
              
            </Routes>
          </td>
        </tr>
      </table>
    </div>
  );
}
