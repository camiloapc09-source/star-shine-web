import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Ecosystem } from "@/components/Ecosystem";
import { Hero } from "@/components/Hero";
import { Lines } from "@/components/Lines";
import { Marquee } from "@/components/Marquee";
import { Portfolio } from "@/components/Portfolio";
import { Process } from "@/components/Process";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Testimonials } from "@/components/Testimonials";
import { visible } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Lines />
      {visible.stats && <Stats />}
      <Services />
      <Process />
      <Portfolio />
      <About />
      {visible.testimonials && <Testimonials />}
      <Ecosystem />
      <Contact />
    </>
  );
}
