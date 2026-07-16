import { createFileRoute, redirect } from "@tanstack/react-router";

// /tarifs a été supprimée. 301 vers /devis (préserve le SEO existant).
export const Route = createFileRoute("/tarifs")({
  beforeLoad: () => {
    throw redirect({ to: "/devis", statusCode: 301 });
  },
  component: () => null,
});