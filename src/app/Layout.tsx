import Footer from "@/features/Footer";
import Navbar from "@/features/Navbar";
import type React from "react";
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
export default Layout;
