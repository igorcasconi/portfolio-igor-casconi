import { useState } from "react";
import Image from "next/image";

import { Modal } from "../modal";
import { DataModalPortfolio, DataModalPortfolioKey } from "./data-modal";

import { CheckIcon, LinkIcon } from "@heroicons/react/16/solid";
import GithubIcon from "@/icons/github-icon";
import Link from "next/link";

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [itemModal, setItemModal] = useState<DataModalPortfolioKey>("az");

  const handleCloseModal = () => setModalOpen(false);
  const dataModal = DataModalPortfolio[itemModal];

  const handleOpenModal = (item: DataModalPortfolioKey) => () => {
    setModalOpen(true);
    setItemModal(item);
  };

  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-32 xl:mt-16 justify-start w-full xl:px-40 lg:px-16 sm:px-4 pb-4">
      <h3 className="text-primary text-[45px] font-afacad font-medium text-center">
        PORTFÓLIO
      </h3>

      <div className="flex flex-row sm:items-center md:items-left lg:justify-center flex-wrap">
        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("az")}
        >
          <Image
            src={DataModalPortfolio.az.image}
            alt="Aluno AZ"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md "
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.az.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("atlas")}
        >
          <Image
            src={DataModalPortfolio.atlas.image}
            alt="Atlas"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.atlas.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("pay")}
        >
          <Image
            src={DataModalPortfolio.pay.image}
            alt="Lex Pay"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.pay.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("composify")}
        >
          <Image
            src={DataModalPortfolio.composify.image}
            alt="Composify"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.composify.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("ufc")}
        >
          <Image
            src={DataModalPortfolio.ufc.image}
            alt="UFC Fantasy"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.ufc.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("abc")}
        >
          <Image
            src={DataModalPortfolio.abc.image}
            alt="Banco ABC"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.abc.title}
          </h3>
        </div>

        <div
          className="w-[150px] h-[180px] bg-gray-800 flex flex-col items-center justify-between rounded-md cursor-pointer shadow-xl ml-6 mt-6"
          onClick={handleOpenModal("livrocaixa")}
        >
          <Image
            src={DataModalPortfolio.livrocaixa.image}
            alt="Livro Caixa"
            className="w-[150px] h-[150px] rounded-tr-md rounded-tl-md object-cover"
          />
          <h3 className="text-primary text-[20px] font-afacad font-bold">
            {DataModalPortfolio.livrocaixa.title}
          </h3>
        </div>
      </div>

      <div className="flex flex-row mt-4 justify-center">
        <Link href="https://github.com/igorcasconi/" target="_blank">
          <p className="text-white font-afacad font-medium mt-2 text-[18px] sm:text-[24px] hover:text-primary text-center">
            Para ver mais projetos, clique aqui para acessar meu GitHub
          </p>
        </Link>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        style="h-auto min-h-[300px] w-[600px]"
      >
        <div className="w-full h-full">
          <div className="py-3 px-4">
            <h4 className="text-primary font-afacad font-bold text-[30px]">
              {dataModal.titleModal}
            </h4>

            <Image
              src={dataModal.imageModal}
              alt={dataModal.titleModal}
              className="h-[250px] w-full object-cover"
            />

            <p className="text-gray-900 font-afacad font-medium mt-2">
              {dataModal.description}
            </p>

            <p className="text-primary font-afacad font-bold text-[18px] mt-4">
              Trabalho desenvolvido
            </p>
            <p className="text-gray-900 font-afacad font-medium">
              {dataModal.work}
            </p>

            {dataModal.features.map((feature, index) => (
              <div className="flex flex-row  mt-1" key={index}>
                <CheckIcon className="text-emerald-700 mt-1 h-[20px] w-[20px]" />
                <p className="text-gray-900 font-afacad font-regular">
                  {feature}
                </p>
              </div>
            ))}

            <Link href={dataModal.link} target="_blank">
              <div className="flex items-center">
                <LinkIcon className="h-[20px] w-[20px] text-primary mt-4" />
                <p className="text-primary font-afacad font-bold text-[18px] mt-4">
                  Acesse aqui o site
                </p>
              </div>
            </Link>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default Portfolio;
