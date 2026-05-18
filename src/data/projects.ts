import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    slug: "legal-track-usa",
    title: "Legal Track USA",
    description:
      "A secure multiplatform mobile application for real-time tracking of immigration cases, official USCIS test study guides, and community feed sharing.",
    details: `
      ### The Challenge
      To build an integrated, secure mobile application that empowers users to track their US immigration cases with real-time status updates, practice for the official USCIS civics tests, and engage in a social community feed. The critical technical hurdle was implementing a highly responsive Reels video posting module supporting auto-trimming and cutting algorithms similar to WhatsApp.

      ### Solution
      - **Mobile Client:** React Native CLI, TypeScript, and Redux Toolkit
      - **Backend & Auth:** Firebase Auth, Firestore, and Real-Time DB
      - **Video Processing (Reels):** Custom video trimming system using \`react-native-video\` & \`react-native-video-trim\` that enforces videos to be strictly less than 1 minute, performing automated cutting if the raw file exceeds 60 seconds
      - **State & Storage:** Redux Persist + Async Storage for offline case persistence, combined with TanStack React Query for reliable real-time server synchronizations
      - **Interactive Features:** Lottie animations for premium UX feedback and OneSignal notifications for instant push alert updates on case status shifts
      
      ### Impact
      Successfully deployed to the iOS App Store and Google Play Store, creating an invaluable modern hub for thousands of immigrants seeking legal status updates.
    `,
    techs: ["React Native", "Redux", "Firebase", "TypeScript"],
    image: "/assets/project/legaltrack/img1.png",
    gallery: [
      "/assets/project/legaltrack/img1.png",
      "/assets/project/legaltrack/img2.png",
      "/assets/project/legaltrack/img3.png",
      "/assets/project/legaltrack/img4.png",
    ],
    playstore:
      "https://play.google.com/store/apps/details?id=com.legaltrackusa.app&pcampaignid=web_share",
    appstore: "https://apps.apple.com/ni/app/legal-track-usa/id6742809966",
  },
  {
    slug: "silent-hill-tribute",
    title: "Silent Hill — Interactive Tribute",
    description:
      "A cinematic web experience exploring the lore and horror of Silent Hill through immersive scroll-driven animations and atmospheric design.",
    details: `
      ### The Challenge
      Create a visually rich, interactive web tribute to Silent Hill that feels like navigating through the game itself — with fog, tension, and narrative depth baked into every scroll interaction.

      ### Solution
      - **Frontend:** React + TypeScript + TailwindCSS
      - **Animations:** GSAP ScrollTrigger for pinned sections, parallax, zoom transitions, and stacking card reveals
      - **Cinematic Preloader:** Custom timeline animation with skip functionality
      - **Immersive Audio:** Web Audio API for ambient pink noise, drone, and hover sound effects
      - **3D Tilt Cards:** Cursor-following perspective transforms with radial shine overlay on desktop
      - **Mobile Carousel:** Touch-swipeable character cards with dot navigation
      - **Bestiary Scrollytelling:** Scroll-driven creature reveals with pinned viewport and animated overlays
      - **Film Grain Overlay:** SVG fractalNoise texture for VHS atmosphere
      - **Fog & Vignette:** Layered video fog (desktop) and radial gradient vignette
      - **Section Navigation:** Lateral dot nav with labels and smooth scroll-to
      - **Scroll Progress Bar:** Real-time scroll position indicator

      ### Impact
      A showcase project demonstrating advanced GSAP animation techniques, immersive UI design, and mobile-responsive storytelling — built to impress in a developer portfolio.
    `,
    techs: ["React", "TypeScript", "TailwindCSS", "GSAP"],
    image: "/assets/project/SHWebsite/proyecto-SH-Card.png",
    detailImage: "/assets/project/SHWebsite/gallery/proyecto-SH.png",
    gallery: [
      "/assets/project/SHWebsite/proyecto-SH-Card.png",
      "/assets/project/SHWebsite/gallery/proyecto-SH.png",
      "/assets/project/SHWebsite/gallery/img2.png",
      "/assets/project/SHWebsite/gallery/img3.png",
      "/assets/project/SHWebsite/gallery/img4.png",
    ],
    github: "https://github.com/edwin08torres/SilentHill",
    demo: "https://silent-hill.vercel.app/",
  },

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
    image: "/assets/project/mopetcowebsite/project.png",
    gallery: [
      "/assets/project/mopetcowebsite/project.png",
      "/assets/project/mopetcowebsite/gallery/Hero.png",
      "/assets/project/mopetcowebsite/gallery/Services.png",
      "/assets/project/mopetcowebsite/gallery/ServiceDetail.png",
      "/assets/project/mopetcowebsite/gallery/Gallery.png",
      "/assets/project/mopetcowebsite/gallery/contact.png",
    ],
    github: "https://github.com/DETDevs/MoPetCo.App",
    demo: "https://mopetco.com/",
  },

  {
    slug: "mopetco-booking",
    title: "MoPetCo Booking",
    description:
      "A full-featured online booking system for veterinary grooming services with a step-by-step reservation flow.",
    details: `
      ### The Challenge
      The clinic needed clients to book grooming appointments online in a guided, intuitive multi-step process.

      ### Solution
      - **Frontend:** React + TailwindCSS + TypeScript
      - **Backend:** .NET 7 + SQL Server
      - Multi-step booking wizard: service selection → date & time → pet info → confirmation
      - Service catalog with pricing display

      ### Impact
      Streamlined appointment scheduling reduced phone-call workload and improved client satisfaction.
    `,
    techs: ["React", "TailwindCSS", "TypeScript", "SQL", ".NET"],
    image: "/assets/project/bookingwebsite/project.png",
    gallery: [
      "/assets/project/bookingwebsite/project.png",
      "/assets/project/bookingwebsite/gallery/Services.png",
      "/assets/project/bookingwebsite/gallery/Step1Booking.png",
      "/assets/project/bookingwebsite/gallery/Step2Booking.png",
      "/assets/project/bookingwebsite/gallery/Step3Booking.png",
      "/assets/project/bookingwebsite/gallery/Step4Booking.png",
    ],
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
    image: "/assets/project/coffeewebsite/project.webp",
    gallery: [
      "/assets/project/coffeewebsite/project.webp",
      "/assets/project/coffeewebsite/gallery/img1.png",
      "/assets/project/coffeewebsite/gallery/img2.png",
      "/assets/project/coffeewebsite/gallery/img3.png",
    ],
    github: "https://github.com/edwin08torres/cafeCub",
    demo: "https://shimmering-lebkuchen-346495.netlify.app/",
  },

  {
    slug: "dulces-momentos",
    title: "Dulces Momentos — POS System",
    description:
      "A full point-of-sale system for a bakery, featuring order management, product catalog, reporting dashboards, and real-time operations.",
    details: `
      ### The Challenge
      A local bakery needed an all-in-one digital system to manage orders, track products, and generate sales reports — replacing manual processes entirely.

      ### Solution
      - **Frontend:** React + TypeScript + TailwindCSS
      - **Backend:** .NET + SQL Server
      - Dashboard with order status tracking and real-time updates
      - Product management with categories, pricing, and inventory
      - Sales reporting with daily, weekly, and monthly breakdowns
      - Multi-role access (admin, cashier, kitchen)

      ### Impact
      Eliminated paper-based order tracking and reduced errors, enabling the bakery to handle higher order volumes with fewer staff.
    `,
    techs: ["React", "TypeScript", "TailwindCSS", "SQL", ".NET"],
    image: "/assets/project/DulcesMomentos/project.png",
    gallery: [
      "/assets/project/DulcesMomentos/project.png",
      "/assets/project/DulcesMomentos/gallery/Dash.png",
      "/assets/project/DulcesMomentos/gallery/DashNew.png",
      "/assets/project/DulcesMomentos/gallery/NuevaOrden.png",
      "/assets/project/DulcesMomentos/gallery/OrdenesTomadas.png",
      "/assets/project/DulcesMomentos/gallery/Pedidos.png",
      "/assets/project/DulcesMomentos/gallery/Productos.png",
      "/assets/project/DulcesMomentos/gallery/Reportes.png",
    ],
    github: "https://github.com/DETDevs/DET.Invoce.App",
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
    image: "/assets/project/tklwebsite/project.png",
    gallery: [
      "/assets/project/tklwebsite/project.png",
      "/assets/project/tklwebsite/gallery/img1.png",
      "/assets/project/tklwebsite/gallery/img2.png",
      "/assets/project/tklwebsite/gallery/img3.png",
      "/assets/project/tklwebsite/gallery/img4.png",
    ],
    github: "https://github.com/edwin08torres/TKL",
    demo: "https://magenta-smakager-fead4b.netlify.app/",
  }
];
