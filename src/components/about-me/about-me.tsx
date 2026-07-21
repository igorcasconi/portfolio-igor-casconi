"use client";

import { differenceInYears } from "date-fns";
import { useLanguage } from "@/contexts/language-context";
import { aboutMe } from "@/locales/about-me";

const AboutMe = () => {
  const { language } = useLanguage();
  const dict = aboutMe[language];
  const myAge = differenceInYears(new Date(), new Date(1997, 9, 26));
  const experienceYears = differenceInYears(new Date(), new Date(2016, 11, 20));
  const developmentYears = differenceInYears(
    new Date(),
    new Date(2019, 10, 10),
  );

  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-32 xl:mt-24 justify-start w-full xl:px-40 lg:px-16 sm:px-4">
      <h3
        className="text-primary text-[45px] font-afacad font-medium text-center"
        id="sobre-mim"
      >
        {dict.title}
      </h3>

      <div className="sm:box lg:flex flex-row w-full justify-between ">
        <div className="mt-6 lg:min-w-72 xl:w-96 animate__animated animate__fadeInLeft">
          <div className="flex flex-row justify-start mb-2">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.nameLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.name}
            </p>
          </div>

          <div className="flex flex-row justify-start mb-2 ">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.ageLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {myAge}
            </p>
          </div>

          <div className="flex flex-row justify-start mb-2 ">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.cityLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.city}
            </p>
          </div>

          <div className="flex flex-row justify-start mb-2 ">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.nationalityLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.nationality}
            </p>
          </div>
        </div>

        <div className="sm:box lg:mt-6 lg:min-w-72 xl:w-96 animate__animated animate__fadeInLeft">
          <div className="flex flex-row justify-start mb-2">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.emailLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.email}
            </p>
          </div>

          <div className="flex flex-row justify-start mb-2">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.workModeLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.workMode}
            </p>
          </div>

          <div className="flex flex-row justify-start mb-2">
            <p className="text-white text-[20px] font-afacad font-medium">
              {dict.freelanceLabel}
            </p>
            <p className="text-primary text-[20px] font-afacad text-regular ml-2">
              {dict.freelanceStatus}
            </p>
          </div>
        </div>

        <div className="sm:box lg:flex flex-row animate__animated animate__fadeInRight">
          <div className="sm:box sm:mt-6 lg:w-72 xl:w-96">
            <div className="sm:box ">
              <div className="flex flex-row">
                <div className="box">
                  <h3 className="text-primary font-bold font-afacad text-[40px]">
                    {experienceYears}+
                  </h3>
                  <div className="w-10 h-[1px] border-white border-[1px] -mt-2 mr-1" />
                </div>
                <p className="text-white font-bold font-afacad text-[20px] mt-[11px] w-40 ml-2 leading-6">
                  {dict.experienceYearsText}
                </p>
              </div>
            </div>

            <div className="sm:box mt-6 ">
              <div className="flex flex-row">
                <div className="box">
                  <h3 className="text-primary font-bold font-afacad text-[40px]">
                    {developmentYears}+
                  </h3>
                  <div className="w-10 h-[1px] border-white border-[1px] -mt-2 mr-1" />
                </div>
                <p className="text-white font-bold font-afacad text-[20px] mt-[11px] w-40 ml-2 leading-6">
                  {dict.developmentYearsText}
                </p>
              </div>
            </div>
          </div>

          <div className="sm:box sm:mt-6 lg:w-64 animate__animated animate__fadeInRight">
            <div className="sm:box">
              <div className="flex flex-row">
                <div className="box">
                  <h3 className="text-primary font-bold font-afacad text-[40px]">
                    12+
                  </h3>
                  <div className="w-14 h-[1px] border-white border-[1px] -mt-2 mr-1" />
                </div>
                <p className="text-white font-bold font-afacad text-[20px] mt-[11px] w-44 ml-2 leading-6">
                  {dict.professionalProjectsText}
                </p>
              </div>
            </div>

            <div className="sm:box mt-6">
              <div className="flex flex-row">
                <div className="box">
                  <h3 className="text-primary font-bold font-afacad text-[40px]">
                    20+
                  </h3>
                  <div className="w-16 h-[1px] border-white border-[1px] -mt-2 mr-1" />
                </div>
                <p className="text-white font-bold font-afacad text-[20px] mt-[11px] w-40 ml-2 leading-6">
                  {dict.personalProjectsText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
