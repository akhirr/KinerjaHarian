import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import AktivitasHarian from "./pages/aktivitas";
import Login from "./pages/login"; // login Anda yg sudah ada

export default function App() {
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={
          <DashboardLayout title="Dashboard">
            <Dashboard />
          </DashboardLayout>
        }
      />

      <Route
        path="/aktivitas"
        element={
          <DashboardLayout title="Aktivitas Harian">
            <AktivitasHarian />
          </DashboardLayout>
        }
      />

      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}
