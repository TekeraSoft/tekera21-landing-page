import React from "react";
import Footer from "./Footer";

interface MainLayoutProps {
  children: React.ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full h-full overflow-hidden  bg-black">
      <main className="w-full flex flex-col  ">{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
