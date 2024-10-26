import mainTrainerImage from "../assets/images/MainTrainer.jpg";
import { useTranslation } from "react-i18next";

const MainTrainer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-primary250 rounded-b-[40px] rounded-t-[40px] mb-10 shadow-lg">
      <div
        className="px-10 py-20 max-container mx-auto
     max-md:px-8 max-xs:px-2 max-sm:pt-14 "
      >
        <div
          className="flex flex-wrap  items-center bg-white rounded-xl shadow-md p-10 max-xs:px-3
        max-[1200px]:gap-8 max-[1200px]:flex-col-reverse "
        >
          <div className="w-1/2 flex justify-start items-center max-[1200px]:w-full max-[1200px]:justify-center">
            <img
              src={mainTrainerImage}
              alt="image"
              className="max-w-[600px] w-full rounded min-w-[300px] object-contain max-sm:max-w-[90%]"
            />
          </div>

          <div
            className="w-1/2 pl-8 max-[1200px]:pl-0 flex flex-col justify-end items-center gap-6 
        max-[1200px]:w-full max-[1200px]:justify-center"
          >
            <div className="flex flex-col items-center text-center gap-5">
              <h2 className="font-bold text-4xl font-dmsans max-xs:text-4xl">
                {t("mainTrainer.h2")}
              </h2>
            </div>
            <p className=" self-start border-2 rounded-3xl px-4 py-1 text-lg font-semibold bg-white max-md:self-center">
              {t("mainTrainer.trainerName")}
            </p>
            <p className="text-base text-justify  max-xs:text-start max-sm:px-2 max-xs:px-1 font-montserrat font-normal">
              {t("mainTrainer.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTrainer;
