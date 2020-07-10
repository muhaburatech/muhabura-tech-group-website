import React from "react";
import GlobalStyles from "../styles/global";
import SEO from "./seo";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <SEO />
      <Header />
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
