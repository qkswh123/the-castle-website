import Hero from "@/components/Hero";
import About from "@/components/About";
import HomeCategories from "@/components/HomeCategories";
import HomeClosingCTA from "@/components/HomeClosingCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About compact />
      <HomeCategories />
      <HomeClosingCTA />
    </>
  );
}
