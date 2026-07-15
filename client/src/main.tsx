/**
 * Evidence Cartography client entry.
 * Hydration preserves the prerendered executive brief and activates interactions without replacing initial content.
 */
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
