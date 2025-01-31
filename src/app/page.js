import { AboutExhibitionSection } from 'src/components/about-exhibition-section/AboutExhibitionSection';
import { EventHighlightsSection } from 'src/components/event-hightlights/EventHighlightsSection';
import { GallerySection } from 'src/components/gallery-section/GallerySection';
import { HeroSection } from 'src/components/hero-section/HeroSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventHighlightsSection />
      <AboutExhibitionSection />
      <GallerySection />
      {/* Add other sections of your website here */}
    </main>
  );
}
