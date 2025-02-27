import Footer from "@/app/products/components/Footer";
import Header from "@/app/products/components/Header";
import React from "react";

export default function ProductLayout({ children }) {
  return (
    <div>
      <Header />
      <main style={{ minHeight: "80vh", padding: "20px" }}>{children}</main>
      <Footer />
    </div>
  );
}
