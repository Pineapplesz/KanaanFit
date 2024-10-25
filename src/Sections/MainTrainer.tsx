import mainTrainerImage from "../assets/images/MainTrainer.jpg";
import { useTranslation } from "react-i18next";

const MainTrainer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white rounded-b-[40px] rounded-t-[40px]">
      <div
        className="flex flex-wrap px-10 py-20 mx-auto items-center max-container 
     max-md:px-8 max-xs:px-2 max-sm:pt-14 max-[1200px]:gap-8 max-[1200px]:flex-col-reverse"
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
              {t("philosopy.h3")}
            </h2>
          </div>
          <p className=" self-start border-2 rounded-3xl px-4 py-1 text-lg font-semibold bg-white max-md:self-center">
            {t("mainTrainer.trainerName")}
          </p>
          <p className="text-base text-justify max-sm:px-2 max-xs:px-5 font-montserrat font-normal">
            {t("mainTrainer.text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainTrainer;
