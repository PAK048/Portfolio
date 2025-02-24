"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import for current route

export default function Navbar() {
  const pathname = usePathname(); // Get current route
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setSelected(pathname); // Update selected state based on the current route
  }, [pathname]);

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "About", url: "/about" },
    { name: "Projects", url: "/projects" },
    { name: "Contact", url: "#footer" }, // Corrected route
  ];

  return (
    <nav className="sticky top-1 z-10 flex items-center justify-between mr-2 ml-2 mt-2 px-8 py-4 bg-[#075056]">
      <Link
        href="/"
        className="text-white text-l sm:text-2xl font-bold mr-4 hover:text-[#4ADE80] transition-colors"
      >
        SEUN Dev&apos;s.
      </Link>

      <ul className="flex items-center gap-4 sm:gap-16">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              onClick={() => setSelected(item.url)}
              href={item.url}
              className={`${
                item.url === selected ? "text-[#4ADE80]" : "text-white"
              } hover:text-[#4ADE80] transition-colors`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
