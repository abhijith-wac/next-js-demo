import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ProductLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}
