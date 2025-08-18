import { useTranslations } from "next-intl";

export function WelcomeSection() {
  const t = useTranslations("HeroPage.WelcomeSection");

  return (
    <div className="w-full flex flex-col items-center justify-center px-8 relative py-20">
      <div className="flex flex-col gap-6 max-w-6xl text-center">
        <h1 className="text-xl sm:text-3xl font-medium tracking-[0.8rem] uppercase">
          {t("title")}
        </h1>

        <div className="flex flex-col gap-4">
          <p className="text-xs sm:text-sm font-light max-w-2xl mx-auto text-justify">
            {t("paragraph-1")}
          </p>

          <p className="text-xs sm:text-sm font-light max-w-2xl mx-auto text-justify">
            {t("paragraph-2")}
          </p>

          <p className="text-xs sm:text-sm font-light max-w-2xl mx-auto text-justify">
            {t("paragraph-3")}
          </p>

          <p className="text-xs sm:text-sm font-light max-w-2xl mx-auto text-justify">
            {t("paragraph-4")}
          </p>
        </div>
      </div>
    </div>
  );
}
