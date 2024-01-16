import React, { ReactNode } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

function Layout(children: any) {
  return (
    <div className="w-full max-h-screen">
      <Navbar />
      <Footer />
    </div>
  );
}

export default Layout;
