import React from 'react';
import Navbar from '@/features/Navbar';
import Footer from '@/features/Footer';
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