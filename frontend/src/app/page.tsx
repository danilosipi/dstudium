import { About } from "@/components/sections/about";
import { FeaturedProjects } from "@/components/sections/featured-projects";
import { FinalCta } from "@/components/sections/final-cta";
import { Hero } from "@/components/sections/hero";
import { HowWeWork } from "@/components/sections/how-we-work";
import { Pillars } from "@/components/sections/pillars";
import { Solutions } from "@/components/sections/solutions";
import { createPageMetadata, siteConfig } from "@/data/seo";

export const metadata = createPageMetadata({
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  path: "/",
});

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <FeaturedProjects />
      <Pillars />
      <About />
      <Solutions />
      <HowWeWork />
      <FinalCta />
    </main>
  );
}
