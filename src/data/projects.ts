import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    slug: "mopetco-grooming",
    title: "MoPetCo Grooming",
    description:
      "A page showcasing pet grooming services with online appointment booking.",
    details: `
      ### The Challenge
      The veterinary clinic needed to digitize their grooming schedule while also promoting their services online.
        
      ### Solution
      - **Frontend:** React + TailwindCSS  
      - **Backend:** .NET 7 + SQL Server  
      - **Integration:** Email + Contact channels + Reservations 
        
      ### Impact
      Online bookings increased significantly in the first month.
    `,
    techs: ["React", "TailwindCSS", "TypeScript", "SQL", ".NET"],
    image: "/assets/project-1.webp",
    github: "https://github.com/DETDevs/MoPetCo.App",
    demo: "https://mopetco.com/",
  },
  {
    slug: "coffee-shop-landing",
    title: "Coffee Shop Landing",
    description: "An elegant landing page for a premium coffee brand.",
    details: `
        ### The Challenge
        The brand needed an attractive and modern way to showcase their premium coffee online, conveying a strong visual identity and providing easy access to their menu.

        ### Solution
        - **Frontend:** Pure HTML, CSS and JavaScript, focused on performance and aesthetics.
        - Designed a minimalist landing page with a visual focus on imagery and user experience.
        - Included an interactive menu and easy-to-navigate informational sections.
        
      `,

    techs: ["HTML", "CSS", "JavaScript"],
    image: "/assets/project-2.webp",
    github: "https://github.com/edwin08torres/cafeCub",
    demo: "https://shimmering-lebkuchen-346495.netlify.app/",
  },
  {
    slug: "logic-tkl-915",
    title: "Logitech TKL 915 Specs",
    description:
      "A product page to browse the full specifications of the Logitech TKL 915 keyboard.",
    details: `
      ### The Challenge
      A modern, clean informational page was needed to highlight the features of the Logitech TKL 915 keyboard, especially its compact design and gamer-oriented functionality.

      ### Solution
      - **Frontend:** React + TailwindCSS + AOS + Marquee
      - Modular architecture with scroll-driven animations to showcase each technical section.
      - Visual effects with Marquee and optimized fast loading.

      ### Impact
      Improved product perception among retail distributors and became a useful resource for users wanting to review full specifications before purchasing.
    `,

    techs: ["React", "TailwindCSS", "TypeScript"],
    image: "/assets/project-tkl.webp",
    github: "https://github.com/edwin08torres/TKL",
    demo: "https://magenta-smakager-fead4b.netlify.app/",
  },
  {
    slug: "pokedex",
    title: "Pokédex — Browse & Discover Pokémon",
    description:
      "Find your favorite Pokémon and learn more about their stats and types.",
    details: `
      ### The Challenge
      An interactive mobile app was needed to let users explore a list of Pokémon and quickly access their characteristics, stats and types.

      ### Solution
      - **Frontend:** React Native + TypeScript + CSS.
      - Integration with the public **PokeAPI** for real-time data.
      - Optimized design with dynamic lists and smooth screen navigation.
      - Search and filter to find specific Pokémon.
      - Smooth animations and transitions for a better user experience.

      ### Impact
      The app delivers a friendly and accessible experience for fans and newcomers alike, centralizing official Pokémon data in one place in a mobile-friendly format.
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
    title: "WeatherBit — US Weather & 5-Day Forecast",
    description:
      "A web app that displays current weather and a 5-day forecast for any US city by ZIP code.",
    details: `
      ### The Challenge
      Build a lightweight, fast and accessible web app that provides reliable weather data based on a ZIP code, showing current conditions and an extended forecast in a clear, visual format.

      ### Solution
      - **Frontend:** Angular + TypeScript with responsive **Bootstrap** design.
      - Direct consumption of the public **WeatherBit** API for real-time weather.
      - ZIP Code search with proper state handling (loading, error, data).
      - Reusable components and modular architecture for easy scalability.
      - Clean, modern UI optimized for desktop and mobile.

      ### Impact
      The app delivers a simple yet powerful experience: accurate weather data in seconds, with a clean and professional interface ideal for general users or quick weather lookups.
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
