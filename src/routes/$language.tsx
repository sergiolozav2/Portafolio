import { createFileRoute, Navigate, useParams } from "@tanstack/react-router";
import App from "../App";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/$language")({
  component: RouteComponent,
});

function RouteComponent() {
  const params = useParams({ from: "/$language" });
  const { i18n } = useTranslation();

  const availableLanguages = Object.keys(i18n.options.resources || {});
  if (params.language && !availableLanguages.includes(params.language)) {
    const fallback = i18n.resolvedLanguage ?? "en";
    return <Navigate to={`/$language`} params={{ language: fallback }} />;
  }
  return <App />;
}
