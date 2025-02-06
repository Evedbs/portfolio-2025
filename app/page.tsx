import Hero from "@/components/Hero";
import { Projects } from "@/components/Projects";
export default function Home() {
  return (
    <main className="relative bg-black-100">
      <div>
        <Hero />
        <Projects />
      </div>
    </main>
  );
}
