import React, { FC, RefObject } from "react";
import Image from "next/image";
import coffeeImage from "@/public/images/coffee.png";
import Navbar from "./Navbar";
import Link from "next/link";
import { SectionKey } from "@/types/type";

interface LandingProps {
  section: RefObject<HTMLDivElement | null>;
  scrollTo: (key: SectionKey) => void
}
const Landing: FC<LandingProps> = ({ section, scrollTo }) => {
  return (
    <main className="h-screen bg-softMist text-obsidian" ref={section}>
      <Navbar scroll={scrollTo}/>
      <section className="flex justify-between items-center h-[75vh] px-20 max-md:justify-center pr-20 max-lg:pr-0">
        <article className="flex flex-col gap-4">
          <section className="flex flex-col text-[90px] font-bold gap-0 max-lg:text-[80px] max-md:text-[60px]">
            <span>Brewcode's</span>
            <span>Delicious</span>
            <span>Coffee</span>
          </section>
          <section className="flex flex-col gap-6">
            <span className="text-slateGray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </span>
            <section className="flex flex-row gap-5">
              <Link
                href={"/auth"}
                className="bg-obsidian text-white py-4 rounded-2xl px-3"
              >
                Get Some Coffee
              </Link>
              <button className="underline decoration-2 decoration-offset-2">
                BEST SELLING COFFEE
              </button>
            </section>
          </section>
        </article>
        <div className="block max-md:hidden">
          <Image
            src={coffeeImage}
            alt="coffeeImage"
            className="h-[600px] max-lg:h-[500px]"
          />
        </div>
      </section>  
    </main>
  );
};

export default Landing;
