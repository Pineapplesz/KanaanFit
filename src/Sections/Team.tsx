import stretchingTrainer from "../assets/images/Yulia.jpg";
import { useTranslation } from "react-i18next";

const Team = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-white rounded-b-[40px] rounded-t-[40px]">
      <div
        className="flex flex-wrap flex-row-reverse px-10 py-20 mx-auto items-center max-container 
       max-md:px-8 max-xs:px-2 max-sm:pt-14 max-[1200px]:gap-8 max-[1200px]:flex-col-reverse"
      >
        <div className="w-1/2 flex justify-center items-center max-[1200px]:w-full max-[1200px]:justify-center">
          <img
            src={stretchingTrainer}
            alt="image"
            className="max-w-[550px] w-full rounded-md min-w-[300px] object-contain max-sm:max-w-full max-sm:h-auto max-sm:w-[90%]"
          />
        </div>

        <div className="w-1/2 pr-8 max-[1200px]:pr-0 flex flex-col justify-center items-center gap-6 max-[1200px]:w-full">
          <div className="flex flex-col items-center text-center gap-5">
            <h2 className="font-bold text-4xl font-dmsans max-xs:text-4xl">
              {t("teams.h2")}
            </h2>
          </div>
          <p className=" self-end border-2 rounded-3xl px-4 py-1 text-lg font-semibold bg-white max-md:self-center">
            {t("teams.trainerName")}
          </p>
          <p className="text-base text-justify max-sm:px-2 max-xs:px-5 font-montserrat font-normal">
            {t("teams.text")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
