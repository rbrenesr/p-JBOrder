import { Navigate, Route, Routes } from "react-router-dom";
import { CategoriesView } from "../modules/products";
import { Login, ResetPassword, SendPasswordReset } from "../modules/auth";

export const AppRouter = () => {
  const status = "not-authenticated";

  return (
    <Routes>
      {/* {status === "authenticated" ? (
        <Route path="/*" element={<CategoriesView />} />
      ) : (
        <Route path="/auth/*" element={<ResetPassword />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} /> */}      

      <Route path="login" element={<Login />} />
      <Route path="loginR" element={<ResetPassword />} />
      <Route path="loginS" element={<SendPasswordReset />} />

    </Routes>
  );
};
