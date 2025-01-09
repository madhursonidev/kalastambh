import { EventHighlightsSection } from "src/components/event-hightlights/EventHighlightsSection";
import { HeroSection } from "src/components/hero-section/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventHighlightsSection />
      {/* Add other sections of your website here */}
    </main>
  );
}
