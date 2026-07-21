"use client";

import { BuildingOfficeIcon } from "@heroicons/react/16/solid";

import { useLanguage } from "@/contexts/language-context";
import { career } from "@/locales/career";

const Career = () => {
  const { language } = useLanguage();

  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-32 xl:mt-16 justify-start w-full xl:px-40 lg:px-16 sm:px-4 pb-4">
      <h3
        className="text-primary text-[45px] font-afacad font-medium text-center"
        id="carreira"
      >
        CARREIRA
      </h3>

      {career[language].map((entry, index) => (
        <div
          key={`${entry.company}-${entry.period}`}
          className={`flex relative ${index > 0 ? "mt-10" : ""}`}
        >
          <div className="rounded-[100%] w-[40px] h-[40px] p-1 bg-primary flex items-center justify-center mr-2">
            <BuildingOfficeIcon className="w-[40px] h-[26px]" />
          </div>
          <div className="flex flex-col mt-1">
            <h3 className="text-white font-afacad font-medium text-[20px]">
              {entry.company}
            </h3>
            <h5 className="text-primary font-afacad font-medium text-[20px] -mt-1">
              {entry.role}
            </h5>
            <p className="text-gray-300 font-afacad font-regular text-[16px] -mt-1">
              {entry.period}
            </p>

            <p className="text-gray-300 font-afacad font-regular text-[18px] mt-4">
              {entry.description}
            </p>
          </div>

          {index < career[language].length - 1 && (
            <div className="h-[80%] w-[1px] border-white border-[1px] bg-white absolute sm:top-10 lg:top-6 left-5 my-8" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Career;
