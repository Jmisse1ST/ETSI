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

const faculdades = [
  { name: 'ETSI', description: 'Bem vindo a faculdade de ciencias', to: "/", icon: ChartPieIcon },
  { name: 'AP', description: 'AP', to: "/", icon: CursorArrowRaysIcon },
  { name: 'GE', description: 'GE', to: "/", icon: CursorArrowRaysIcon },
  { name: 'EN', description: 'EN', to: "/", icon: CursorArrowRaysIcon },
  { name: 'RID', description: 'RID', to: "/", icon: CursorArrowRaysIcon }
];



export {
  people,
  whoWeAre,
  products,
  faculdades
};