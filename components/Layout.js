import React from "react";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
    </main>
  );
};