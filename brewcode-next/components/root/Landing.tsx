import Link from "next/link";
import React, { FC } from "react";
import { LandingProps } from "@/types/type";
import Navbar from "./Navbar";
import Image from "next/image";
import coffeeImage from "@/public/images/coffee.png";

const Landing: FC<LandingProps> = ({ section, scroll }) => {
  return (
    <section className="h-screen" ref={section}>
      <Navbar scroll={scroll} />
      <main className="flex justify-between items-center h-[80vh] px-20 py-10 max-md:px-10">
        <div className="flex flex-col gap-5">
          <div
            className="flex flex-col
          items-start leading-[70px] text-[80px] font-bold max-md:text-6xl max-md:leading-[50px] max-sm:text-4xl"
          >
            <span>Let</span>
            <span>{"<Brewcode/>"}</span>
            <span>Brew!</span>
          </div>
          <div className="flex flex-col  text-xl max-md:text-lg max-sm:text-xs text-slateGray">
            <p>Great coffee. Creative vibes. Your next favorite spot awaits.</p>
          </div>
          <div className="flex flex-row gap-10 text-lg font-normal items-center max-md:text-sm max-sm:text-xs max-sm:flex-col max-sm:items-start max-sm:gap-4">
            <Link
              href={"/"}
              className="bg-obsidian text-softGray rounded-3xl p-2 max-md:py-2 px-4 max-md:px-2 max-sm:text-xs"
            >
              <span>Get yours Now!</span>
            </Link>
            <button onClick={() => scroll("collab")} className="underline">
              Let's Collab!
            </button>
          </div>
        </div>
        <div>
          <Image
            src={coffeeImage}
            alt="coffee"
            className="h-[400px] w-[600px] max-lg:hidden"
          />
        </div>
      </main>
    </section>
  );
};
export default Landing;
