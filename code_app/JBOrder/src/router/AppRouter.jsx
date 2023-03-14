import { Navigate, Route, Routes } from "react-router-dom";



import { Login, ResetPassword, SendPasswordReset } from "../modules/auth";
import { Main } from "../modules/main";
import {  ProductsView } from "../modules/products";


export const AppRouter = () => {
  const status = "-authenticated";

  return (
    <Routes>
      {/* {status === "authenticated" ? (
        <Route path="/*" element={<Main />} />
      ) : (
        <Route path="/auth/*" element={<Login />} />
      )} */}

      <Route path="/*" element={<Navigate to="authL" />} />      
         
      <Route path="/authL" element={<Login />} /> 
      <Route path="/authR" element={<ResetPassword />} />
      <Route path="/authS" element={<SendPasswordReset />} />
      <Route path="/mainM" element={<Main />} />  
      <Route path="/productView" element={<ProductsView />} />  

    </Routes>
  );
};
