import { aboutContent } from "@/content/rootContent";
import { AboutContentProps, RefProps } from "@/types/type";
import Link from "next/link";
import React, { FC } from "react";

const About: FC<RefProps> = ({ section }) => {
  return (
    <section className="h-[80vh] bg-softGray py-10 " ref={section}>
      {/* header division */}
      <div className="text-center  flex flex-col gap-5 max-md:gap-3 max-sm:gap-1">
        <span className="text-5xl font-extrabold max-lg:text-3xl max-md:text-xl max-sm:text-lg">
          Explore our Brewcode
        </span>
        <p className="text-md text-slateGray max-lg:text-sm max-md:text-xs max-sm:px-1">
          Discover Brewcode – creating simple, effective solutions to make your{" "}
          <br />
          life easier and more efficient.
        </p>
      </div>

      <section className="flex flex-row justify-between px-20 py-10 items-center h-[60vh] gap-20 max-xl:gap-6 max-lg:flex-col ">
        {aboutContent.map((about: AboutContentProps) => {
          // deconstruct here
          const {
            title,
            description,
            id, 
            iconName: Icon,
            buttonContent,
          } = about;
          return (
            <div
              className="bg-white h-[300px] w-[500px] flex flex-col items-center justify-between rounded-3xl p-4 max-md:h-[200px] max-md:w-[400px] max-lg:p-3 max-md:p-2 max-sm:h-[150px] max-sm:w-auto "
              key={id}
            >
              <div className="flex flex-col gap-2 items-start justify-start w-full">
                <span className="font-bold text-xl max-lg:text-lg max-md:text-md max-sm:text-sm">
                  {title}
                </span> 
                <p className="text-sm text-slateGray max-lg:text-sm max-sm:text-xs">
                  {description}
                </p>
              </div>
              <Icon className="text-slateGray flex justify-center items-center w-[90px] h-[90px] max-lg:w-[60px] max-lg:h-[60px] max-md:w-[40px] max-md:h-[40px] max-sm:hidden" />
              <Link
                href={"/auth"}
                className="w-fit bg-obsidian text-softMist font-bold px-7 py-2 rounded-2xl max-lg:hidden"
              >
                {buttonContent}
              </Link>
            </div>
          );
        })}
      </section>
    </section>
  );
};

export default About;
