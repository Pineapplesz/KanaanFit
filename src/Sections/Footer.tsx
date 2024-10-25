import { useTranslation } from "react-i18next";

type Footer = {
  text: string | number;
  subtext: string | number;
  tg: string | number;
  tgHref: string;
  emailText: string;
  email: string;
};

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#1f2126]">
      <div
        className="flex flex-col justify-center items-center gap-2
      mx-auto py-12 px-4 max-xs:max-w-[320px] text-primary200 max-md:text-center"
      >
        <div>
          {t("footer.subtext")}
          <a
            href={t("footer.tgHref")}
            target="_blank"
            className="text-primary250 hover:text-[#686e82] font-semibold text-lg"
          >
            {t("footer.tg")}
          </a>
        </div>
        <div className="flex gap-2">
          {t("footer.emailText")}
          <p className="font-semibold text-lg text-primary250">
            {t("footer.emailHref")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
