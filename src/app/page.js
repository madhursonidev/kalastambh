import { AboutExhibitionSection } from 'src/components/about-exhibition-section/AboutExhibitionSection';
import { EventHighlightsSection } from 'src/components/event-hightlights/EventHighlightsSection';
import { EventRegistrationSection } from 'src/components/event-registration-section/EventRegistrationSection';
import { GallerySection } from 'src/components/gallery-section/GallerySection';
import { HeroSection } from 'src/components/hero-section/HeroSection';
import { SponsorsPartnersSection } from 'src/components/sponsors-partners-section/SponsorsPartnersSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <EventHighlightsSection />
      <AboutExhibitionSection />
      <GallerySection />
      <EventRegistrationSection />
      <SponsorsPartnersSection />
      {/* Add other sections of your website here */}
    </main>
  );
}
