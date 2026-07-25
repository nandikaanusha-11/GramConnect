import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RegisterGrievances from "./pages/RegisterGrievances";
import ViewGrievances from "./pages/ViewGrievances";
import AdminLogin from "./pages/AdminLogin";
import GrievanceDetails from "./pages/GrievanceDetails";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AdminSignUp from "./pages/AdminSignUp";
import UpdateStatus from "./pages/UpdateStatus";

function App() {
  return (
    <>
    <Navbar />
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/register" element={<RegisterGrievances />} />

      <Route path="/grievances" element={<ViewGrievances />} />

      <Route path="/admin-login" element={<AdminLogin />} />

      <Route path="/grievance/:id" element={<GrievanceDetails />} />

      
      <Route path="/admin-signup" element={<AdminSignUp />} />

      <Route path="/update-status/:id" element={<UpdateStatus />}
/>
      
      <Route path="*" element={<NotFound />} />

    </Routes>
    <Footer />
    </>
  );
}

export default App;