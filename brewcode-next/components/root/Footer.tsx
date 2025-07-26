import { RefProps } from "@/types/type";
import React, { FC } from "react";

const Footer: FC<RefProps> = ({ section }) => {
  return (
    <footer ref={section} className="h-[40vh] bg-obsidian text-softMist">
      <main className="flex justify-between items-center"></main>
    </footer>
  );
};

export default Footer;
