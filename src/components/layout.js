import React from "react";
import GlobalStyles from "../styles/global";
import SEO from "./seo";
import Header from "./header";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <SEO pageTitle={pageTitle} />
      <Header />
      <GlobalStyles />
      <main className="mx-auto">{children}</main>
    </>
  );
};

export default Layout;
