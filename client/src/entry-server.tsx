/**
 * Evidence Cartography server-render entry used only during the static production build.
 */
import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(<App />);
}
