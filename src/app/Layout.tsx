import Footer from "@/features/Footer";
import Navbar from "@/features/Navbar";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <Outlet />

      <Footer />
    </div>
  );
}
export default Layout;
