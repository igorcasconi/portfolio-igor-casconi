import { BuildingOfficeIcon } from "@heroicons/react/16/solid";

const Career = () => {
  return (
    <div className="flex flex-col sm:mt-4 md:mt-10 lg:mt-32 xl:mt-16 justify-start w-full xl:px-40 lg:px-16 sm:px-4 pb-4">
      <h3
        className="text-primary text-[45px] font-afacad font-medium text-center"
        id="carreira"
      >
        CARREIRA
      </h3>

      <div className="flex relative">
        <div className="rounded-[100%] w-[40px] h-[40px] p-1 bg-primary flex items-center justify-center mr-2">
          <BuildingOfficeIcon className="w-[40px] h-[26px]" />
        </div>
        <div className="flex flex-col mt-1">
          <h3 className="text-white font-afacad font-medium text-[20px]">
            Nav9.tech
          </h3>
          <h5 className="text-primary font-afacad font-medium text-[20px] -mt-1">
            Desenvolvedor Mobile & Front-end C-Level
          </h5>
          <p className="text-gray-300 font-afacad font-regular text-[16px] -mt-1">
            setembro/2020 - até o momento
          </p>

          <p className="text-gray-300 font-afacad font-regular text-[18px] mt-4">
            Atuo como Desenvolvedor Mobile e Front-end, com experiência no
            desenvolvimento e manutenção de aplicações para Android, iOS, Web e
            Flutter Web. Na Nav9.tech, desenvolvo soluções utilizando React JS,
            React Native, Flutter e Next.js, com foco em aplicações escaláveis,
            performáticas e de alta qualidade. Tenho sólida experiência com
            TypeScript, Redux, GraphQL e integração com APIs, além de atuar no
            desenvolvimento de plataformas web e aplicativos móveis.
            Recentemente, participei do desenvolvimento de um projeto de
            e-commerce utilizando Flutter para Web e Mobile, contribuindo na
            implementação de funcionalidades, arquitetura da aplicação,
            integração de serviços e otimização da experiência do usuário em
            diferentes plataformas. Também possuo experiência com
            desenvolvimento nativo Android utilizando Java e Kotlin, além da
            integração de serviços como Firebase (Analytics, Crashlytics e Cloud
            Messaging), Amazon SNS e Amazon Pinpoint para monitoramento,
            notificações e análise de comportamento dos usuários. Tenho forte
            atuação na automação de processos de entrega contínua (CI/CD),
            configurando e mantendo pipelines no Bitrise, utilizando Fastlane
            para automação de builds, assinaturas e publicações de aplicativos
            nas lojas Google Play e Apple App Store. Além do desenvolvimento,
            colaboro ativamente com a equipe por meio de code reviews, pair
            programming, elaboração de documentação técnica, definição de boas
            práticas e compartilhamento de conhecimento, contribuindo para a
            evolução contínua dos projetos e do time.
          </p>
        </div>

        <div className="h-[80%] w-[1px] border-white border-[1px] bg-white absolute sm:top-10 lg:top-6 left-5 my-8" />
      </div>

      <div className="flex mt-10 relative">
        <div className="rounded-[100%] w-[40px] h-[40px] p-1 bg-primary flex items-center justify-center mr-2 ">
          <BuildingOfficeIcon className="w-[40px] h-[26px]" />
        </div>
        <div className="flex flex-col mt-1">
          <h3 className="text-white font-afacad font-medium text-[20px]">
            Webline Sistemas
          </h3>
          <h5 className="text-primary font-afacad font-medium text-[20px] -mt-1">
            Analista de Banco de Dados
          </h5>
          <p className="text-gray-300 font-afacad font-regular text-[16px] -mt-1">
            setembro/2019 - agosto/2020
          </p>

          <p className="text-gray-300 font-afacad font-regular text-[18px] mt-4">
            Responsável pelos dados de novos clientes que a empresa Webline
            Sistema está recebendo. Esses dados são realizado o tratamento e
            transferidos para a estrutura do sistema que o cliente adquiriu.
          </p>
        </div>
        <div className="h-[80%] w-[1px] border-white border-[1px] bg-white absolute sm:top-8 lg:top-6 left-5 my-8" />
      </div>

      <div className="flex mt-10">
        <div className="rounded-[100%] w-[40px] h-[40px] p-1 bg-primary flex items-center justify-center mr-2">
          <BuildingOfficeIcon className="w-[40px] h-[26px]" />
        </div>
        <div className="flex flex-col mt-1">
          <h3 className="text-white font-afacad font-medium text-[20px]">
            Webline Sistemas
          </h3>
          <h5 className="text-primary font-afacad font-medium text-[20px] -mt-1">
            Analista de Suporte de TI
          </h5>
          <p className="text-gray-300 font-afacad font-regular text-[16px] -mt-1">
            dezembro/2016 - setembro/2019
          </p>

          <p className="text-gray-300 font-afacad font-regular text-[18px] mt-4">
            Responsável pelo atendimento ao cliente para
            manutenções/atualizações no sistema adquirido a partir de acesso
            remoto ou ligações. Iniciado pelo o estágio no final de 2016 e fui
            efetivado em 2018.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Career;
