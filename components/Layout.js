import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
};
