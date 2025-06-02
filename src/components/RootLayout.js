import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

export default RootLayout;