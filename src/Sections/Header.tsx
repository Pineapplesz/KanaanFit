import { CiDumbbell } from "react-icons/ci";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import Dropdown from "../Components/dropdown";

interface NavLink {
  href: string;
  label: string;
  scroll: string;
}

const Header = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: any) => {
    i18n.changeLanguage(lng);
  };

  const navLinks: NavLink[] =
    (t("navLinks", { returnObjects: true }) as NavLink[]) || [];

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  // Массив языков
  const languages = [
    { id: "ua", name: "Українська" },
    { id: "ru", name: "Русский" },
  ];
  const handleLanguageChange = (id: string) => {
    setSelectedLanguage(id);
    changeLanguage(id);
  };

  return (
    <header className="w-full fixed z-50 mt-2 text-primary50 flex justify-center">
      <div className="w-full max-w-[1240px] bg-white rounded-full py-[1px] mx-4">
        <nav className="flex justify-between px-4 my-2">
          <a href="/" className="flex gap-1 justify-center items-center mx-2">
            <CiDumbbell className="w-[45px] h-[45px] text-primary150" />
            <p className="text-2xl text-primary150">KanaanFit</p>
          </a>
          <div className="flex-1 flex justify-center items-center max-md:hidden">
            <ul className="flex gap-8 justify-center items-center bg-primary200 text-primary50 text-base rounded-3xl px-6 py-2 font-montserrat font-semibold">
              {navLinks.map((item, index) => (
                <li
                  key={index}
                  className="hover:text-primary250 ease-in-out duration-400"
                >
                  <Link
                    to={item.scroll}
                    smooth={true}
                    offset={25}
                    duration={500}
                    ignoreCancelEvents={false}
                    className="text-lg hover:text-primary150 ease-in-out duration-300 cursor-pointer"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="pr-4 max-md:hidden">
            <Dropdown
              id="language-dropdown"
              title={t("navLinksBtn.textBtn")}
              data={languages}
              selectedId={selectedLanguage}
              onSelect={handleLanguageChange}
              position="bottom-left"
              hasImage={false}
            />
          </div>
          <div className="hidden max-md:block z-[51]">
            <div
              className="cursor-pointer z-50 text-5xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <RxCross1 className="your-icon-class" />
              ) : (
                <RxHamburgerMenu />
              )}
            </div>
          </div>
        </nav>
        <div
          className={`absolute top-0 right-0 max-xs:w-[50%] max-sm:w-[40%] max-md:w-[40%] pt-[20vh] h-[100vh]
            bg-[#ededed] z-50 shadow-lg transition-transform duration-300 max-md:block max-md:text-3xl hidden ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          <ul className="flex flex-col items-center gap-8 py-4 font-semibold text-4xl">
            {navLinks.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.scroll}
                  smooth={true}
                  offset={25}
                  duration={500}
                  ignoreCancelEvents={false}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-lg hover:text-primary150 ease-in-out duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-20 max-xs:mt-14 text-lg font-medium flex flex-col items-center">
            <Dropdown
              id="language-dropdown"
              title={t("navLinksBtn.textBtn")}
              data={languages}
              selectedId={selectedLanguage}
              onSelect={handleLanguageChange}
              position="bottom-left"
              hasImage={false}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
