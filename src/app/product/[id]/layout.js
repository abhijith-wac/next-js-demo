import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function ProductLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}
