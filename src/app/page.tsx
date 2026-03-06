import { SkillsSection } from '@/components/sections/skills';
import { FeaturedProjectsSection } from '@/components/sections/featured-projects';
import { FinalCtaSection } from '@/components/sections/final-cta';
import { HeroSection } from '@/components/sections/hero';
import { HighlightsSection } from '@/components/sections/highlights';

export default function Home() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <SkillsSection />
      <FeaturedProjectsSection />
      <FinalCtaSection />
    </>
  );
}
