import Image from "next/image";
import Landing from "./components/Landing";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

export default function Home() {
  return (
   <>
    <Landing/>
    <About/>
    <Portfolio/>
    <Contacts/>
   </>
  );
}
