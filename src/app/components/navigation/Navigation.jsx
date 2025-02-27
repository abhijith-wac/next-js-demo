"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navigation = () => {
  const pathName = usePathname();

  return (
    <nav className="mt-4 space-x-4">
      <Link
        href="/"
        className={`px-3 py-2 rounded ${
          pathName === "/" ? "bg-blue-500 text-white" : "text-blue-500"
        }`}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={`px-3 py-2 rounded ${
          pathName === "/about" ? "bg-blue-500 text-white" : "text-blue-500"
        }`}
      >
        About
      </Link>
      <Link
        href="/server-fetching"
        className={`px-3 py-2 rounded ${
          pathName === "/server-fetching"
            ? "bg-blue-500 text-white"
            : "text-blue-500"
        }`}
      >
        View Products
      </Link>
    </nav>
  );
};

export default Navigation;
