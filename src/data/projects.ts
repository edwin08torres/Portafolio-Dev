import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    slug: "mopetco-grooming",
    title: "MoPetCo Grooming",
    description:
      "Página que muestra los servicios de grooming y permite reservar citas.",
    details: `
      ### El reto
      La veterinaria necesitaba digitalizar la agenda de grooming, y a su vez promocionar sus servicios
        
      ### Solución
      - **Frontend:** React + TailwindCSS  
      - **Backend:** .NET 7 + SQL Server  
      - **Integración:** Email + Medios de contacto + Reservaciones 
        
      ### Impacto
      Aumento considerablemente las reservas online en el primer mes.
    `,
    techs: ["React", "TailwindCSS", "TypeScript", "SQL", ".NET"],
    image: "/assets/project-1.webp",
    github: "https://github.com/DETDevs/MoPetCo.App",
    demo: "https://mopetco.com/",
  },
  {
    slug: "coffee-shop-landing",
    title: "Coffee Shop Landing",
    description: "Landing page elegante para una marca de café premium.",
    details: `
        ### 🧩 El reto
        La marca buscaba una forma atractiva y moderna de presentar su café premium en línea, transmitiendo identidad visual fuerte y facilitando el acceso a su menú.

        ### 🛠️ Solución
        - **Frontend:** HTML, CSS y JavaScript puros, enfocados en rendimiento y estética.
        - Se diseñó una landing page minimalista con enfoque visual en las imágenes y la experiencia del usuario.
        - Se incorporó un menú interactivo y secciones informativas de fácil navegación.
        
      `,

    techs: ["HTML", "CSS", "JavaScript"],
    image: "/assets/project-2.webp",
    github: "https://github.com/edwin08torres/cafeCub",
    demo: "https://shimmering-lebkuchen-346495.netlify.app/",
  },
  {
    slug: "logic-tkl-915",
    title: "Especificación de Logic TKL 915",
    description:
      "Página donde se puede consultar la información del teclado Logitech TKL 915.",
    details: `
      ### 🧩 El reto
      Se requería una página informativa moderna y clara para resaltar las características del teclado Logitech TKL 915, especialmente su diseño compacto y funcionalidades para gamers.

      ### 🛠️ Solución
      - **Frontend:** React + TailwindCSS + AOS + Marquee
      - Arquitectura modular con animaciones de scroll para destacar cada sección técnica.
      - Uso de efectos visuales con Marquee y carga rápida optimizada.

      ### 🚀 Impacto
      Mejoró la percepción del producto en distribuidores minoristas y se convirtió en un recurso útil para usuarios interesados en conocer las especificaciones completas antes de comprar.
    `,

    techs: ["React", "TailwindCSS", "TypeScript"],
    image: "/assets/project-tkl.webp",
    github: "https://github.com/edwin08torres/TKL",
    demo: "https://magenta-smakager-fead4b.netlify.app/",
  },
  {
    slug: "pokedex",
    title: "Lista de Pokemones y sus características",
    description:
      "Puedes encontrar tu pokemones favoritos y conocerlos un poco mas",
    details: `
      ### 🧩 El reto
      Se necesitaba una aplicación móvil interactiva que permitiera a los usuarios explorar una lista de Pokemones y acceder a sus características, estadísticas y tipos de forma rápida e intuitiva.

      ### 🛠️ Solución
      - **Frontend:** React Native + TypeScript + CSS.
      - Integración con la API pública de **PokeAPI** para obtener datos en tiempo real.
      - Diseño optimizado con listas dinámicas y navegación fluida entre pantallas.
      - Implementación de búsqueda y filtrado para encontrar Pokemones específicos.
      - Uso de animaciones y transiciones suaves para mejorar la experiencia del usuario.

      ### 🚀 Impacto
      La app ofrece una experiencia amigable y accesible para fanáticos y curiosos, centralizando información oficial de los Pokemones en un solo lugar y en un formato cómodo para dispositivos móviles.
    `,

    techs: [
      "React Native",
      "TypeScript",
      "Expo",
    ],
    image: "/assets/pokedex.webp",
    github: "https://github.com/edwin08torres/pokeapi-native",
    demo: "",
  },
  {
    slug: "WeatherBit",
    title: "Consulta el clima actual en USA y su pronóstico a 5 días",
    description:
      "Aplicación web que permite consultar el clima actual y el pronóstico a 5 días en cualquier ciudad de Estados Unidos ingresando únicamente el código postal.",
    details: `
      ### 🧩 El reto
      Desarrollar una aplicación web ligera, rápida y accesible que ofreciera información meteorológica confiable basada en un código postal, mostrando datos actuales y un pronóstico extendido de forma clara y visual.

      ### 🛠️ Solución
      - **Frontend:** Angular + TypeScript, con diseño responsivo en **Bootstrap**.
      - Consumo directo de la API pública **WeatherBit** para obtener clima en tiempo real.
      - Implementación de búsqueda por ZIP Code con manejo de estados (cargando, error, datos).
      - Componentes reutilizables y arquitectura modular para facilitar escalabilidad.
      - UI limpia y moderna, optimizada para desktop y mobile.

      ### 🚀 Impacto
      La aplicación entrega una experiencia simple pero poderosa: permite obtener información meteorológica precisa en segundos, con una interfaz clara y profesional, ideal para usuarios generales o entornos donde se requiera una consulta rápida del clima.
  `,

    techs: [
      "Angular",
      "TypeScript",
      "Bootstrap",
      "WeatherBit API",
    ],
    image: "/assets/project-7.webp",
    github: "https://github.com/edwin08torres/WeatherBit",
    demo: "https://weatherbittesting.netlify.app/"
  }

];
