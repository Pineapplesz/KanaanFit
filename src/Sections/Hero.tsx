import main from "../assets/images/main.jpg";
import { SiPolestar } from "react-icons/si";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-[#f5f5f5] rounded-b-[40px] mb-10">
      <Element name="Main">
        <div
          className="flex flex-wrap px-10 pt-32  max-container mx-auto
        max-md:pt-32 max-md:px-8 max-[1200px]:gap-16
        max-xs:gap-8 max-md:mb-12 max-xs:mb-8"
        >
          <div className="flex w-1/2 flex-col gap-10 justify-center max-[1200px]:w-full max-[1200px]:items-center">
            <div className="flex gap-5 max-[870px]:flex-col max-xs:items-center max-[760px]:text-center">
              <h1 className="font-bold text-5xl font-dmsans max-w-[250px] max-xs:text-5xl max-[1200px]:max-w-[800px]">
                {t("hero.h1")}
              </h1>
              <p className="bg-white rounded-full h-12 min-w-40 max-w-40 p-3 block font-montserrat text-sm font-semibold text-center">
                {t("hero.subtext")}
              </p>
            </div>
            <p
              className="max-w-[460px] text-base text-justify font-dmsans font-normal
          max-[1200px]:max-w-[800px] "
            >
              {t("hero.text")}
            </p>
            <a
              href={t("hero.btnHref")}
              target="_blank"
              className="flex text-xl leading-none items-center border max-w-80 px-2 max-sm:mx-2 py-6 rounded-2xl text-center justify-center 
            bg-primary150 ease-in-out duration-300 hover:border-gray-500 hover:bg-white font-dmsans 
            text-white hover:text-primary50 max-[1200px]:max-w-[800px] max-[1200px]:w-full"
            >
              {t("hero.btn")}
            </a>
            <div className="flex">
              <div className="flex gap-2 text-2xl font-dmsans">
                <SiPolestar className="text-primary250 animate-bounce text-yellow w-10 h-10" />
                <p>{t("hero.price1")}</p>
                <p className="text-[#a3a3a3]">
                  <s>{t("hero.price2")}</s> {t("hero.price3")}
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-1/2 flex justify-end items-center 
        max-[1200px]:w-full max-[1200px]:justify-center"
          >
            <img
              src={main}
              alt="image"
              className="max-w-[650px] rounded-s-full object-contain max-sm:max-w-[90%] max-xs:max-w-full"
            />
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Hero;
