import { Navigate, Route, Routes } from "react-router-dom";
import { CategoriesView } from "../modules/products";
import { Login } from "../modules/auth";

export const AppRouter = () => {
  const status = "not-authenticated";

  return (
    <Routes>
      {status === "authenticated" ? (
        <Route path="/*" element={<CategoriesView />} />
      ) : (
        <Route path="/auth/*" element={<Login />} />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
