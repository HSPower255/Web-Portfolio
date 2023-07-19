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
    name_en: 'home',
    name_es: 'inicio',
    href: 'home',
  },
  {
    name_en: 'about',
    name_es: 'sobre mí',
    href: 'about',
  },
  {
    name_en: 'portfolio',
    name_es: 'portafolio',
    href: 'portfolio',
  },
  {
    name_en: 'contact',
    name_es: 'contacto',
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
    name_en: 'SaludArmonia E-Shop',
    name_es: 'SaludArmonia Tienda Online',
    description_en: 'Online store developed using React, NextJS, NodeJS, and StyledComponents. This store displays the content created by the store owner in the administration panel. In this store, you will find product listing, featured product, category page with filters, shopping cart, and a search function. The design is fully responsive, making it easily usable for any sales venture.',
    description_es: 'Tienda en línea desarrollada con React, NextJS, NodeJS y StyledComponents. Esta tienda muestra el contenido creado por el propietario de la tienda en el panel de administración. En esta tienda encontrarás listado de productos, productos destacados, página de categoría con filtros, carrito de compras y una función de búsqueda. El diseño es completamente responsive, lo que la hace fácilmente utilizable para cualquier negocio de ventas.',
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/SaludArmonia-E-Shop-Front',
    webpage: 'https://salud-armonia-e-shop-front.vercel.app',
  },
  {
    id: '2',
    image: Project2,
    name_en: 'E-Shop Admin Panel',
    name_es: 'Admin Panel para tienda',
    description_en: 'Administration panel for an online store developed using React, NextJS, Tailwind CSS, MongoDB, and AWS. The user can create products, assign categories, receive orders, assign featured products, among other functionalities.',
    description_es: "Panel de administración para una tienda en línea desarrollada con React, NextJS, Tailwind CSS, MongoDB y AWS. El usuario puede crear productos, asignar categorías, recibir pedidos, asignar productos destacados, entre otras funcionalidades.",
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/E-Commerce-Admin-Panel',
    webpage: 'https://github.com/HSPower255/E-Commerce-Admin-Panel',
  },
  {
    id: '3',
    image: Project3,
    name_en: 'Real Time Chat App',
    name_es: 'Aplicación de Chat',
    description_en: 'Web application developed using TypeScript, NestJS, and Tailwind CSS that allows users to sign in with Google, send friend requests, and chat in real-time. I designed the database schema, implemented server-side APIs, and built the client-side UI.',
    description_es: "Aplicación web desarrollada con TypeScript, NestJS y Tailwind CSS que permite a los usuarios iniciar sesión con Google, enviar solicitudes de amistad y chatear en tiempo real. Diseñé el esquema de la base de datos, implementé las API del lado del servidor y construí la interfaz de usuario del lado del cliente.",
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/WebChatApp',
    webpage: 'https://webchat-by-santiago-tourn.vercel.app/login',
  },
  {
    id: '4',
    image: Project4,
    name_en: 'Online Portfolio',
    name_es: 'Portafolio Online',
    description_en: 'Web portfolio developed using React and Tailwind. The page features a fully responsive design, a contact form, among other functionalities.',
    description_es: "Portafolio web desarrollado con React y Tailwind. La página cuenta con un diseño completamente responsive, un formulario de contacto, entre otras funcionalidades.",
    category: 'frontend',
    gitrepo: 'https://github.com/HSPower255/Web-Portfolio',
    webpage: '#',
  },
  {
    id: '5',
    image: Project5,
    name_en: 'E-Shop RESTful API',
    name_es: 'E-Shop RESTful API',
    description_en: "Backend of an E-commerce RESTful API using MongoDB, Express, Node.js, and JavaScript. I implemented features such as user authentication, admin roles, product categories, individual products, and more. This API is easily adaptable for full-stack projects for online product selling websites.",
    description_es: "Backend de una API RESTful de comercio electrónico utilizando MongoDB, Express, Node.js y JavaScript. Implementé funcionalidades como autenticación de usuarios, roles de administrador, categorías de productos, productos individuales y más. Esta API es fácilmente adaptable para proyectos full-stack de sitios web de venta de productos en línea.",
    category: 'backend',
    gitrepo: 'https://github.com/HSPower255/API-E-Commerce.',
    webpage: 'https://github.com/HSPower255/API-E-Commerce.',
  },
]

//Projects
export const projectsNav = [
  {
    name_en: 'all',
    name_es: 'todos'
  },
  {
    name_en: 'frontend',
    name_es: 'frontend'
  },
  {
    name_en: 'backend',
    name_es: 'backend'
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
    title_en: 'Have a question?',
    title_es: '¿Tienes alguna pregunta?',
    subtitle_en: 'I am here to help you.',
    subtitle_es: 'Estoy aquí para ayudarte.',
    description_en: 'Email me at tournsantiago5@gmail.com',
    description_es: 'Envíame tournsantiago5@gmail.com',
    href: "https://mail.google.com/mail/u/0/#inbox?compose=VpCqJQvTkPMQBbkRsngJfLwJLSGqHhZXpjVVPwJXNmzTpvgDsMpBbfCgmknKLKHpZkQmNkg",
  },
  {
    icon: <FiPhone />,
    title_en: 'Prefer phone?',
    title_es: '¿Prefieres por teléfono?',
    subtitle_en: 'Send me a message or call me.',
    subtitle_es: 'Envíame un mensaje o llámame.',
    description_en: '+598 99 076 458',
    description_es: '+598 99 076 458',
    href: "https://api.whatsapp.com/send?phone=59899076458",
  },
  {
    icon: <FiMapPin />,
    title_en: 'Current Location',
    title_es: 'Ubicación actual',
    subtitle_en: 'Montevideo, Uruguay.',
    subtitle_es: 'Montevideo, Uruguay.',
    description_en: 'Tristán Narvaja',
    description_es: 'Tristán Narvaja',
    href: "https://www.google.com/maps/place/Dr.+Tristán+Narvaja,+11200+Montevideo,+Departamento+de+Montevideo/@-34.8999703,-56.1809692,17z/data=!3m1!4b1!4m6!3m5!1s0x959f804af9a46a6f:0x7ada8053198c1956!8m2!3d-34.8999703!4d-56.1787805!16s%2Fg%2F1tmcndtn?entry=ttu",
  },
]
