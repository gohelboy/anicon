import { IconsShowcase } from "./_components/icons-showcase";
import { LandingFeatures } from "./_components/landing-features";
import { LandingFooter } from "./_components/landing-footer";
import { LandingHero } from "./_components/landing-hero";
import { LandingInstall } from "./_components/landing-install";
import { LandingNav } from "./_components/landing-nav";

export default function Home() {
  return (
    <main className="min-h-screen">
      <LandingNav />
      <LandingHero />
      <IconsShowcase />
      <LandingInstall />
      <LandingFeatures />
      <LandingFooter />
    </main>
  );
}
