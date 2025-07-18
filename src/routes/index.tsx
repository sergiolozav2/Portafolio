import { createFileRoute, Navigate } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage ?? "en";
  return <Navigate to={`/$language`} params={{ language: currentLanguage }} />;
}
