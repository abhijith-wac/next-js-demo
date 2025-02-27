import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
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
