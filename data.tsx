import {
  FaLinkedinIn,
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaFolderClosed,
  FaHouseChimney,
  FaIdCard,
  FaClipboardList,
  FaUser,
} from "react-icons/fa6";

import {
  BookText,
  CodeSquare,
  HomeIcon,
  UserRound,
  Twitter,
  Rss,
  Twitch,
  Youtube,
  Crop,
  Pencil,
  Computer,
  Book,
  Rocket,
  Speech,
} from "lucide-react";

export const socialNetworks = [
  {
    id: 1,
    logo: <FaLinkedinIn size={30} strokeWidth={1} />,
    src: "https://www.linkedin.com/in/orangel-valdespino/",
  },
  {
    id: 2,
    logo: <FaGithub size={30} strokeWidth={1} />,
    src: "https://github.com/orangelvc93",
  },
  {
    id: 3,
    logo: <FaFacebook size={30} strokeWidth={1} />,
    src: "https://www.facebook.com/orangelenrique.valdespino",
  },
  {
    id: 4,
    logo: <FaInstagram size={30} strokeWidth={1} />,
    src: "https://www.instagram.com/orangelvc93/",
  },
  {
    id: 5,
    logo: <FaXTwitter size={30} strokeWidth={1} />,
    src: "#!",
  },
];

export const profesionalSkills = [
  {
    id: 1,
    name: "Figma",
    percentage: 70,
  },
  {
    id: 2,
    name: "Illustrator",
    percentage: 50,
  },
  {
    id: 3,
    name: "PhotoShop",
    percentage: 50,
  },
];

export const itemsNavbar = [
  {
    id: 1,
    title: "Inicio",
    icon: <FaHouseChimney size={25} color="#dedede" strokeWidth={1} />,
    link: "/",
  },
  {
    id: 2,
    title: "Sobre mi",
    icon: <FaIdCard size={25} color="#dedede" strokeWidth={1} />,
    link: "/about-me",
  },
  {
    id: 3,
    title: "Servicios",
    icon: <FaClipboardList size={25} color="#dedede" strokeWidth={1} />,
    link: "/services",
  },
  {
    id: 4,
    title: "Portafolio",
    icon: <FaFolderClosed size={25} color="#dedede" strokeWidth={1} />,
    link: "/portfolio",
  },
  {
    id: 5,
    title: "Contacto",
    icon: <FaUser size={25} color="#dedede" strokeWidth={1} />,
    link: "/contact",
  },
];

export const dataProfessionalExperience = [
  {
    id: 1,
    title: "Especialista Técnico en Soluciones MPS",
    subtitle: "GENSYSTEMS S.A",
    description:
      "Experiencia en análisis, diseño e implementación de contratos de impresión, manejando distintos softwares con el fín de garantizar la satisfacción de los clientes y la optimización de los costos.",
    date: "Ene. 2019 Act.",
  },
  {
    id: 2,
    title: "Diseñador gráfico / Atención al cliente / Servicio técnico",
    subtitle: "Punto Exacto",
    description:
      "Profesional versátil con conocimientos destacados en atención al cliente, asegurando siempre la satisfacción del usuario, y con habilidades creativas y técnicas en diseño gráfico personalizado.",
    date: "Nov. 2017  Nov. 2018",
  },
  {
    id: 3,
    title: "Consultor Staff en Proyectos TI / Administrador de Base de datos",
    subtitle: "Tecnology Consulting Solution, C.A. (TCS)",
    description:
      "Profesional responsable de la gestión y supervisión de bases de datos, garantizando su correcto uso según las necesidades del personal empresarial. Encargado de la creación de enlaces entre tablas y campos para optimizar la obtención de información, también es un consultor especializado en proyectos de Tecnología de la Información (TI), enfocado en mejorar la eficiencia y el rendimiento del manejo de datos.",
    date: "Abr. 2017 Oct. 2017",
  },
  {
    id: 4,
    title: "Especialista en Soporte Técnico",
    subtitle: "Servicios Creativos",
    description:
      "Soporte técnico integral a empresas asignadas, resolviendo problemas específicos relacionados con servidores, incluyendo el acceso a carpetas y la creación y administración de usuarios en la red. Es un instalador experto de programas e impresoras, además de gestor de soluciones para problemas informáticos.",
    date: "Nov. 2015 Abr. 2017",
  },
  {
    id: 5,
    title: "Analista Programador",
    subtitle: "Soluciones Alegajos C.A",
    description:
      "Supervisa y optimiza el uso de datos en COMPIERE, un aplicativo de código abierto para ERP y CRM enfocado en empresas de pequeño y mediano tamaño. Crea informes visuales con IReport, contribuyendo al crecimiento de las empresas y aumentando la eficiencia del negocio con reportes claros.",
    date: "Dic. 2014 Jun. 2015",
  },
];

