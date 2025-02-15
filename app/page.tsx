// import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";

// import { SparklesPreview } from "@/components/SparklesText";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { Approach } from "@/components/Approach";
import { IconHome, IconUser } from "@tabler/icons-react";
import Footer from "@/components/Footer";
import { TailwindGrid } from "@/components/TailwindGrid";
import { LanguageContextProvider } from "../contexts/language";
import { ThemeContextProvider } from "@/contexts/theme";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Approach",
      link: "#approach",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Projects",
      link: "#projects",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  return (
    <ThemeContextProvider>
      <main className="flex flex-col relative bg-black-100">
        <LanguageContextProvider>
          <FloatingNav navItems={navItems} />
          <Hero />
          <TailwindGrid />
          <Approach />
          <Projects />
          <Footer />
        </LanguageContextProvider>
      </main>
    </ThemeContextProvider>
  );
}
