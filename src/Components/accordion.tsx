import { useState } from "react";

type Props = {
  title: string;
  answer: string;
};

const Accordion = ({ title, answer }: Props) => {
  const [accordionOpen, SetAccordionOpen] = useState<boolean>(false);
  return (
    <div className="border-b-2 pb-6">
      <button
        onClick={() => SetAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-center pt-8"
      >
        <span className="text-lg  pb-2 font-semibold font-montserrat flex-grow-0 justify-center max-sm:flex-grow">
          {title}
        </span>
        <svg
          className="fill-black shrink-0 ml-8 max-md:m-2"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden  transition-all duration-250 ease-in-out text-slate-600
      ${
        accordionOpen
          ? "grid-rows-[1fr] opacity-100 my-4"
          : "grid-rows-[0fr] opacity-0"
      }`}
      >
        <div className="overflow-hidden font-dmsans text-base text-justify">
          {answer}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
