import type { StaticImageData } from "next/image";

import type { Language } from "@/contexts/language-context";

import AlunoAzLandscape from "../../../public/assets/aluino-az-landscape.jpg";
import LexPayLandscape from "../../../public/assets/lex-pay-landscape.png";
import AtlasLandscape from "../../../public/assets/atlas-landscape.jpg";
import BancoAbcLandscape from "../../../public/assets/bancoabc-landscape.png";
import UfcLandscape from "../../../public/assets/ufc-fantasy-landscape.jpg";
import LivroCaixaLandscape from "../../../public/assets/livrocaixa-landscape.png";
import ComposifyLandscape from "../../../public/assets/composify-landscape.png";
import CereagroLandscape from "../../../public/assets/cereagro-landscape.png";
import NanoLandscape from "../../../public/assets/nano-landscape.png";
import DigitalFavelaLandscape from "../../../public/assets/digitalfavela-landscape.png";
import AZImage from "../../../public/assets/az.png";
import Pay from "../../../public/assets/pay.png";
import Composify from "../../../public/assets/composify.jpg";
import ABC from "../../../public/assets/abc.png";
import UFC from "../../../public/assets/ufc-fantasy.jpg";
import Atlas from "../../../public/assets/atlas.png";
import LivroCaixa from "../../../public/assets/livrocaixa.png";
import Cereagro from "../../../public/assets/cereagro-logo.png";
import Nano from "../../../public/assets/nano-logo.jpeg";
import DigitalFavela from "../../../public/assets/digitalfavela-logo.jpeg";
import Frigelar from "../../../public/assets/frigelar.png";
import Scaffold from "../../../public/assets/scaffold.jpeg";

export type DataModalPortfolioKey =
  | "az"
  | "atlas"
  | "pay"
  | "composify"
  | "ufc"
  | "abc"
  | "livrocaixa"
  | "cereagro"
  | "digitalfavela"
  | "nano"
  | "scaffold"
  | "frigelar";

type DataModalPortfolioItem = {
  title: string;
  titleModal: string;
  image: StaticImageData;
  imageModal: StaticImageData;
  description: string;
  work: string;
  features: string[];
  link: string;
  stack?: string;
};

type DataModalPortfolioByLanguage = Record<
  Language,
  Record<DataModalPortfolioKey, DataModalPortfolioItem>
>;

