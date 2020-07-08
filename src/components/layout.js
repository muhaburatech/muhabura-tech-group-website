import React from "react";
import GlobalStyles from "../styles/global";

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  );
};

export default Layout;
