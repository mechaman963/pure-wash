import Heading from "./components/Heading";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Image from "next/image";
import Services from "./components/Services";
import Offer from "./components/Offer";
import Subscriptions from "./components/Subscriptions";
import WhyPureWash from "./components/WhyPureWash";
import Plans from "./components/Plans";
import Footer from "./components/Footer";
import { JSX } from "react";

export default function Home(): JSX.Element {
  return (
    <div className="w-screen relative">
      {/* === NAVBAR === */}
      <Navbar />
      {/* === BACKDROP === */}
      <div className="hidden lg:block absolute top-0 right-0 w-[48.5%] h-[80dvh] z-0">
        <div className="relative w-full h-full">
          <Image src={"/vector.png"} fill alt="Decorative background vector" />
        </div>
      </div>
      {/* === LANDING === */}
      <Landing />
      {/* ================= */}
      <Heading title={"اتعرف على خدماتنا"} />
      {/* ================= */}
      {/* === SERVICES === */}
      <Services />
      {/* === OFFER === */}
      <Offer />
      {/* ================= */}
      <Heading title={"الاشتراكات"} />
      {/* ================= */}

      {/*=== SUBSCRIPTIONS === */}
      <Subscriptions />
      {/*=== WHY PURE WASH === */}
      <WhyPureWash />
      {/* ================= */}
      <Heading title={"خططنا المستقبلية"} />
      {/* ================= */}

      {/*=== PLANS === */}
      <Plans />
      {/*=== FOOTER === */}
      <Footer />
    </div>
  );
}
