// import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";

// import { SparklesPreview } from "@/components/SparklesText";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { Approach } from "@/components/Approach";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Footer from "@/components/Footer";
import { TailwindGrid } from "@/components/TailwindGrid";
import { TypewriterEffectSmoothDemo } from "@/components/TypewriterDemo";

export default function Home() {
  const navItems = [
    {
      name: "About",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Approach",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <main className="flex flex-col relative bg-black-100">
      <FloatingNav navItems={navItems} />
      <Hero />
      <TailwindGrid />
      <Approach />
      <Projects />
      <Footer />
    </main>
  );
}
