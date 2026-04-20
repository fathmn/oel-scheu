import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FluidWave from "./FluidWave";

const BG = "hsl(0 0% 100%)";
const DARK = "hsl(220 15% 22%)";

const PageLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-20">{children}</main>
      <FluidWave fromColor={BG} toColor={DARK} accent={false} size="md" />
      <Footer />
    </div>
  );
};

export default PageLayout;
