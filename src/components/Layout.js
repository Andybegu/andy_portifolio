import React from "react";
import Header from "./Headr";
import "./Layout.css"; // Assuming you have a Layout.css for layout styles
import Home from "./Home";

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <Header/>
      <div>
      <main className="main-content">
        <Home/>
      </main>
      </div>
      {/* <Footer/> */}
    </div>
  );
};

export default Layout;
