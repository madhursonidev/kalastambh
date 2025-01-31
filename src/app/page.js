import { AboutExhibitionSection } from 'src/components/about-exhibition-section/AboutExhibitionSection';
import { BlogNewsSection } from 'src/components/blog-news-section/BlogNewsSection';
import { ContactUsSection } from 'src/components/contact-us-section/ContactUsSection';
import { EventHighlightsSection } from 'src/components/event-hightlights/EventHighlightsSection';
import { EventRegistrationSection } from 'src/components/event-registration-section/EventRegistrationSection';
import { FAQsSection } from 'src/components/faqs-section/FAQsSection';
import { FooterSection } from 'src/components/footer-section/FooterSection';
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
      <FAQsSection />
      <BlogNewsSection />
      <ContactUsSection />
      <FooterSection />
      {/* Add other sections of your website here */}
    </main>
  );
}
