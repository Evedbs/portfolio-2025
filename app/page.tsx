import { AuroraBackgroundDemo } from "@/components/AuroraBackgroundDemo";
import { DirectionAwareHoverDemo } from "@/components/DirectionAwareHoverDemo";
import Hero from "@/components/Hero";
import { LayoutGridDemo } from "@/components/LayoutGridDemo";
import { Projects } from "@/components/Projects";
// import { SparklesPreview } from "@/components/SparklesText";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import { WavyBackgroundDemo } from "@/components/WavyBackgroundDemo";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
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
    <main className="relative bg-black-100">
      <div>
        <FloatingNav navItems={navItems} />
        <AuroraBackgroundDemo />
        <Hero />
        <LayoutGridDemo />
        <DirectionAwareHoverDemo />
        <Projects />
      </div>
    </main>
  );
}
