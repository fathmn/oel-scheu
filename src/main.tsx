import "@fontsource/inter/latin-400.css";
import "@fontsource/inter/latin-500.css";
import "@fontsource/inter/latin-600.css";
import "@fontsource/inter/latin-700.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-600.css";
import "@fontsource/space-grotesk/latin-700.css";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import heroBg from "@/assets/optimized/hero-bg.webp";
import logo from "@/assets/optimized/logo.webp";

const preloadImage = (href: string, fetchPriority: "high" | "low") => {
  const existing = document.head.querySelector<HTMLLinkElement>(`link[rel="preload"][href="${href}"]`);

  if (existing) {
    return;
  }

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = "image";
  link.href = href;
  link.fetchPriority = fetchPriority;
  document.head.appendChild(link);
};

preloadImage(heroBg, "high");
preloadImage(logo, "high");

createRoot(document.getElementById("root")!).render(<App />);
