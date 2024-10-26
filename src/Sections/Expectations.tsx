import { useTranslation } from "react-i18next";

type ExpectationBlock = {
  title: string;
  text: string;
  emoji: string;
};
type Expectation = {
  h2: string;
  blocks: ExpectationBlock[];
};

const Expectations = () => {
  const { t } = useTranslation();

  const expectation = t("expectation", { returnObjects: true }) as Expectation;

  return (
    <div className="w-full bg-primary250 rounded-b-[40px] rounded-t-[40px] shadow-lg mb-10">
      <div className="max-container mx-auto flex flex-col justify-center gap-16 py-20 max-sm:py-10  font-dmsans">
        <h2 className="font-bold text-center text-6xl font-dmsans max-sm:text-5xl max-xs:text-4xl">
          {t("expectation.h2")}
        </h2>
        <div className="flex flex-wrap justify-center gap-8  max-md:mx-12 max-sm:mx-6">
          {expectation.blocks.map((block, index) => (
            <div
              key={index}
              className={`w-full ${
                index === 2
                  ? "md:w-1/3"
                  : index === 3
                  ? "md:w-1/2"
                  : index % 2 === 0
                  ? "md:w-1/2"
                  : "md:w-1/3"
              }  bg-white p-8 rounded-3xl shadow-lg`}
            >
              <h3 className="text-2xl font-bold text-center">
                {block.title}
                {block.emoji}
              </h3>
              <p className="mt-2 text-justify max-xs:text-start">
                {block.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expectations;
