import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "./Components/AppLayout";
import Dashboard from "./Pages/Dashboard";
import Staffs from "./Pages/Staffs";
import PageNotFound from "./Pages/PageNotFound";
import DoctorsPage from "./Pages/DoctorsPage";
import ServicesPage from "./Pages/ServicesPage";
import OverLay from "./Components/OverLay";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="staff" element={<Staffs />} />
            <Route path="doctors" element={<DoctorsPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
