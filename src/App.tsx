
import { About } from "./components/sections/About";
import { Hero } from "./components/sections/Hero";
import { Contact } from "./components/sections/Contact";
import { Projects } from "./components/sections/Projects";
import { Navbar } from "./components/sections/Navbar";

export default function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
