import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header style={{ background: "#333", padding: "10px", color: "white", textAlign: "center" }}>
      <h1>My E-Commerce Store</h1>
      <nav>
        <Link href="/" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Home
        </Link>
        <Link href="/server-fetching" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>
          Products
        </Link>
      </nav>
    </header>
  );
}
