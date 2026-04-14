import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LogoTicker from "@/components/LogoTicker";
import CustomerReviews from "@/components/CustomerReviews";
import FluidWave from "@/components/FluidWave";
import SocialProof from "@/components/SocialProof";
import ProblemSolution from "@/components/ProblemSolution";
import Competencies from "@/components/Competencies";
import KSSDetailSection from "@/components/KSSDetailSection";
import FluidManagementSection from "@/components/FluidManagementSection";
import CompanyValuesSection from "@/components/CompanyValuesSection";
import Testimonials from "@/components/Testimonials";
import ProcessSection from "@/components/ProcessSection";
import TimelineSection from "@/components/TimelineSection";
import AboutSection from "@/components/AboutSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

/* Color tokens for wave dividers */
const SURFACE = "hsl(220 14% 97%)";
const BG = "hsl(0 0% 100%)";
const DARK = "hsl(220 15% 22%)";

const Index = () => (
  <div className="min-h-screen">
    <Navbar />
    <HeroSection />
    <SocialProof />
    <LogoTicker />
    <ProblemSolution />
    <Competencies />
    <KSSDetailSection />
    {/* KSSDetail (background) → FluidManagement (dark) */}
    <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
    <FluidManagementSection />
    {/* FluidManagement (dark) → CompanyValues (surface) */}
    <FluidWave fromColor={DARK} toColor={SURFACE} size="md" />
    <CompanyValuesSection />
    <Testimonials />
    {/* Testimonials (background) → ProcessSection (dark) */}
    <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
    <ProcessSection />
    {/* ProcessSection (dark) → Timeline (background) */}
    <FluidWave fromColor={DARK} toColor={BG} size="md" />
    <TimelineSection />
    {/* Timeline (background) → CustomerReviews (dark) */}
    <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
    <CustomerReviews />
    {/* CustomerReviews (dark) → About (background) */}
    <FluidWave fromColor={DARK} toColor={BG} size="md" />
    <AboutSection />
    <CtaSection />
    {/* CtaSection (background) → Footer (dark) */}
    <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
    <Footer />
  </div>
);

export default Index;
