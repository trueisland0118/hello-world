import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import QuickFacts from "./components/QuickFacts";
import Abilities from "./components/Abilities";
import Lore from "./components/Lore";
import Tips from "./components/Tips";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main id="top" className="relative overflow-hidden">
      <Navbar />
      <Hero />
      <QuickFacts />
      <Abilities />
      <Lore />
      <Tips />
      <Footer />
    </main>
  );
}
