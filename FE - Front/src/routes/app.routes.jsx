import { Routes, Route } from "react-router-dom";

import { Details } from "../pages/Details";


export function AppRoutes(){
  return(
    <Routes>
      <Route path="details/:id" element={<Details/>} />
    </Routes>
  )
}