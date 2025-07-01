export const skillsData = [
  {
    name: "Diseño",
    skills: ["HTML", "CSS"],
  },
  {
    name: "Frontend",
    skills: ["Javascript", "React"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "PHP"],
  },
  {
    name: "Database",
    skills: ["MySQL", "MongoDB"],
  },
];

export const projectsData = [
  {
    id: "zona_remis",
    title: "Sitio Web para empresa",
    description:
      "Desarrollo de un sitio web informativo y responsivo para una empresa de transporte, enfocado en brindar detalles claros sobre los servicios ofrecidos y facilitar el contacto con los clientes.",

    skills: ["HTML", "CSS3", "React"],
    link: "https://sp-remisnn.vercel.app/",
    repositorio: "https://github.com/MarcoA36/sp_remisnn",
    features: [".", ,],
    // mainImage: "/images/zonaPage/banner_zona.webp",
    mainImage: "/images/zonaPage/thumbail.png",
    images: [
      {
        src: "/images/zonaPage/banner_zona.webp",
        description: "Banner",
      },
    ],
    date: "2025",
  },
  {
    id: "app_chofer",
    title: "Interfaz web para choferes",
    description:
      "Interfaz web mobile-first desarrollada con React.js, diseñada para que los choferes puedan gestionar sus viajes desde el celular.",
    skills: ["React", "Node.js", "Bootstrap", "MySQL"],
    link: "https://app-chofer-2025.vercel.app",
    repositorio: "https://github.com/MarcoA36/app_chofer_2025",
    features: [
      "Los choferes reciben viajes asignados directamente en la aplicación.",
      "El chofer puede actualizar su ubicación para que los administradores sepan en qué zona espera recibir viajes.",
      "Permite ingresar el destino y el importe del viaje.",
      "Registro de viajes completados y caja recaudada.",
      "Todos los cambios se reflejan instantáneamente en el sistema de administración.",
    ],
    // mainImage: "/images/appChofer/mapa.webp",
    mainImage: "/images/appChofer/thumbail.png",
    images: [
      {
        src: "/images/appChofer/mapa.webp",
        description: "Mapa con la ubicación",
      },
      {
        src: "/images/appChofer/home.png",
        description: "Pantalla principal",
      },
      {
        src: "/images/appChofer/viajes.webp",
        description: "Lista de viajes realizados con detalles.",
      },
    ],
    date: "2025",
  },
  {
    id: "sistema_de_gestion",
    title: "Sistema de Gestión para Empresa de transporte",
    description:
      "Sitio web desarrollado para optimizar la administración de una empresa de remis, con funciones de asignación de viajes, seguimiento en tiempo real y comunicación integrada entre administradores y choferes.",

    skills: ["React", "Node.js", "Bootstrap", "MySQL"],
    link: "https://agencia-2024-cliente.vercel.app/",
    repositorio: "https://github.com/MarcoA36/agencia_2024_cliente",
    features: [
      "Panel de administración para gestionar viajes y choferes.",
      "Comunicación en tiempo real con Socket.io.",
      "Mapa interactivo con la ubicación de los vehículos.",
      "Registro y liquidación de viajes con exportación en PDF.",
      "Autenticación segura con JWT.",
    ],
    // mainImage: "/images/sistemaGestion/tabla.png",
    mainImage: "/images/sistemaGestion/thumbail.png",
    images: [
      {
        src: "/images/sistemaGestion/tabla.png",
        description: "Vista de la tabla de viajes asignados a los choferes.",
      },
      {
        src: "/images/sistemaGestion/mapa.png",
        description: "Mapa con la ubicación de los vehículos.",
      },
      {
        src: "/images/sistemaGestion/modal.png",
        description: "Modal para asignar y editar información de un viaje.",
      },
      {
        src: "/images/sistemaGestion/moviles.png",
        description: "Gestión de móviles, activación y liquidación de viajes.",
      },
    ],
    date: "2024",
  },
  {
    id: "anotador_de_viajes",
    title: "Anotador de viajes para choferes",
    description:
    "Interfaz web mobile-first para que los choferes registren viajes, calculen ingresos y lleven un control diario de forma rápida y sencilla desde sus teléfonos.",
  
    skills: ["React", "Bootstrap"],
    link: "https://www.notechofer.online",
    repositorio: "https://github.com/MarcoA36/anotadorDeViajes",
    features: [
      "Permite anotar cada viaje con el importe y forma de pago.",
      "Muestra el total de ingresos y gastos del día (combustible y viajes fiados).",
      "Interfaz diseñada exclusivamente para usar como app en celulares.",
      "Permite modificar o borrar registros con facilidad.",
      "Permite exportar el detalle del turno en pdf para compartir o almacenar.",
    ],
    // mainImage: "/images/anotador/home.png",
    mainImage: "/images/anotador/thumbail.png",
    images: [
      {
        src: "/images/anotador/home.png",
        description: "Pantalla principal.",
      },
      {
        src: "/images/anotador/detalles.png",
        description: "Detalles del turno.",
      },
    ],
    date: "2024",
  },
  {
    id: "chat",
    title: "Chat en Tiempo Real",
    description:
      "Sitio web responsivo pensado para dispositivos móviles que funciona como una plataforma de mensajería simple y efectiva. Permite a los usuarios registrarse, iniciar sesión y mantener conversaciones privadas en tiempo real con otros usuarios registrados.",
    
    skills: ["React", "Node.js", "Bootstrap", "MySQL", "MongoDB"],
    link: "https://chat-my-sql-front.vercel.app",
    repositorio: "https://github.com/MarcoA36/chat_mySql_front",
    features: [
      "Creación de cuenta y acceso con credenciales seguras.",
      "Solo los usuarios registrados pueden enviarse mensajes entre sí.",
      "Almacenamiento del historial de chats para su consulta posterior.",
    ],
    // mainImage: "/images/chat/chat.png",
    mainImage: "/images/chat/thumbail.png",
    images: [
      {
        src: "/images/chat/chat.png",
        description: "Conversación con un contacto",
      },
      {
        src: "/images/chat/home.png",
        description: "Ultimas conversaciones",
      },
    ],
    date: "2024",
  },
  {
    id: "diario_digital",
    title: "Diario Digital con Panel de administración",
    description:
      "Sistema completo para gestionar un diario en línea. Permite la creación, edición, revisión y publicación de noticias desde un panel de administración, hasta su visualización en la página principal.",
    skills: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    // link: "https://github.com/MarcoA36/diario_digital",
    repositorio: "https://github.com/MarcoA36/diario_digital",
    features: [
      "Editor de texto integrado para la redacción de noticias.",
      "Dos niveles de usuarios: Redactor y Administrador general.",
      "Sistema de mensajería interna entre redactores y administradores.",
      "Control de publicación por parte del administrador para decidir la ubicación de la noticia en la página principal.",
    ],
    // mainImage: "/images/diarioDigital/entradas.png",
    mainImage: "/images/diarioDigital/thumbail.png",
    images: [
      {
        src: "/images/diarioDigital/entradas.png",
        description: "Panel de administración",
      },
      {
        src: "/images/diarioDigital/cargarNoticia.png",
        description: "Formulario para cargar nuevas noticias al sistema.",
      },
      // {
      //   src: "/images/diarioDigital/homePage.png",
      //   description: "Página principal con las noticias destacadas.",
      // },
      {
        src: "/images/diarioDigital/homePage2.png",
        description: "Home page",
      },
    ],
    date: "2023",
  },
];
