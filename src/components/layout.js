import React from "react";
import GlobalStyles from "../styles/global";
import SEO from "./seo";
import Header from "./header";
import Footer from "./footer";

const Layout = ({ pageTitle, page, children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        overflow: "hidden",
        display: "block",
        position: "relative",
        paddingBottom: "250px",
      }}
    >
      <SEO pageTitle={pageTitle} />
      <Header page={page} />
      <GlobalStyles />
      <main className="mx-auto">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
