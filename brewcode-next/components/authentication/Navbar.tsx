"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { AlignRight, CodeXml } from "lucide-react";
const Navbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between px-20 py-10 max-md:px-10">
      {/* logo */}
      <Link href={"/"}>
        <CodeXml />
      </Link>
      {/* Navigations */}
      <section className="flex flex-row gap-20 max-md:hidden"></section>
    </nav>
  );
};

export default Navbar;
