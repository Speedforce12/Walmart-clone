import React from "react";
import Header from "./Header";
import AddressBar from "./AddressBar";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <AddressBar />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
