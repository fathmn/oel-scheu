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
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const SURFACE = "hsl(220 14% 97%)";
const BG = "hsl(0 0% 100%)";
const DARK = "hsl(220 15% 22%)";

const Index = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <LogoTicker />
      <SocialProof />
      <ProblemSolution />
      <Competencies />
      <KSSDetailSection />
      <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
      <FluidManagementSection />
      <FluidWave fromColor={DARK} toColor={SURFACE} size="md" />
      <CompanyValuesSection />
      <Testimonials />
      <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
      <ProcessSection />
      <FluidWave fromColor={DARK} toColor={BG} size="md" />
      <TimelineSection />
      <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
      <CustomerReviews />
      <FluidWave fromColor={DARK} toColor={BG} size="md" />
      <AboutSection />
      <CtaSection />
      <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
      <Footer />
    </div>
  );
};

export default Index;
