import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ 
      background: "#333", 
      padding: "10px 20px",
      height: "80px", 
      color: "white", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "space-between"
    }}>
      <h1 style={{ margin: 0 }}>
        My E-Commerce Store
      </h1>

      <nav>
        <Link href="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/products" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Products
        </Link>
        <Link href="/sign-up" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Sign Up
        </Link>
        <Link href="/login" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Sign In
        </Link>
      </nav>
    </header>
  );
}
