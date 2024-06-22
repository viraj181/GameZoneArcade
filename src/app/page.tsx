import Navbar from "@/component/Navbar";
import Image from "next/image";
import FirstPage from "./firstpage/page";
import SecondPage from "./secondpage/page";
import ThirdPage from "./thirdpage/page";
import Roadmap from "./roadmap/page";
import WhyArcade from "./whyarcade/page";
import Team from "./team/page";
import Patners from "./partners/page";
import Partners from "./partners/page";
import Offer from "./offer/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">

      <FirstPage />
      <SecondPage />
      <ThirdPage />
      {/* <Roadmap /> */}
      <WhyArcade />
      <Team />
      <Partners />
      <Offer />
      </div>
      <Footer />
    </>
  );
}
