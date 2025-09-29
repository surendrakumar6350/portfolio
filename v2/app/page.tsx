import { SiteFooter, SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Experience } from "@/components/sections/experience";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";
import { ScrollToTop } from "@/components/animations";

export default function Home() {
  return (
    <div>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <SiteFooter />
      <ScrollToTop />
    </div>
  );
}
