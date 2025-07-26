"use client";
import React, { FC, useState } from "react";
import { CodeXml, AlignRight } from "lucide-react";
import Link from "next/link";
import { NavbarProps } from "@/types/type";
import { navAuthAlert, navHomeAlert } from "@/utils/alertUtils";
import { useRouter } from "next/compat/router";
const Navbar: FC<NavbarProps> = ({ scroll }) => {
  const router = useRouter(); // router instance
  console.log(router?.pathname);
  return (
    <nav className="flex flex-row items-center justify-between px-20 py-10 max-md:px-10">
      {/* logo */}
      <Link href={"/"}>
        <CodeXml />
      </Link>
      {/* Navigations */}
      <section className="flex flex-row gap-20 max-md:hidden">
        <button
          className="outline-none hover:underline"
          onClick={() => scroll("home")}
        >
          Home
        </button>

        <button
          className="outline-none hover:underline"
          onClick={() => scroll("about")}
        >
          About
        </button>
        <button
          className="outline-none hover:underline"
          onClick={() => scroll("selling")}
        >
          Best Selling
        </button>
      </section>

      {/* responsive navigations */}
      <section className=" flex-row gap-20 hidden max-md:flex">
        <button
          onClick={() => {
            router?.basePath === "/"
              ? navHomeAlert("Where are you going?", "Home")
              : navAuthAlert("Where are you going?", "Auth");
          }}
        >
          <AlignRight />
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
