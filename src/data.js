export const skillsData = [
  {
    name: "Frontend",
    skills: ["React", "Javascript", "HTML", "CSS3", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "PHP", "MySQL", "MongoDB"],
  },
];



export const projectsData = [
  {
    id: "sistema_de_gestion",
    title: "Sistema de gestión para empresa de taxis",
    description:
      "Sistema para administrar una empresa de taxis con asignación de viajes, seguimiento en tiempo real y comunicación entre administradores y choferes.",
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
    images: [
      {
        src: "/images/sistemaGestion/tabla.webp",
        description: "Vista de la tabla de viajes asignados a los choferes."
      },
      {
        src: "/images/sistemaGestion/mapa.webp",
        description: "Mapa en tiempo real con la ubicación de los vehículos."
      },
      {
        src: "/images/sistemaGestion/modal.webp",
        description: "Modal para asignar y editar información de un viaje."
      },
      {
        src: "/images/sistemaGestion/moviles.webp",
        description: "Gestión de móviles, activación y liquidación de viajes."
      }
    ]
  },  
  {
    id: "app_chofer",
    title: "App para choferes",
    description: "Esta aplicación permite a los choferes recibir viajes asignados en tiempo real, actualizar su ubicación y registrar los detalles de cada viaje. Además, pueden enviar el destino e importe del viaje, así como llevar un control de la caja recaudada.",
    skills: ["React", "Node.js", "Bootstrap", "MySQL"],
    link: "https://app-chofer-2025.vercel.app",
    repositorio: "https://github.com/MarcoA36/app_chofer_2025",
    features: [
      "Los choferes reciben viajes asignados directamente en la aplicación.",
      "El chofer puede actualizar su ubicación para que los administradores sepan en qué zona espera recibir viajes.",
      "Permite ingresar el destino y el importe del viaje.",
      "Registro de viajes completados y caja recaudada.",
      "Todos los cambios se reflejan instantáneamente en el sistema de administración."
    ],
    images: [
      {
        src: "/images/appChofer/mapa.webp",
        description: "Mapa en tiempo real con los viajes activos."
      },
      {
        src: "/images/appChofer/home.png",
        description: "Pantalla principal con resumen de viajes y caja."
      },
      {
        src: "/images/appChofer/viajes.webp",
        description: "Lista de viajes realizados con detalles."
      }
    ]
  },
  {
    id: "anotador_de_viajes",
    title: "Anotador de viajes para choferes",
    description: "Aplicación diseñada para que los choferes puedan registrar fácilmente los viajes realizados desde su celular. Permite calcular los gastos y la ganancia de forma intuitiva, ofreciendo una herramienta simple pero efectiva para el control diario de ingresos.",
    skills: ["React", "Bootstrap"],
    link: "https://www.notechofer.online",
    repositorio: "https://github.com/MarcoA36/anotadorDeViajes",
    features: [
      "Permite anotar cada viaje con el importe y forma de pago.",
      "Muestra el total de ingresos y gastos del día (combustible y viajes fiados).",
      "Interfaz diseñada exclusivamente para usar como app en celulares.",
      "Permite modificar o borrar registros con facilidad.",
      "Permite exportar el detalle del turno en pdf para compartir o almacenar."
    ],
    images: [
      {
        src: "/images/anotador/detalles.png",
        description: "Vista de los detalles de cada viaje registrado."
      },
      {
        src: "/images/anotador/home.png",
        description: "Pantalla de inicio con resumen de viajes y ganancias."
      }
    ]
  },  
  {
    id: "chat",
    title: "Chat en Tiempo Real",
    description: "Aplicación web diseñada para ser utilizada en dispositivos móviles como una plataforma de mensajería simple y efectiva. Permite a los usuarios registrarse, iniciar sesión y mantener conversaciones privadas en tiempo real con otros usuarios registrados.",
    skills: ["React", "Node.js", "Bootstrap", "MySQL", "MongoDB"],
    link: "https://chat-my-sql-front.vercel.app",
    repositorio: "https://github.com/MarcoA36/chat_mySql_front",
    features: [
      "Creación de cuenta y acceso con credenciales seguras.",
      "Comunicación fluida sin necesidad de recargar la página.",
      "Solo los usuarios registrados pueden enviarse mensajes entre sí.",
      "Interfaz diseñada para su uso en celulares como una PWA.",
      "Almacenamiento del historial de chats para su consulta posterior."
    ],
    images: [
      {
        src: "/images/chat/chat.png",
        description: "Interfaz del chat con mensajes en tiempo real."
      },
      {
        src: "/images/chat/home.png",
        description: "Pantalla de inicio con opciones de registro e inicio de sesión."
      }
    ]
  },
  {
    id: "diario_digital",
    title: "Diario Digital con Panel de administración",
    description: "Sistema completo para gestionar un diario en línea. Permite la creación, edición, revisión y publicación de noticias desde un panel de administración, hasta su visualización en la página principal.",
    skills: ["HTML", "CSS3", "JavaScript", "PHP", "MySQL"],
    link: "https://github.com/MarcoA36/diario_digital",
    repositorio: "https://github.com/MarcoA36/diario_digital",
    features: [
      "Editor de texto integrado para la redacción de noticias.",
      "Dos niveles de usuarios: Redactor y Administrador general.",
      "Sistema de mensajería interna entre redactores y administradores.",
      "Control de publicación por parte del administrador para decidir la ubicación de la noticia en la página principal."
    ],
    images: [
      {
        "src": "/images/diarioDigital/entradas.png",
        "description": "Panel de administración"
      },
      {
        "src": "/images/diarioDigital/cargarNoticia.png",
        "description": "Formulario para cargar nuevas noticias al sistema."
      },
      {
        "src": "/images/diarioDigital/homePage.png",
        "description": "Página principal con las noticias destacadas."
      },
      {
        "src": "/images/diarioDigital/homePage2.png",
        "description": "Otra vista"
      }
    ]
  }
  
];
