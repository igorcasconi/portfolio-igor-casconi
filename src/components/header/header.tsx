import Image from "next/image";

import profileIgor from "@/assets/profile-igor.jpg";
import GithubIcon from "@/icons/github-icon";
import LinkedinIcon from "@/icons/linkedin-icon";
import InstagramIcon from "@/icons/instagram-icon";

const Header = () => {
  return (
    <div className="box bg-gradient-to-l from-primary lg:h-[420px] xl:h-80 sm:h-1/2 w-full lg:px-40 sm:px-4 py-3 lg:relative shadow-xl z-20">
      <div className="flex flex-row justify-between">
        <h3 className="text-white font-afacad text-xl">Igor Casconi</h3>

        <ul className="flex flex-row text-xl font-afacad">
          <li className="mr-2">Sobre mim</li>
          <li className="mr-2">Skills</li>
          <li className="mr-2">Carreira</li>
          <li>Portfólio</li>
        </ul>
      </div>

      <div className="flex sm:flex-col lg:flex-row lg:justify-center sm:items-center">
        <div className="mt-6 z-10 lg:absolute lg:-bottom-20 lg:left-20 xl:left-40 border-2 rounded-full  border-primary animate__animated animate__fadeInLeft">
          <Image
            src={profileIgor}
            alt="profile-igor"
            className="rounded-full lg:w-72 lg:h-72 object-cover sm:w-56 sm:h-56 "
          />
        </div>

        <div className="box lg:mt-[190px] xl:mt-32 sm:mt-[20px] lg:ml-60 xl:ml-64 lg:w-8/12 animate__animated animate__fadeInRight">
          <h2 className="text-white font-afacad text-4xl font-medium sm:text-center lg:text-left">
            Desenvolvedor Mobile & Front-end
          </h2>

          <p className="text-white font-afacad lg:text-xl sm:text-lg font-regular lg:mt-1 xl:mt-4 sm:mt-4 xl:pb-4 sm:pb-4">
            Sou desenvolvedor mobile e front-end com formação em Bacharelado em
            Ciência da Computação pela UNIVEM. Com experiência no
            desenvolvimento de soluções digitais para diversos segmentos de
            mercado, como educação, saúde, e-commerce e entretenimento.
          </p>

          <div className="flex flex-row items-center lg:mt-2 xl:mt-10 xxl:mt-2 xxxl:mt-10 md:mt-2">
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
