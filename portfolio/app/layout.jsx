import { Montserrat } from "next/font/google";
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "300", "500", "700", "900"] });

export const metadata = {
  title: "Portfolio || Franciss-prog",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} dark:bg-[#353839] bg-[#F8F8FF] text-[#353839] dark:text-[#F8F8FF] `}>{children}</body>
    </html>
  );
}
