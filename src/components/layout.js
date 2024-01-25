import React from "react";
import Header from "./header";
import Footer from "./footer";
import "../sass/styles.scss";

const Layout = ({ pageClass, children }) => {
  return (
    <div className={`site-wrapper ${pageClass}`}>
      <Header />
      <main className="site-content">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
