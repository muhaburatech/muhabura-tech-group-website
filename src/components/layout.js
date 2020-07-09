import React from "react";
import GlobalStyles from "../styles/global";
import SEO from "./seo";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <SEO />
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
