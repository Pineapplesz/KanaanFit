import Accordion from "../Components/accordion";

import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

type FaqsBlock = {
  question: string | number;
  answer: string | number;
};
type Faqs = {
  h2: string | number;
  blocks: FaqsBlock[];
};

const Answers = () => {
  const { t } = useTranslation();
  const faqs = t("faqs", { returnObjects: true }) as Faqs;
  return (
    <Element name="QA">
      <div className="w-full py-32 max-sm:py-20">
        <div className="flex flex-col mx-auto max-container justify-center gap-2 px-20 max-xs:px-2">
          <h2
            className="text-5xl font-semibold font-montserrat pl-4 border-b-2 pb-9
        max-md:text-4xl max-sm:text-3xl max-md:font-bold max-sm:pl-0 max-xs:text-center"
          >
            {t("faqs.h2")}
          </h2>

          {faqs.blocks.map((faq, index) => (
            <Accordion
              key={index}
              title={String(faq.question)}
              answer={String(faq.answer)}
            />
          ))}
        </div>
      </div>
    </Element>
  );
};

export default Answers;
