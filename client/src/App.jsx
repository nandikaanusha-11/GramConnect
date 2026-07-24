import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import RegisterGrievances from "./pages/RegisterGrievances";
import ViewGrievances from "./pages/ViewGrievances";
import AdminLogin from "./pages/AdminLogin";
import GrievanceDetails from "./pages/GrievanceDetails";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/register" element={<RegisterGrievances />} />

      <Route path="/grievances" element={<ViewGrievances />} />

      <Route path="/admin" element={<AdminLogin />} />

      <Route path="/grievance/:id" element={<GrievanceDetails />} />

      <Route path="*" element={<NotFound />} />

    </Routes>
  );
}

export default App;