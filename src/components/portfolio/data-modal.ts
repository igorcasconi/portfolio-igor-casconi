import AlunoAzLandscape from "../../../public/assets/aluino-az-landscape.jpg";
import LexPayLandscape from "../../../public/assets/lex-pay-landscape.png";
import AtlasLandscape from "../../../public/assets/atlas-landscape.jpg";
import BancoAbcLandscape from "../../../public/assets/bancoabc-landscape.png";
import UfcLandscape from "../../../public/assets/ufc-fantasy-landscape.jpg";
import LivroCaixaLandscape from "../../../public/assets/livrocaixa-landscape.png";
import ComposifyLandscape from "../../../public/assets/composify-landscape.png";
import AZImage from "../../../public/assets/az.png";
import Pay from "../../../public/assets/pay.png";
import Composify from "../../../public/assets/composify.jpg";
import ABC from "../../../public/assets/abc.png";
import UFC from "../../../public/assets/ufc-fantasy.jpg";
import Atlas from "../../../public/assets/atlas.png";
import LivroCaixa from "../../../public/assets/livrocaixa.png";

export type DataModalPortfolioKey =
  | "az"
  | "atlas"
  | "pay"
  | "composify"
  | "ufc"
  | "abc"
  | "livrocaixa";

export const DataModalPortfolio = {
  az: {
    title: "Aluno AZ",
    titleModal: "Aluno AZ",
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
    link: "https://welcome.atlasgov.com/",
  },
  composify: {
    title: "Composify PRO",
    titleModal: "Composify PRO",
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
    description:
      "Plataforma para realizar palpites e ganhar prêmios com as lutas do UFC",
    work: "Manutenções e desenvolvimento de novas features na plataforma",
    features: [
      "Correções das listagens de card com os lutadores",
      "Desenvolvimento de compartilhar imagem com todos os palpites feito pelo usuário",
    ],
    link: "https://composify.com.br/",
  },
  abc: {
    title: "Banco ABC",
    titleModal: "Banco ABC - Crédito Consignado",
    image: ABC,
    imageModal: BancoAbcLandscape,
    description:
      "Sistema web para gerenciamento e contrato de crédito consignado com o banco ABC",
    work: "Manutenções e desenvolvimento de novas features na plataforma",
    features: [
      "Implementação de validação de documentos do usuário para solicitar a abertura de crédito consignado com biblioteca de terceiros",
      "Manutenção de formulários para abertura/edição de crédito consignado",
    ],
    link: "https://composify.com.br/",
  },
  livrocaixa: {
    title: "Livro Caixa",
    titleModal: "Livro Caixa",
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
};
