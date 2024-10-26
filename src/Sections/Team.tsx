import stretchingTrainer from "../assets/images/Yulia.jpg";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-primary250 rounded-b-[40px] rounded-t-[40px] mb-10 shadow-lg">
      <div
        className="px-10 py-20 mx-auto items-center max-container 
       max-md:px-8 max-xs:px-2 max-sm:pt-14 "
      >
        <div
          className="flex flex-wrap flex-row-reverse mx-auto items-center bg-white rounded-xl shadow-md p-10 max-xs:px-3
        max-[1200px]:gap-8 max-[1200px]:flex-col-reverse "
        >
          <div className="w-1/2 flex justify-end items-center max-[1200px]:w-full max-[1200px]:justify-center">
            <img
              src={stretchingTrainer}
              alt="image"
              loading="lazy"
              className="max-w-[550px] w-full rounded-md min-w-[300px] object-contain max-sm:max-w-full max-sm:h-auto max-sm:w-[90%]"
            />
          </div>

          <div className="w-1/2 pr-8 max-[1200px]:pr-0 flex flex-col justify-center items-center gap-6 max-[1200px]:w-full">
            <div className="flex flex-col items-center text-center gap-5 ">
              <h2 className="font-bold text-4xl font-dmsans max-xs:text-4xl">
                {t("teams.h2")}
              </h2>
            </div>
            <p className=" self-end border-2 rounded-3xl px-4 py-1 text-lg font-semibold bg-white max-md:self-center">
              {t("teams.trainerName")}
            </p>
            <p className="text-base text-justify max-xs:text-start max-sm:px-2  max-xs:px-1 font-montserrat font-normal">
              {t("teams.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
