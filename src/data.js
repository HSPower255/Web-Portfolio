//Icons
import {
  FiLinkedin,
  FiGithub,
  FiPhone,
  FiMail,
  FiMapPin,
} from 'react-icons/fi'

//Projects images
import Project1 from './assets/img/projects/p1.webp'
import Project2 from './assets/img/projects/p2.webp'
import Project3 from './assets/img/projects/p3.webp'
import Project4 from './assets/img/projects/p4.webp'
import Project5 from './assets/img/projects/p5.webp'

//Skills images
import SkillImg1 from './assets/img/skills/html5.png'
import SkillImg2 from './assets/img/skills/css3.png'
import SkillImg3 from './assets/img/skills/js.png'
import SkillImg4 from './assets/img/skills/reactjs.png'
import SkillImg5 from './assets/img/skills/nextjs.png'
import SkillImg6 from './assets/img/skills/nodejs.png'
import SkillImg7 from './assets/img/skills/git.png'
import SkillImg8 from './assets/img/skills/mongodb.png'
import SkillImg9 from './assets/img/skills/typescript.png'
import SkillImg10 from './assets/img/skills/sql.png'

//Navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
  {
    name: 'contact',
    href: 'contact',
  },
]

//Social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/santiagotourn/',
  },
  {
    icon: <FiMail />,
    href: 'https://mail.google.com/mail/u/0/#inbox?compose=VpCqJQvTkPMQBbkRsngJfLwJLSGqHhZXpjVVPwJXNmzTpvgDsMpBbfCgmknKLKHpZkQmNkg',
  },
  {
    icon: <FiGithub />,
    href: 'https://github.com/HSPower255',
  },
  {
    icon: <FiPhone />,
    href: 'https://api.whatsapp.com/send?phone=59899076458',
  },
]

//Projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'SaludArmonia E-Shop',
    description: 'Online store developed using React, NextJS, NodeJS, and StyledComponents. This store displays the content created by the store owner in the administration panel. In this store, you will find product listing, featured product, category page with filters, shopping cart, and a search function. The design is fully responsive, making it easily usable for any sales venture.',
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/SaludArmonia-E-Shop-Front',
    webpage: 'https://salud-armonia-e-shop-front.vercel.app',
  },
  {
    id: '2',
    image: Project2,
    name: 'E-Shop Admin Panel',
    description: 'Administration panel for an online store developed using React, NextJS, Tailwind CSS, MongoDB, and AWS. The user can create products, assign categories, receive orders, assign featured products, among other functionalities.',
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/E-Commerce-Admin-Panel',
    webpage: 'https://github.com/HSPower255/E-Commerce-Admin-Panel',
  },
  {
    id: '3',
    image: Project3,
    name: 'Real Time Chat App',
    description: 'Web application developed using TypeScript, NestJS, and Tailwind CSS that allows users to sign in with Google, send friend requests, and chat in real-time. As the sole developer, I designed the database schema, implemented server-side APIs, and built the client-side UI.',
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/WebChatApp',
    webpage: 'https://webchat-by-santiago-tourn.vercel.app/login',
  },
  {
    id: '4',
    image: Project4,
    name: 'Online Portfolio',
    description: 'Web portfolio developed using React and Tailwind. The page features a fully responsive design, a contact form, among other functionalities.',
    category: 'frontend',
    gitrepo: '',
    webpage: '#',
  },
  {
    id: '5',
    image: Project5,
    name: 'E-Shop RESTful API',
    description: `Backend of an E-commerce RESTful API using MongoDB, Express, Node.js, and JavaScript. I implemented features such as user authentication, admin roles, product categories, individual products, and more. This API is easily adaptable for full-stack projects for online product selling websites.`,
    category: 'backend',
    gitrepo: 'https://github.com/HSPower255/API-E-Commerce.',
    webpage: 'https://github.com/HSPower255/API-E-Commerce.',
  },
]

//Projects
export const projectsNav = [
  {
    name: 'all'
  },
  {
    name: 'frontend'
  },
  {
    name: 'backend'
  },
]

//Skills
export const skills = [
  {
    image: SkillImg1,
    name: 'HTML'
  },
  {
    image: SkillImg2,
    name: 'CSS'
  },
  {
    image: SkillImg3,
    name: 'JavaScript'
  },
  {
    image: SkillImg4,
    name: 'React'
  },
  {
    image: SkillImg5,
    name: 'NextJS'
  },
  {
    image: SkillImg6,
    name: 'NodeJS'
  },
  {
    image: SkillImg7,
    name: 'Git'
  },
  {
    image: SkillImg8,
    name: 'MongoDB'
  },
  {
    image: SkillImg9,
    name: 'TypeScript'
  },
  {
    image: SkillImg10,
    name: 'SQL'
  },
]

//Contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at tournsantiago5@gmail.com',
  },
  {
    icon: <FiPhone />,
    title: 'Prefer phone?',
    subtitle: 'Send me a message or call me.',
    description: '+598 99 076 458',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Montevideo, Uruguay.',
    description: 'Tristán Narvaja',
  },
]
