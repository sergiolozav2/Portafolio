import { TypeAnimationText } from "./Components/TypeAnimationText";
import { useTranslation } from "react-i18next";

export function WelcomeSection() {
  const linkedinUrl = "https://www.linkedin.com/in/sergio-loza/";
  const githubUrl = "https://github.com/sergiolozav2";

  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-4xl font-bold text-stone-100">{t("welcome.name")}</h1>
      <TypeAnimationText
        className="w-fit bg-stone-100 px-1 text-xl font-semibold text-stone-950 md:text-xl"
        text={t("welcome.role")}
        duration={2000}
      />
      <h2 className="mt-2 max-w-sm text-lg">{t("welcome.subtitle")}</h2>
      <ul className="list-inside list-disc space-y-1 text-lg font-medium text-stone-100">
        <li className="">
          <a className="hover:underline" target="_blank" href={linkedinUrl}>
            {t("welcome.linkedin")}
          </a>
        </li>
        <li className="">
          <a className="hover:underline" target="_blank" href={githubUrl}>
            {t("welcome.github")}
          </a>
        </li>
      </ul>
    </div>
  );
}
