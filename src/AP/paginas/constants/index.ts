import { ChartPieIcon, CursorArrowRaysIcon } from '@heroicons/react/24/outline';

const people = [
  {
    name: 'Jemisse Macuacua',
    role: 'Founder / Software Developer And CTO',
    imageUrl: "src/assets/People/jemisse.jpeg",
    url: 'https://www.linkedin.com/in/jemisse-macu%C3%A1cua-5999b62bb/',
  },
  {
    name: 'Fabiao Mainato',
    role: 'Co-Founder / Software Developer And Product Manager',
    imageUrl: "src/assets/People/fabio_blue.png",
    url: 'https://fabiaomainato.vercel.app/',
    alt: 'Fabiao Mainato',
    smallImage: true,
  },
  {
    name: 'Layton Tesoura',
    role: 'Designer / Graphic Designer',
    imageUrl: "src/assets/People/Layton.png",
    url: ''
  },
];

const whoWeAre = {
  title: 'Quem Somos?',
  description: 'Somos um grupo dinâmico de indivíduos apaixonados por tecnologia e comprometidos em oferecer as melhores experiências para a comunidade acadêmica.'
};

const products = [
  { name: 'Testes', description: 'Consulte as datas das suas avaliações', to: "/testes", icon: ChartPieIcon },
  { name: 'Trabalhos', description: 'Consulte as datas de entrega dos seus trabalhos', to: "/trabalhos", icon: CursorArrowRaysIcon }
];

const productsAP = [
  { name: 'Testes', description: 'Consulte as datas das suas avaliações', to: "/testesAP", icon: ChartPieIcon },
  { name: 'Trabalhos', description: 'Consulte as datas de entrega dos seus trabalhos', to: "/trabalhosAP", icon: CursorArrowRaysIcon }
];

const productsGE = [
  { name: 'Testes', description: 'Consulte as datas das suas avaliações', to: "/testesGE", icon: ChartPieIcon },
  { name: 'Trabalhos', description: 'Consulte as datas de entrega dos seus trabalhos', to: "/trabalhosGE", icon: CursorArrowRaysIcon }
];

const productsEN = [
  { name: 'Testes', description: 'Consulte as datas das suas avaliações', to: "/testesEN", icon: ChartPieIcon },
  { name: 'Trabalhos', description: 'Consulte as datas de entrega dos seus trabalhosEN', to: "/trabalhosEN", icon: CursorArrowRaysIcon }
];

const productsRID = [
  { name: 'Testes', description: 'Consulte as datas das suas avaliações', to: "/testesRID", icon: ChartPieIcon },
  { name: 'Trabalhos', description: 'Consulte as datas de entrega dos seus trabalhos', to: "/trabalhosRID", icon: CursorArrowRaysIcon }
];


const faculdades = [
  { name: 'AP', description: 'AP', to: "/homeAP", icon: CursorArrowRaysIcon },
  { name: 'GE', description: 'GE', to: "/homeGE", icon: CursorArrowRaysIcon },
  { name: 'EN', description: 'EN', to: "/homeEN", icon: CursorArrowRaysIcon },
  { name: 'RID', description: 'RID', to: "/homeRID", icon: CursorArrowRaysIcon }
];

const faculdadesAP = [
  { name: 'ETSI', description: 'AP', to: "/", icon: CursorArrowRaysIcon },
  { name: 'GE', description: 'GE', to: "/homeGE", icon: CursorArrowRaysIcon },
  { name: 'EN', description: 'EN', to: "/homeEN", icon: CursorArrowRaysIcon },
  { name: 'RID', description: 'RID', to: "/homeRID", icon: CursorArrowRaysIcon }
];

const faculdadesGE = [
  { name: 'ETSI', description: 'AP', to: "/", icon: CursorArrowRaysIcon },
  { name: 'AP', description: 'AP', to: "/homeAP", icon: CursorArrowRaysIcon },
  { name: 'EN', description: 'EN', to: "/homeEN", icon: CursorArrowRaysIcon },
  { name: 'RID', description: 'RID', to: "/homeRID", icon: CursorArrowRaysIcon }
];

const faculdadesRID = [
  { name: 'ETSI', description: 'AP', to: "/", icon: CursorArrowRaysIcon },
  { name: 'AP', description: 'AP', to: "/homeAP", icon: CursorArrowRaysIcon },
  { name: 'EN', description: 'EN', to: "/homeEN", icon: CursorArrowRaysIcon },
  { name: 'GE', description: 'GE', to: "/homeGE", icon: CursorArrowRaysIcon }
];

const faculdadesEN = [
  { name: 'ETSI', description: 'AP', to: "/", icon: CursorArrowRaysIcon },
  { name: 'AP', description: 'AP', to: "/homeAP", icon: CursorArrowRaysIcon },
  { name: 'GE', description: 'GE', to: "/homeGE", icon: CursorArrowRaysIcon },
  { name: 'RID', description: 'RID', to: "/homeRID", icon: CursorArrowRaysIcon }
];


export {
  people,
  whoWeAre,
  products,
  faculdades,
  productsAP,
  productsRID,
  productsGE,
  productsEN,
  faculdadesAP,
  faculdadesRID,
  faculdadesEN,
  faculdadesGE
};