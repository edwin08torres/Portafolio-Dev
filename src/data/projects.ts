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
    slug: "trackdeli-web",
    title: "TrackDeli — Web Platform",
    description:
      "A multi-tenant SaaS admin platform for local delivery businesses, featuring live dispatch management, real-time GPS dashboards, and a public tracking portal for end customers.",
    details: `
      ### The Challenge
      Build a full web platform serving three different audiences from one shared architecture: business owners managing orders and riders, a super-admin overseeing every tenant on the platform, and end customers tracking their delivery in real time — all without exposing any tenant's data to another. The hardest part was the dispatch logic itself: automatically offering an order to the nearest available rider with a countdown, falling back to the next rider on rejection or timeout, while keeping every connected client in sync via WebSockets.

      ### Solution
      - **Frontend:** React + TypeScript + Vite monorepo (Turborepo) with three apps — Admin, SuperAdmin, and public Tracking
      - **Backend:** NestJS + Prisma ORM + PostgreSQL, with strict multi-tenant isolation at the query level
      - **Real-Time:** Socket.IO Gateway with room-based isolation (\`business:{id}\`, \`order:{id}\`) for live rider positions, order status changes, and dispatch offers
      - **Maps:** Mapbox GL JS with custom-styled markers, live route rendering, and client-side interpolation for smooth avatar movement — matching the feel of Uber/InDrive rather than choppy GPS jumps
      - **Recurring Customers:** Phone-scoped customer records per business with a self-service geolocation confirmation flow sent via WhatsApp, avoiding manual address re-entry on repeat orders
      - **UX Details:** A custom "dynamic island" toast system with error-priority queueing, replacing traditional corner toasts across the whole admin

      ### Impact
      A single backend now powers three distinct experiences with zero data leakage between tenants, live dispatch that automatically routes around unresponsive riders, and a public tracking link customers can open without any login.
    `,
    techs: ["React", "NestJS", "Prisma", "PostgreSQL", "Socket.IO", "Mapbox"],
    image: "/assets/project/webtrack/dash_webtrack.png",
    gallery: [
      "/assets/project/webtrack/dash_webtrack.png",
      "/assets/project/webtrack/pedido_webtrack.png",
      "/assets/project/webtrack/pedidodetalle_webtrack.png",
      "/assets/project/webtrack/cliente_webtrack.png",
      "/assets/project/webtrack/riders_webtrack.png",
      "/assets/project/webtrack/comisiones_webtrack.png",
      "/assets/project/webtrack/reportes_webtrack.png",
      "/assets/project/webtrack/config_webtrack.png",
      "/assets/project/webtrack/estado_webtracking.png",
      "/assets/project/webtrack/tracking_werbtracking.png",
      "/assets/project/webtrack/rating_webtracking.png",
      "/assets/project/webtrack/rated_webtracking.png",
      "/assets/project/webtrack/dash_webtracksuperadmin.png",
      "/assets/project/webtrack/negocios_webtracksuperadmin.png",
      "/assets/project/webtrack/riders_webtracksuperadmin.png",
      "/assets/project/webtrack/logs_webtracksuperadmin.png",
    ],
    github: "https://github.com/edwin08torres/trackdeli-web",
  },

  {
    slug: "trackdeli-app",
    title: "TrackDeli — Rider App",
    description:
      "A Flutter mobile app for delivery riders, featuring automatic order dispatch, real-time negotiable quotes, and turn-by-turn GPS navigation synced live with the customer-facing web.",
    details: `
      ### The Challenge
      Deliver a rider experience on par with major ride-hailing apps: smooth live GPS tracking (not choppy point-to-point jumps), automatic route recalculation when a rider deviates, and a dual order-assignment model — automatic cascading dispatch for delivery companies with their own fleet, and a negotiable quoting system for independent riders bidding on open orders.

      ### Solution
      - **Mobile:** Flutter + Dart, Riverpod for reactive state, GoRouter with auth guards
      - **Maps & GPS:** \`mapbox_maps_flutter\` with custom canvas-rendered markers, animated heading rotation, and client-side position interpolation for fluid movement between GPS fixes
      - **Networking:** Dio with silent JWT refresh token interceptors and a request queue during token renewal
      - **Push Notifications:** Firebase Cloud Messaging with dedicated Android notification channels, automatic cleanup of invalid/expired device tokens, and a custom in-app "dynamic island" banner for foreground alerts
      - **Real-Time:** Dedicated Socket.IO namespace for GPS telemetry, with a heartbeat mechanism keeping the connection alive even when the rider is stationary

      ### Impact
      Riders get one app that adapts to two different business models (fleet dispatch vs. open marketplace), with live tracking accurate and smooth enough to match the UX of established ride-hailing apps.
    `,
    techs: ["Flutter", "Dart", "Riverpod", "Mapbox", "Firebase", "Socket.IO"],
    image: "/assets/project/appdeli/listasolicitudes_app.jpg",
    gallery: [
      "/assets/project/appdeli/taking_app.jpg",
      "/assets/project/appdeli/takepedido_app.jpg",
      "/assets/project/appdeli/listasolicitudes_app.jpg",
      "/assets/project/appdeli/rutaentrega_app.jpg",
      "/assets/project/appdeli/validandoentrega_app.jpg",
      "/assets/project/appdeli/pedidoexitoso_app.jpg",
      "/assets/project/appdeli/historial_app.jpg",
      "/assets/project/appdeli/profile_app.jpg",
      "/assets/project/appdeli/register_app.jpg",
      "/assets/project/appdeli/register2_app.jpg",
    ],
    github: "https://github.com/edwin08torres/trackdeli-app",
  },

  {
    slug: "trackdeli-pos",
    title: "TrackDeli POS",
    description:
      "A desktop point-of-sale application built with Electron, integrating real thermal printer and cash drawer hardware, sharing the same backend as the TrackDeli delivery platform.",
    details: `
      ### The Challenge
      Build a standalone desktop POS for local businesses that talks to real hardware — an ESC/POS thermal printer, a cash drawer, and a USB barcode scanner — while sharing the exact same backend and data model as the web and mobile delivery platform, so a business can run in-store sales and delivery orders from one unified system.

      ### Solution
      - **Desktop Shell:** Electron + Vite, with hardware access isolated to the main process and exposed to the React renderer via IPC
      - **Hardware Integration:** \`node-thermal-printer\` for ESC/POS receipt printing and cash drawer control; barcode scanner input handled as raw USB HID keypress events
      - **Frontend:** React + TypeScript + Tailwind CSS, sharing the same design system and API client patterns as the web admin
      - **Auto-Updates:** \`electron-updater\` distributing new versions via GitHub Releases, so every business receives updates automatically without an in-person visit
      - **Shared Backend:** Same NestJS API and PostgreSQL database as the rest of the platform — sales, cash register shifts, and inventory live alongside delivery orders under the same business account

      ### Impact
      Local businesses get a real point-of-sale system — categories, inventory, cash register reconciliation, invoicing — without needing separate software or a separate account from their delivery operations.
    `,
    techs: ["Electron", "React", "TypeScript", "NestJS", "PostgreSQL"],
    image: "/assets/project/pos/order_POS.png",
    gallery: [
      "/assets/project/pos/caja_POS.png",
      "/assets/project/pos/order_POS.png",
      "/assets/project/pos/order2_POS.png",
      "/assets/project/pos/catalogo_POS.png",
      "/assets/project/pos/historial_POS.png",
      "/assets/project/pos/reportes_POS.png",
    ],
    github: "https://github.com/edwin08torres/trackdeli-pos",
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
  },
  {
    slug: "mimas-tatas-foundation",
    title: "Mima's & Tata's Foundation",
    description:
      "A donation web application featuring an item catalog, request cart, user authentication, and full bilingual support.",
    details: `
      ### The Challenge
      Mima's & Tata's Foundation needed a modern, accessible, and intuitive digital platform to facilitate donation workflows and community support. The primary requirements involved establishing a dynamic donation items catalog, implementing an interactive request cart for beneficiaries, enforcing strict security validations during user authentication, and delivering a complete bilingual experience (English/Spanish).

      ### Solution
      - **Frontend Architecture:** Built with Next.js and TypeScript to deliver high performance, server-side rendering, and strict type safety.
      - **GraphQL Integration:** Efficient consumption of queries and mutations for donation requests, pledges, and user operations.
      - **Global State Management:** Zustand store managing the dynamic request cart with persistent state and real-time item tracking.
      - **Bilingual Experience (i18n):** Native internationalization enabling seamless language toggling across catalogs, forms, and modals.
      - **Authentication & Security:** Robust validation layers for secure login flows and protected user access.

      ### Impact
      Digitized the foundation's operations into a transparent, streamlined catalog, drastically reducing manual coordination time and empowering both donors and recipients across communities.
    `,
    techs: ["Next.js", "GraphQL", "Zustand", "TypeScript", "i18n"],
    image: "/assets/project/mimas/home_mima.png",
    gallery: [
      "/assets/project/mimas/home_mima.png",
      "/assets/project/mimas/about_mima.png",
      "/assets/project/mimas/items_mima.png",
      "/assets/project/mimas/donate_mima.png",
      "/assets/project/mimas/contact_mima.png",
    ],
    demo: "https://mimasandtatas.com",
  },
];
