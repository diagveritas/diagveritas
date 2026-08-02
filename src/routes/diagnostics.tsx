import { createFileRoute, Outlet } from "@tanstack/react-router";

// Route de layout pure : aucune balise head ici, sinon les pages enfants
// hériteraient d'un second <link rel="canonical"> (les links sont concaténés).
export const Route = createFileRoute("/diagnostics")({
  component: () => <Outlet />,
});
