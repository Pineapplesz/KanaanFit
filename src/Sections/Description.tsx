// import { description } from "../Constants/index";
import DescriptionImg from "../assets/images/Yulia3.png";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
import schedule from "../assets/svg/schedule.svg"; //1
import exercise from "../assets/svg/exercise.svg"; //2
import lifting from "../assets/svg/lifting.svg"; //2
import safty from "../assets/svg/safety.svg"; //4
import burn from "../assets/svg/burn.svg"; //5
import diet from "../assets/svg/diet.svg"; //6
import water from "../assets/svg/water.svg"; //7
import access from "../assets/svg/access.svg"; //7

const svgMap: any = {
  schedule,
  exercise,
  lifting,
  safty,
  burn,
  diet,
  water,
  access,
};
type DescriptionBlock = {
  text: string;
  img: any;
};
type Description = {
  h3: string;
  blocks: DescriptionBlock[];
};

const Description = () => {
  const { t } = useTranslation();
  const description = t("description", { returnObjects: true }) as Description;
  return (
    <div className="w-full bg-primary250 rounded-b-[40px] rounded-t-[40px] shadow-lg mb-10 max-sm:shadow-none">
      <Element name="Description">
        <div className="max-container mx-auto flex gap-8 flex-wrap justify-center py-20 max-sm:py-10">
          <div className="max-w-[600px] bg-white rounded-xl shadow-md overflow-hidden max-sm:mx-4">
            <div className="p-10 flex flex-col gap-8 max-sm:px-5 justify-center ">
              <h3 className="font-bold text-center text-4xl font-dmsans text-primary500 max-xs:text-3xl">
                {t("description.h3")}
              </h3>
              <ul className="flex flex-col gap-6 font-dmsans font-medium text-base text-gray-700">
                {description.blocks.map((block, index) => (
                  <li
                    key={index}
                    className="flex items-center text-justify max-xs:text-start max-sm:px-2"
                  >
                    <span className="mr-4">
                      <img
                        className="min-w-8 max-w-8"
                        src={svgMap[block.img]}
                        alt="icon"
                      />
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
                src={DescriptionImg}
                alt="DescriptionImg"
              />
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
};

export default Description;
