import React from "react";

export default function Footer() {
  return (
    <footer style={{ background: "#333", color: "white", textAlign: "center", padding: "10px", marginTop: "20px" }}>
      <p>&copy; {new Date().getFullYear()} My E-Commerce Store</p>
    </footer>
  );
}
