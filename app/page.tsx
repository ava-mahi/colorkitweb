import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { PopularPalettes } from "@/components/PopularPalettes";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <PopularPalettes />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
