import { Suspense } from "react";
import Hero from "@/components/sections/Hero";
import AboutSummary from "@/components/sections/AboutSummary";
import AboutFull from "@/components/sections/AboutFull";
import Portfolio from "@/components/sections/Portfolio";
import Methodology from "@/components/sections/Methodology";
import Deliverables from "@/components/sections/Deliverables";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutSummary />

      <AboutFull />
      <Portfolio />
      <Methodology />
      <Deliverables />
      <Suspense fallback={<div className="py-20 text-center">Carregando...</div>}>
        <Contact />
      </Suspense>
    </div>
  );
}
