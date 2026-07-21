import Image from "next/image";

import profileIgor from "../../../public/assets/profile-igor.png";
import GithubIcon from "@/icons/github-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import InstagramIcon from "@/icons/instagram-icon";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { useRef, useState } from "react";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useLanguage } from "@/contexts/language-context";
import { header } from "@/locales/header";

const Header = () => {
  const [isOpenMenu, setOpenMenu] = useState<boolean>(false);
  const refMenu = useRef<HTMLUListElement>(null);
  const { language, setLanguage } = useLanguage();
  const dictionary = header[language];

  const handleOpenMenu = () => setOpenMenu(true);

  const handleCloseMenu = () => setOpenMenu(false);

  useOnClickOutside(refMenu, handleCloseMenu);

  return (
    <div className="box bg-gradient-to-l from-primary lg:h-[420px] xl:h-80 sm:h-1/2 w-full lg:px-40 sm:px-4 py-3 lg:relative shadow-xl z-20">
      <div className="flex flex-row justify-between">
        <h3 className="text-white font-afacad text-xl">{dictionary.name}</h3>

        <div className="flex flex-row items-center">
          <div className="hidden lg:flex flex-row items-center text-white font-afacad text-lg mr-4">
            <button
              onClick={() => setLanguage("pt")}
              className={language === "pt" ? "font-bold" : "text-white/60"}
            >
              🇧🇷 PT
            </button>
            <span className="mx-1">|</span>
            <button
              onClick={() => setLanguage("en")}
              className={language === "en" ? "font-bold" : "text-white/60"}
            >
              🇺🇸 EN
            </button>
          </div>

          <div className="relative">
            <button
              className="border-2 rounded-lg p-1 lg:hidden md:mr-4"
              onClick={handleOpenMenu}
            >
              <Bars3Icon className="h-[20px] w-[20px] text-white" />
            </button>
            <ul
              ref={refMenu}
              className={`lg:flex lg:flex-row text-xl font-afacad
              ${isOpenMenu ? "md:block sm:block" : "sm:hidden md:hidden"}
              ${
                isOpenMenu &&
                "bg-slate-700 p-4 absolute top-9 right-0 z-[99] rounded-md w-[300px] h-auto animate__animated animate__fadeInDown text-[40px]"
              }`}
            >
              <li className="mr-2 sm:mt-2 md:mt-0 lg:hidden text-white flex flex-row">
                <button
                  onClick={() => setLanguage("pt")}
                  className={language === "pt" ? "font-bold" : "text-white/60"}
                >
                  🇧🇷 PT
                </button>
                <span className="mx-1">|</span>
                <button
                  onClick={() => setLanguage("en")}
                  className={language === "en" ? "font-bold" : "text-white/60"}
                >
                  🇺🇸 EN
                </button>
              </li>
              <li className="mr-2 md:mt-0">
                <a href="#sobre-mim">{dictionary.menu.aboutMe}</a>
              </li>
              <li className="mr-2 sm:mt-2 md:mt-0">
                <a href="#skills">{dictionary.menu.skills}</a>
              </li>
              <li className="mr-2 sm:mt-2 md:mt-0">
                <a href="#carreira">{dictionary.menu.career}</a>
              </li>
              <li className="mr-2 sm:mt-2 md:mt-0">
                <a href="#portfolio">{dictionary.menu.portfolio}</a>
              </li>
              <li className="sm:mt-2 md:mt-0">
                <a href="#articles">{dictionary.menu.articles}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex sm:flex-col lg:flex-row lg:justify-center sm:items-center">
        <div className="mt-6 z-10 lg:absolute lg:-bottom-20 lg:left-20 xl:left-40 border-2 rounded-full  border-primary animate__animated animate__fadeInLeft">
          <Image
            src={profileIgor}
            alt="profile-igor"
            className="rounded-full lg:w-72 lg:h-72 object-cover sm:w-56 sm:h-56 "
          />
        </div>

        <div className="box lg:mt-[190px] xl:mt-32 sm:mt-[20px] lg:ml-60 xl:ml-64 xxxl:mt-36 lg:w-8/12 animate__animated animate__fadeInRight">
          <h2 className="text-white font-afacad text-4xl font-medium sm:text-center lg:text-left">
            {dictionary.role}
          </h2>

          <p className="text-white font-afacad lg:text-xl sm:text-lg font-regular lg:mt-1 xl:mt-4 sm:mt-4 xl:pb-4 sm:pb-4">
            {dictionary.bio}
          </p>

          <div className="flex flex-row items-center lg:mt-6 xl:mt-10 xxl:mt-1 xxxl:mt-6 md:mt-2">
            <a href="https://github.com/igorcasconi/" target="_blank">
              <GithubIcon
                fill="white"
                width={40}
                height={40}
                className="mr-2"
              />
            </a>

            <a
              href="https://www.linkedin.com/in/igorcasconioliveira/"
              target="_blank"
            >
              <LinkedinIcon
                fill="white"
                width={40}
                height={40}
                className="mr-2"
              />
            </a>

            <a href="https://www.instagram.com/igor_casconi/" target="_blank">
              <InstagramIcon
                fill="white"
                width={40}
                height={40}
                className="mr-2"
              />
            </a>

            <div className="w-full h-[1px] border-white border-[1px] mt-[4px] mr-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