export const dataEducativeExperience = [
  {
    id: 1,
    title: "React - La Guía Completa: Hooks Context Redux MERN",
    subtitle: "UDEMY",
    description:
      "Desarrollo Full-Stack MERN, SSR, Gatsby, Next.js, React, Styled Components, Hooks (useReducer, useContext), Fetch API, Axios, Local Storage, CRUD, Netlify, Heroku, Vercel, MongoDB, Express.js, Node.js.",
    date: "Cursando",
  },
  {
    id: 2,
    title: "Diseño de interfaz (UI) con Figma",
    subtitle: "UDEMY",
    description:
      "Experto en diseño de interfaz de usuario para aplicaciones móviles, Capacidad para desarrollar prototipos navegables y animados,Dominio avanzado de Figma, con habilidad para crear componentes y sistemas de diseño profesionales.",
    date: "Ene. 2023",
  },
  {
    id: 3,
    title: "Ingeniero en Informática",
    subtitle: "Universidad Nacional Experimental Rómulo Gallegos (UNERG)",
    description: "Caracas.",
    date: "2017",
  },
  {
    id: 4,
    title: "TSU Administración mención Informática",
    subtitle:
      "Instituto Universitario de Tecnología Elías Calixto Pompa (IUTECP)",
    description: "Caracas.",
    date: "2015",
  },
];

export const dataCounter = [
  {
    id: 0,
    endCounter: 10,
    text: "Años de experiencia",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 1,
    endCounter: 80,
    text: "Clientes satisfechos",
    lineRight: true,
    lineRightMobile: false,
  },
  {
    id: 2,
    endCounter: 220,
    text: "Proyectos finalizados",
    lineRight: true,
    lineRightMobile: true,
  },
  {
    id: 3,
    endCounter: 30,
    text: "Premios ganadores",
    lineRight: false,
    lineRightMobile: false,
  },
];

export const serviceData = [
  {
    icon: <Crop />,
    title: "Branding",
    src: "/branding.jpg",
    description:
      "Desarrollo de una identidad de marca sólida y coherente, incluyendo diseño de logotipo, colores y elementos visuales",
  },
  {
    icon: <Pencil />,
    title: "Diseño web",
    src: "/diseñoweb.jpg",
    description:
      "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
  },
  {
    icon: <Computer />,
    title: "Desarrollo web",
    src: "/desarrolloweb.jpg",
    description:
      "Diseño y desarrollo de sitios web a medida, adaptados a tus necesidades",
  },
  {
    icon: <Book />,
    title: "Copywriting",
    src: "/copywriting.jpg",
    description:
      "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
  },
  {
    icon: <Rocket />,
    title: "SEO",
    src: "/seo.jpg",
    description:
      "Optimización de tu presencia en línea mediante estrategias de SEO avanzadas, ",
  },
];

