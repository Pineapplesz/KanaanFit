import { useTranslation } from "react-i18next";

const LastChance = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-[#f5f5f5] rounded-t-[40px] justify-center flex ">
      <div
        className="flex flex-col  items-center gap-8
      max-w-[1000px] py-12 px-6 max-xs:px-2"
      >
        <h3 className="font-bold text-4xl font-dmsans max-w-120 max-xs:text-2xl">
          {t("lastChance.h3")}
        </h3>
        <p className=" text-base text-justify max-sm:px-2 max-xs:px-5 font-montserrat font-normal">
          {t("lastChance.text")}
        </p>
        <div className="w-full flex flex-col gap-4">
          <a
            href={t("lastChance.btnHref")}
            target="_blank"
            className="flex text-xl leading-none items-center border w-full px-2 py-6 rounded-2xl text-center justify-center 
            bg-primary150 ease-in-out duration-300 hover:border-gray-500 hover:bg-white font-dmsans 
            text-white hover:text-primary50"
          >
            {t("lastChance.btn")}
          </a>
          <p className="text-sm text-slate-900 font-semibold text-center">
            {t("lastChance.subtext")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastChance;