export const DataModalPortfolio: DataModalPortfolioByLanguage = {
  pt: {
    frigelar: {
      title: "Frigelar",
      titleModal: "Plataforma de Vendas para Representantes (ecommerce)",
      image: Frigelar,
      imageModal: Frigelar,
      stack: "Flutter",
      description:
        "Plataforma ecommerce para uso de representantes de vendas da empresa, com funcionalidade de pesquisa de produtos, visualizar promoções por regiões, solicitar quantidade de produtos, geração de pedidos/orçamento com controle de carrinho de compras!",
      work: "O aplicativo foi desenvolvido em Flutter para as plataformas web e mobile (Android/iOS), com a responsabilidade de desenvolver features para o projeto",
      features: [
        "Desenvolvimento de tela com integração com a API da empresa",
        "Desenvolvimento das telas utilizando Figma e em conjunto com o Claude Code",
      ],
      link: "",
    },
    az: {
      title: "Aluno AZ",
      titleModal: "Aluno AZ",
      stack: "React/React Native",
      image: AZImage,
      imageModal: AlunoAzLandscape,
      description:
        "Esse é o Super App para o aluno da Plataforma AZ de Aprendizagem. Nele você poderá realizar a Folha AZ, Simulados On-line, consultar gabaritos e videorresposta, além de ter acesso as videoaulas e muito mais!",
      work: "No aplicativo era responsável pelo desenvolvimento de novas features e manutenções.",
      features: [
        "Desenvolvimento do Push Notification do zero no aplicativo",
        "Refatoração completa do layout e funcionamento das avaliações",
        "Manutenções no CI/CD com fastlane no firebase e Bitrise",
        "Criação de novas marcas no White label do aplicativo",
      ],
      link: "https://play.google.com/store/apps/details?id=com.azmobile&hl=pt_BR&gl=US",
    },
    atlas: {
      title: "Atlas Governance",
      titleModal: "Atlas Governance",
      stack: "Expo/React Native",
      image: Atlas,
      imageModal: AtlasLandscape,
      description:
        "Gerencie conselho, comitês e realize assembleias em ambientes 100% digitais e seguros com as plataformas Atlas Governance!",
      work: "Realizado atualizações no aplicativo",
      features: [
        "Atualizado a versão do Expo com EAS",
        "Atualização da versão do react-native",
        "Atualização da versão do SDK 33 do Android para subir novas versões na loja da Play Store",
        "Atualização no Podfile para funcionamento correto com as novas atualizações feitas",
      ],
      link: "https://welcome.atlasgov.com/",
    },
    pay: {
      title: "Lex Pay",
      titleModal: "Lex Pay (Não lançado no mercado)",
      stack: "React/React Native",
      image: Pay,
      imageModal: LexPayLandscape,
      description:
        "Aplicativo e sistema web para gerenciamento e pagamentos de materiais escolares, excursões e matrículas entre responsável e escola. ",
      work: "Desenvolvimento completo da plataforma",
      features: [
        "Desenvolvimento do site Lex Pay Client integrado com o aplicativo Aluno AZ a partir de webview. Site feito em mobile-only",
        "Desenvolvimento do sistema web admin para gerenciar vendas e pagamentos",
        "Integrado com pagamentos via pix, cartão de crédito e boleto",
        "Integração da plataforma do cliente dentro do aplicativo AZ com o funcionamento do Push Notification do app para acessar diretamento o módulo do Lex Pay",
      ],
      link: "",
    },
    composify: {
      title: "Composify PRO",
      titleModal: "Composify PRO",
      stack: "React/Next.JS",
      image: Composify,
      imageModal: ComposifyLandscape,
      description:
        "O Composify é uma plataforma que conecta compositores, artistas e fãs de música na descoberta do próximo hit!",
      work: "Desenvolvimento do sistema admin para gerenciamento de músicas e artistas feita pela gravadora",
      features: [
        "Desenvolvimento da seção de usuários e artistas",
        "Desenvolvimento do sistemas de pastas com exibição das músicas em tabelas, igual ao funcionamento do google drive",
        "Desenvolvimento de modal com todos os detalhes da música selecionada",
      ],
      link: "https://composify.com.br/",
    },
    ufc: {
      title: "UFC Fantasy",
      titleModal: "UFC Fantasy",
      image: UFC,
      imageModal: UfcLandscape,
      stack: "React/Next.JS",
      description:
        "Plataforma para realizar palpites e ganhar prêmios com as lutas do UFC",
      work: "Manutenções e desenvolvimento de novas features na plataforma",
      features: [
        "Correções das listagens de card com os lutadores",
        "Desenvolvimento de compartilhar imagem com todos os palpites feito pelo usuário",
      ],
      link: "https://www.ufcfantasy.com.br/",
    },
    abc: {
      title: "Banco ABC",
      titleModal: "Banco ABC - Crédito Consignado",
      image: ABC,
      imageModal: BancoAbcLandscape,
      stack: "React/Next.JS",
      description:
        "Sistema web para gerenciamento e contrato de crédito consignado com o banco ABC",
      work: "Manutenções e desenvolvimento de novas features na plataforma",
      features: [
        "Implementação de validação de documentos do usuário para solicitar a abertura de crédito consignado com biblioteca de terceiros",
        "Manutenção de formulários para abertura/edição de crédito consignado",
      ],
      link: "https://www.abcbrasil.com.br/",
    },
    livrocaixa: {
      title: "Livro Caixa",
      titleModal: "Livro Caixa",
      stack: "React/React Native",
      image: LivroCaixa,
      imageModal: LivroCaixaLandscape,
      description:
        "Aplicativo pensado para aqueles que ainda utilizam um livro ou caderno para escrever as movimentações de caixa, informando a data, produto e valor.",
      work: "Desenvolvimento de projeto completo pessoal publicado na Play Store",
      features: [
        "Desenvolvimento de login com cadastro no firebase",
        "Desenvolvimento de listagem de entradas e saídas do caixa",
        "Desenvolvimento de relatórios",
        "Desenvolvimento de exportação em excel dos relatórios",
      ],
      link: "https://play.google.com/store/apps/details?id=com.reacttsproject",
    },
    cereagro: {
      title: "Cereagro",
      titleModal: "Cereagro",
      stack: "React/React Native",
      image: Cereagro,
      imageModal: CereagroLandscape,
      description:
        "Sistema admin e aplicativo para geração de contratos na área de agronomia, com cadastros de clientes, produtos, usuários, transportadoras, etc.",
      work: "Desenvolvimento de novas features e alteração no projeto.",
      features: [
        "Refatoração do cadastro de contratos",
        "Novos formatos de relatórios",
        "Cadastro e realização de calculos para fechamento do contrato",
        "Desenvolvimento inicial do aplicativo em React Native",
      ],
      link: "https://www.cereagro.com.br/",
    },
    digitalfavela: {
      title: "Digital Favela",
      titleModal: "Digital Favela",
      stack: "React/Next.JS",
      image: DigitalFavela,
      imageModal: DigitalFavelaLandscape,
      description:
        "Plataforma de cadastro de campanhas e influencers da favela, conectando criadores e criadoras de conteúdo das periferias com diversas empresas.",
      work: "Desenvolvimento de novo sistema para cadastro de influencers e campanhas das empresas.",
      features: [
        "Desenvolvimento do cadastro do influencer e campanhas",
        "Desenvolvimento para raspagem de dados nas principais redes sociais (Instagram, Tiktok, Youtube, Kwai)",
      ],
      link: "https://digitalfavela.com.br",
    },
    nano: {
      title: "Nano",
      titleModal: "Nano Influenciadores",
      stack: "React/Next.JS",
      image: Nano,
      imageModal: NanoLandscape,
      description:
        "Plataforma de cadastro de campanhas e influencers, sendo que o influencer consegue obter prêmios com as parcerias geradas.",
      work: "Desenvolvimento de novo sistema para cadastro de influencers e campanhas das empresas.",
      features: [
        "Desenvolvimento do cadastro do influencer e campanhas",
        "Desenvolvimento para raspagem de dados do Instagram",
        "Desenvolvimento do OptIn com o Facebook - Meta",
        "Desenvolvimento de ranking e pontuação através das postagens do influenciador relacionadas a campanha",
      ],
      link: "https://www.nanoinfluenciadores.com.br/",
    },
    scaffold: {
      title: "Scaffold Education",
      titleModal: "Scaffold Education",
      stack: "React/React Native",
      image: Scaffold,
      imageModal: Scaffold,
      description: "Plataforma de aprendizagem corporativa - LMS, LXP e EAD",
      work: "Desenvolvimento de aplicativo de educação para diversas empresas",
      features: [
        "Criação/Publicação nas lojas de aplicativos white-label para empresas",
        "Desenvolvimento de features específicas para cada empresa",
        "Desenvolvimento de features global para todos as empresas",
        "Gerenciamento de pipeline (CI/CD Bitrise e Fastlane) para publicação em massa de todas as empresas para cada nova versão",
      ],
      link: "https://scaffoldeducation.com.br/",
    },
  },
  en: {
    frigelar: {
      title: "Frigelar",
      titleModal: "Sales Platform for Sales Representatives (ecommerce)",
      stack: "Flutter",
      image: Frigelar,
      imageModal: Frigelar,
      description:
        "Ecommerce platform for the company's sales representatives, with product search, promotions by region, requesting product quantities, and generating orders/quotes with shopping cart control!",
      work: "The app was built in Flutter for web and mobile (Android/iOS), with responsibility for developing features for the project",
      features: [
        "Screen development integrated with the company's API",
        "Screen development using Figma together with Claude Code",
      ],
      link: "",
    },
    az: {
      title: "Aluno AZ",
      titleModal: "Aluno AZ",
      stack: "React/React Native",
      image: AZImage,
      imageModal: AlunoAzLandscape,
      description:
        "This is the Super App for students of the AZ Learning Platform. In it, students can complete the AZ Sheet, take online mock exams, check answer keys and video answers, plus access video lessons and much more!",
      work: "Responsible for developing new features and maintenance on the app.",
      features: [
        "Built Push Notifications from scratch in the app",
        "Complete refactor of the layout and behavior of assessments",
        "CI/CD maintenance with fastlane on Firebase and Bitrise",
        "Creation of new brands in the app's white label",
      ],
      link: "https://play.google.com/store/apps/details?id=com.azmobile&hl=pt_BR&gl=US",
    },
    atlas: {
      title: "Atlas Governance",
      titleModal: "Atlas Governance",
      stack: "Expo/React Native",
      image: Atlas,
      imageModal: AtlasLandscape,
      description:
        "Manage boards, committees, and hold assemblies in 100% digital and secure environments with the Atlas Governance platforms!",
      work: "Performed updates on the app",
      features: [
        "Updated the Expo version with EAS",
        "Updated the react-native version",
        "Updated the Android SDK to version 33 to publish new releases on the Play Store",
        "Updated the Podfile for correct behavior with the new updates",
      ],
      link: "https://welcome.atlasgov.com/",
    },
    pay: {
      title: "Lex Pay",
      titleModal: "Lex Pay (Not released to market)",
      stack: "React/React Native",
      image: Pay,
      imageModal: LexPayLandscape,
      description:
        "App and web system for managing and paying for school materials, field trips, and enrollments between guardians and schools.",
      work: "Full platform development",
      features: [
        "Built the Lex Pay Client site integrated with the Aluno AZ app via webview. Mobile-only site",
        "Built the admin web system to manage sales and payments",
        "Integrated with pix, credit card, and boleto payments",
        "Integrated the client platform inside the AZ app, using the app's Push Notification to open the Lex Pay module directly",
      ],
      link: "",
    },
    composify: {
      title: "Composify PRO",
      titleModal: "Composify PRO",
      stack: "React/Next.JS",
      image: Composify,
      imageModal: ComposifyLandscape,
      description:
        "Composify is a platform that connects songwriters, artists, and music fans in the discovery of the next hit!",
      work: "Built the admin system for managing songs and artists on behalf of the record label",
      features: [
        "Built the users and artists section",
        "Built the folder system displaying songs in tables, similar to Google Drive",
        "Built a modal with all the details of the selected song",
      ],
      link: "https://composify.com.br/",
    },
    ufc: {
      title: "UFC Fantasy",
      titleModal: "UFC Fantasy",
      stack: "React/Next.JS",
      image: UFC,
      imageModal: UfcLandscape,
      description: "Platform to make predictions and win prizes on UFC fights",
      work: "Maintenance and development of new features on the platform",
      features: [
        "Fixed fighter card listings",
        "Built image sharing for all predictions made by the user",
      ],
      link: "https://www.ufcfantasy.com.br/",
    },
    abc: {
      title: "Banco ABC",
      titleModal: "Banco ABC - Payroll Loans",
      stack: "React/Next.JS",
      image: ABC,
      imageModal: BancoAbcLandscape,
      description:
        "Web system for managing and contracting payroll loans with Banco ABC",
      work: "Maintenance and development of new features on the platform",
      features: [
        "Implemented user document validation for payroll loan requests using a third-party library",
        "Maintained forms for opening/editing payroll loans",
      ],
      link: "https://www.abcbrasil.com.br/",
    },
    livrocaixa: {
      title: "Livro Caixa",
      titleModal: "Livro Caixa",
      stack: "React/React Native",
      image: LivroCaixa,
      imageModal: LivroCaixaLandscape,
      description:
        "App designed for people who still use a notebook or ledger to track cash flow, recording the date, product, and amount.",
      work: "Full personal project developed and published on the Play Store",
      features: [
        "Built login with Firebase sign-up",
        "Built cash inflow/outflow listings",
        "Built reports",
        "Built Excel export for reports",
      ],
      link: "https://play.google.com/store/apps/details?id=com.reacttsproject",
    },
    cereagro: {
      title: "Cereagro",
      titleModal: "Cereagro",
      stack: "React/React Native",
      image: Cereagro,
      imageModal: CereagroLandscape,
      description:
        "Admin system and app for generating contracts in the agronomy field, with client, product, user, and carrier registrations, among others.",
      work: "Development of new features and changes to the project.",
      features: [
        "Refactored contract registration",
        "New report formats",
        "Registration and calculations for closing contracts",
        "Initial development of the React Native app",
      ],
      link: "https://www.cereagro.com.br/",
    },
    digitalfavela: {
      title: "Digital Favela",
      titleModal: "Digital Favela",
      stack: "React/Next.JS",
      image: DigitalFavela,
      imageModal: DigitalFavelaLandscape,
      description:
        "Platform for registering campaigns and influencers from the favela, connecting content creators from underserved communities with various companies.",
      work: "Built a new system to register influencers and companies' campaigns.",
      features: [
        "Built influencer and campaign registration",
        "Built scraping of data from major social networks (Instagram, TikTok, YouTube, Kwai)",
      ],
      link: "https://digitalfavela.com.br",
    },
    nano: {
      title: "Nano",
      titleModal: "Nano Influenciadores",
      stack: "React/Next.JS",
      image: Nano,
      imageModal: NanoLandscape,
      description:
        "Platform for registering campaigns and influencers, where influencers can earn prizes from generated partnerships.",
      work: "Built a new system to register influencers and companies' campaigns.",
      features: [
        "Built influencer and campaign registration",
        "Built Instagram data scraping",
        "Built OptIn with Facebook - Meta",
        "Built ranking and scoring based on the influencer's campaign-related posts",
      ],
      link: "https://www.nanoinfluenciadores.com.br/",
    },
    scaffold: {
      title: "Scaffold Education",
      titleModal: "Scaffold Education",
      stack: "React/React Native",
      image: Scaffold,
      imageModal: Scaffold,
      description:
        "Corporate learning platform - LMS, LXP, and distance learning",
      work: "Development of an education app for multiple companies",
      features: [
        "Creation/publishing of white-label apps on app stores for companies",
        "Development of company-specific features",
        "Development of global features for all companies",
        "Pipeline management (CI/CD with Bitrise and Fastlane) for mass publishing across all companies on every new version",
      ],
      link: "https://scaffoldeducation.com.br/",
    },
  },
};
