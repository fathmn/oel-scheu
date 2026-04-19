import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InquiryCartProvider } from "@/context/InquiryCartContext";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

import Leitbild from "./pages/unternehmen/Leitbild";
import Historie from "./pages/unternehmen/Historie";
import Team from "./pages/unternehmen/Team";
import Stellenangebote from "./pages/unternehmen/Stellenangebote";
import StandortDeutschland from "./pages/unternehmen/StandortDeutschland";
import StandortSchweiz from "./pages/unternehmen/StandortSchweiz";

import FluidManagement from "./pages/produkte/FluidManagement";
import Kuehlschmierstoffe from "./pages/produkte/Kuehlschmierstoffe";
import Filtrationsprogramm from "./pages/produkte/Filtrationsprogramm";
import Reiniger from "./pages/produkte/Reiniger";
import Korrosionsschutz from "./pages/produkte/Korrosionsschutz";
import Waermebehandlung from "./pages/produkte/Waermebehandlung";
import GleitBettbahnoele from "./pages/produkte/GleitBettbahnoele";
import Schmierstoffe from "./pages/produkte/Schmierstoffe";
import Hydraulikoele from "./pages/produkte/Hydraulikoele";
import Fette from "./pages/produkte/Fette";
import Automotive from "./pages/produkte/Automotive";
import Hautschutz from "./pages/produkte/Hautschutz";

import FluidManagementService from "./pages/service/FluidManagementService";
import KSSManagement from "./pages/service/KSSManagement";
import KSSProbleme from "./pages/service/KSSProbleme";

import Zertifikate from "./pages/Zertifikate";
import Kontakt from "./pages/Kontakt";
import Shop from "./pages/Shop";
import Anfrage from "./pages/Anfrage";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <InquiryCartProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Unternehmen */}
            <Route path="/unternehmen/leitbild" element={<Leitbild />} />
            <Route path="/unternehmen/historie" element={<Historie />} />
            <Route path="/unternehmen/team" element={<Team />} />
            <Route path="/unternehmen/stellenangebote" element={<Stellenangebote />} />
            <Route path="/unternehmen/standort-deutschland" element={<StandortDeutschland />} />
            <Route path="/unternehmen/standort-schweiz" element={<StandortSchweiz />} />

            {/* Produkte */}
            <Route path="/produkte/fluid-management" element={<FluidManagement />} />
            <Route path="/produkte/kuehlschmierstoffe" element={<Kuehlschmierstoffe />} />
            <Route path="/produkte/filtrationsprogramm" element={<Filtrationsprogramm />} />
            <Route path="/produkte/reiniger" element={<Reiniger />} />
            <Route path="/produkte/korrosionsschutz" element={<Korrosionsschutz />} />
            <Route path="/produkte/waermebehandlung" element={<Waermebehandlung />} />
            <Route path="/produkte/gleit-bettbahnoele" element={<GleitBettbahnoele />} />
            <Route path="/produkte/schmierstoffe" element={<Schmierstoffe />} />
            <Route path="/produkte/hydraulikoele" element={<Hydraulikoele />} />
            <Route path="/produkte/fette" element={<Fette />} />
            <Route path="/produkte/automotive" element={<Automotive />} />
            <Route path="/produkte/hautschutz" element={<Hautschutz />} />

            {/* Service */}
            <Route path="/service/fluid-management" element={<FluidManagementService />} />
            <Route path="/service/kss-management" element={<KSSManagement />} />
            <Route path="/service/kss-probleme" element={<KSSProbleme />} />

            {/* Sonstige */}
            <Route path="/zertifikate" element={<Zertifikate />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/anfrage" element={<Anfrage />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </InquiryCartProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
