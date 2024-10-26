import philosopyImg from "../assets/images/SusenSquat.jpeg";
import { useTranslation } from "react-i18next";

type PhilosopyBlock = {
  text: string;
};
type Philosopy = {
  h3: string | number;
  blocks: PhilosopyBlock[];
};

const Philosopy = () => {
  const { t } = useTranslation();
  const philosopy = t("philosopy", { returnObjects: true }) as Philosopy;
  return (
    <div className="w-full bg-primary250 rounded-b-[40px] rounded-t-[40px] shadow-lg mb-10 max-sm:shadow-none">
      <div className="max-container mx-auto flex gap-8 flex-wrap flex-row-reverse justify-center py-20 max-sm:py-10">
        <div className="max-w-[600px] bg-white rounded-xl shadow-md overflow-hidden max-sm:mx-4 ">
          <div className="p-10 flex flex-col gap-8 max-sm:px-5 justify-center">
            <h3 className="font-bold text-center text-4xl font-dmsans text-primary500 max-xs:text-3xl">
              {t("philosopy.h3")}
            </h3>
            <ul className="flex flex-col gap-6 font-dmsans font-medium text-base text-gray-700">
              {philosopy.blocks.map((block, index) => (
                <li
                  key={index}
                  className="flex items-center text-justify max-xs:text-start max-sm:px-2"
                >
                  <span className="mr-2 self-start font-bold">
                    {index + 1}.
                  </span>
                  {block.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="max-w-[600px] bg-white rounded-xl shadow-md overflow-hidden max-sm:mx-4">
          <div className="p-6 flex flex-col gap-8 max-sm:px-5 ">
            <img
              className="max-w-[600px] w-full rounded min-w-[240px] object-contain"
              src={philosopyImg}
              alt="DescriptionImg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Philosopy;