export const dataPortfolio = [
  {
    id: 1,
    title: "Sitio Web Corporativo Gensystems S.A.",
    image: "/gensystemsweb.webp",
    description:
      "Sitio web oficial de Gensystems S.A., empresa ecuatoriana de soluciones tecnológicas. Presenta información sobre sus servicios y productos como servidores, impresoras, laptops, redes y telefonía. Incluye blog, formulario de contacto, redes sociales e interfaz responsive, desarrollado con tecnologías modernas.",
    urlGithub: "https://github.com/orangelvc93/gensystems-front",
    urlDemo: "https://gensystems.netlify.app/",
    tags: [
      "#React",
      "#Tailwind",
      "#TypeScript",
      "#Axios",
      "#framer-motion",
      "#react-dom",
      "#Zustand",
      "#Vite",
    ],
  },
  {
    id: 2,
    title: "Sitio Web The Josper BarberShop",
    image: "/berbershop.webp",
    description:
      "Sitio web de The Josper BarberShop, barbería moderna que ofrece cortes, afeitados y cuidados masculinos. Incluye sección de servicios, reservas, galería de estilos, redes sociales y diseño adaptable a dispositivos móviles.",
    urlGithub: "https://github.com/orangelvc93/barber-shop",
    urlDemo: "https://barber-shop-josper.netlify.app/",
    tags: [
      "#React",
      "#Tailwind",
      "#TypeScript",
      "#Vite",
      "#Zustand",
      "#framer-motion",
    ],
  },
  {
    id: 3,
    title: "Sitio Web Odonto Estética",
    image: "/odontoestetica.webp",
    description:
      "Sitio web de Odonto Estética, clínica especializada en servicios odontológicos y tratamientos estéticos. Incluye información de servicios, contacto, galería de resultados y diseño adaptable a móviles.",
    urlGithub: "https://github.com/orangelvc93/P_odontologia_estetica",
    urlDemo: "https://odontologia-estetica.netlify.app/",
    tags: [
      "#React",
      "#Tailwind",
      "#TypeScript",
      "#Vite",
      "#EmailJS",
      "#Zustand",
    ],
  },
  {
    id: 4,
    title: "Calorie Tracker",
    image: "/Contador de calorias.png",
    description:
      "Este es un proyecto web que permite realizar un cálculo de las calorías consumidas y quemadas, según los elementos que se vayan ingresando. El proyecto permite editar, cortar, eliminar datos y todo se almacena en el localStorage. Además, cuenta con un modo oscuro y se adapta a dispositivos móviles.",
    urlGithub: "https://github.com/orangelvc93/OV_Calorie_Tracker",
    urlDemo: "https://contador-calorias-ov.netlify.app/",
    tags: [
      "#React",
      "#Tailwind",
      "#TypeScript",
      "#uuidv4",
      "#Vite",
      "#useReducer",
      "#react-icons",
    ],
  },
  {
    id: 5,
    title: "App de Citas Veterinarias",
    image: "/image-6.jpg",
    description:
      "Aplicación web para agendar citas veterinarias. Permite registrar pacientes, seleccionar fecha y hora, editar o eliminar citas. Almacena los datos en localStorage y es compatible con dispositivos móviles.",
    urlGithub: "https://github.com/veterinaria-app/citas-vet",
    urlDemo: "https://react-cites-vite.netlify.app/",
    tags: ["#React", "#Tailwind", "#JavaScript", "#Vite", "#localStorage"],
  },
  //   {
  //     id: 6,
  //     title: "Web Dinámica",
  //     image: "/image-6.jpg",
  //     description: "",
  //     urlGithub: "#!",
  //     urlDemo: "#!",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //   },
  //   {
  //     id: 7,
  //     title: "Dark Web ",
  //     image: "/image-7.jpg",
  //     description: "",
  //     urlGithub: "#!",
  //     urlDemo: "#!",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //   },
  //   {
  //     id: 8,
  //     title: "E-commerce web",
  //     image: "/image-8.jpg",
  //     description: "",
  //     urlGithub: "#!",
  //     urlDemo: "#!",
  //     tags: ["HTML", "CSS", "JavaScript"],
  //   },
];

export const dataTestimonials = [
  {
    id: 1,
    name: "George Snow",
    description:
      "¡Increíble plataforma! Los testimonios aquí son genuinos y me han ayudado a tomar decisiones informadas. ¡Altamente recomendado!",
    imageUrl: "/profile1.png",
  },
  {
    id: 2,
    name: "Juan Pérez",
    description:
      "Me encanta la variedad de testimonios disponibles en esta página. Es inspirador ver cómo otras personas han superado desafíos similares a los míos. ¡Gracias por esta invaluable fuente de motivación!",
    imageUrl: "/profile2.png",
  },
  {
    id: 3,
    name: "María García",
    description:
      "Excelente recurso para obtener opiniones auténticas sobre diferentes productos y servicios. Me ha ayudado mucho en mis compras en línea. ¡Bravo por este sitio!",
    imageUrl: "/profile3.png",
  },
  {
    id: 4,
    name: "Laura Snow",
    description:
      "¡Qué descubrimiento tan fantástico! Los testimonios aquí son honestos y detallados. Me siento más seguro al tomar decisiones después de leer las experiencias compartidas por otros usuarios.",
    imageUrl: "/profile4.png",
  },
  {
    id: 5,
    name: "Carlos Sánchez",
    description:
      "Una joya en la web. Los testimonios son fáciles de encontrar y están bien organizados. ¡Definitivamente mi destino número uno cuando necesito referencias confiables!",
    imageUrl: "/profile5.png",
  },
  {
    id: 6,
    name: "Antonio Martínez",
    description:
      "¡Fantástico recurso para aquellos que buscan validación antes de tomar decisiones importantes! Los testimonios aquí son veraces y realmente útiles. ¡Gracias por simplificar mi proceso de toma de decisiones!",
    imageUrl: "/profile6.png",
  },
];
