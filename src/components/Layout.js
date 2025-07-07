import React from "react";
import Header from "./Headr";
import "./Layout.css"; // Assuming you have a Layout.css for layout styles


const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header/>
      <main className="main-content">
        {children}
      </main>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
