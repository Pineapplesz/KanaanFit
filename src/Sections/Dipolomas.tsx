// import Diploma from "../assets/images/diplomaAsset.jpg";
import Diploma1 from "../assets/images/DiplomasSyu1.jpg";
import Diploma2 from "../assets/images/DiplomasSyu2.jpg";
import Diploma3 from "../assets/images/DiplomasYlia.jpg";
import { useTranslation } from "react-i18next";

const Dipolomas = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-primary200 rounded-b-[40px] rounded-t-[40px] shadow-lg ">
      <div
        className="max-container gap-14 flex flex-wrap flex-col px-10 py-20  mx-auto items-center
     max-md:px-8 max-xs:px-2 max-sm:pt-14 max-[1200px]:gap-8 max-sm:py-10"
      >
        <h3 className="font-bold text-4xl font-dmsans max-xs:text-3xl">
          {t("diplomas.h2")}
        </h3>
        <div className="flex flex-row flex-wrap justify-center items-center gap-x-8 gap-y-6 max-sm:gap-y-4">
          <img
            src={Diploma1}
            alt="Diploma"
            className="max-w-[350px] w-full rounded min-w-[280px] object-contain max-sm:max-w-[90%] 
            hover:scale-110 transition-transform duration-300 ease-in-out max-sm:hover:scale-100"
          />
          <img
            src={Diploma3}
            alt="Diploma"
            className="max-w-[354px] w-full rounded min-w-[280px] object-contain max-sm:max-w-[90%] 
            hover:scale-110 transition-transform duration-300 ease-in-out max-sm:hover:scale-100"
          />
          <img
            src={Diploma2}
            alt="Diploma"
            className="max-w-[600px] w-full rounded min-w-[280px] object-contain max-sm:max-w-[90%] 
            hover:scale-110 transition-transform duration-300 ease-in-out max-sm:hover:scale-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Dipolomas;
