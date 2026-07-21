"use client";

import { useLanguage } from "@/contexts/language-context";
import { footerDictionary } from "@/locales/footer";

const Footer = () => {
  const { language } = useLanguage();
  const { developedBy, name, year } = footerDictionary[language];

  return (
    <div className="w-full min-h-[40px] bg-gray-400 flex flex-row justify-center items-center">
      <p className="font-afacad text-[16px] text-white">
        {developedBy} <span className="text-primary">{name}</span> # {year}
      </p>
    </div>
  );
};

export default Footer;
