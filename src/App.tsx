import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InquiryCartProvider } from "@/context/InquiryCartContext";

import Index from "./pages/Index";
const NotFound = lazy(() => import("./pages/NotFound"));

const Leitbild = lazy(() => import("./pages/unternehmen/Leitbild"));
const Historie = lazy(() => import("./pages/unternehmen/Historie"));
const Team = lazy(() => import("./pages/unternehmen/Team"));
const Stellenangebote = lazy(() => import("./pages/unternehmen/Stellenangebote"));
const StandortDeutschland = lazy(() => import("./pages/unternehmen/StandortDeutschland"));
const StandortSchweiz = lazy(() => import("./pages/unternehmen/StandortSchweiz"));

const FluidManagement = lazy(() => import("./pages/produkte/FluidManagement"));
const Kuehlschmierstoffe = lazy(() => import("./pages/produkte/Kuehlschmierstoffe"));
const Filtrationsprogramm = lazy(() => import("./pages/produkte/Filtrationsprogramm"));
const Reiniger = lazy(() => import("./pages/produkte/Reiniger"));
const Korrosionsschutz = lazy(() => import("./pages/produkte/Korrosionsschutz"));
const Waermebehandlung = lazy(() => import("./pages/produkte/Waermebehandlung"));
const GleitBettbahnoele = lazy(() => import("./pages/produkte/GleitBettbahnoele"));
const Schmierstoffe = lazy(() => import("./pages/produkte/Schmierstoffe"));
const Hydraulikoele = lazy(() => import("./pages/produkte/Hydraulikoele"));
const Fette = lazy(() => import("./pages/produkte/Fette"));
const Automotive = lazy(() => import("./pages/produkte/Automotive"));
const Hautschutz = lazy(() => import("./pages/produkte/Hautschutz"));

const FluidManagementService = lazy(() => import("./pages/service/FluidManagementService"));
const KSSManagement = lazy(() => import("./pages/service/KSSManagement"));
const KSSProbleme = lazy(() => import("./pages/service/KSSProbleme"));

const Zertifikate = lazy(() => import("./pages/Zertifikate"));
const Kontakt = lazy(() => import("./pages/Kontakt"));
const Shop = lazy(() => import("./pages/Shop"));
const Anfrage = lazy(() => import("./pages/Anfrage"));
const Impressum = lazy(() => import("./pages/Impressum"));
const Datenschutz = lazy(() => import("./pages/Datenschutz"));

const App = () => (
  <InquiryCartProvider>
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen bg-background" />}>
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
      </Suspense>
    </BrowserRouter>
  </InquiryCartProvider>
);

export default App;
