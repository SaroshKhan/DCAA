/**
 * Evidence Cartography application shell.
 * A lean single-page entry keeps the executive brief fast and reliable.
 */
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <Home />
    </ErrorBoundary>
  );
}
