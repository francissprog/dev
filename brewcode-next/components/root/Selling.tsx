import { RefProps } from "@/types/type";
import React, { FC } from "react";
import { SellingContentProps } from "@/types/type";
import { sellingContent } from "@/content/rootContent";
import Image from "next/image";
import Link from "next/link";
const Selling: FC<RefProps> = ({ section }) => {
  return (
    <section className="h-screen py-10" ref={section}>
      {/* header division */}
      <div className="text-center py-5 flex flex-col gap-5 max-md:gap-3 max-sm:gap-1">
        <span className="text-5xl font-extrabold max-lg:text-3xl max-md:text-xl max-sm:text-lg">
          Best Selling Coffee
        </span>
      </div>

      <main className="flex flex-row justify-between px-20 items-center h-[80vh] gap-20 max-xl:gap-6 max-lg:flex-col ">
        {sellingContent.map((selling: SellingContentProps) => {
          // decontruct same as usual
          const { id, title, description, image, price } = selling;
          return (
            <div
              className="flex flex-col justify-between bg-white h-[300px] w-[500px] rounded-3xl p-4 items-start "
              key={id}
            >
              <div className="flex flex-row items-center gap-3">
                <Image src={image} alt="asdfasdf" width={150} height={150} className="aspect-square"/>
                <span className="font-bold text-xl">{title}</span>
              </div>
              <div className="text-sm text-slateGray max-lg:text-sm max-sm:text-xs">{description}</div>
              <div className="flex flex-row items-center gap-4">
                <Link
                  href={"/auth"}
                  className="bg-obsidian rounded-2xl text-softMist px-4 py-2"
                >
                  Buy {title}
                </Link>
                <span className="underline">{`$${price}`}</span>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
};

export default Selling;
