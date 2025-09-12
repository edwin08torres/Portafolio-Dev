export const HomeHeroSection = () => {
  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  return (
    <section
      id="home"
      className="relative w-full bg-slate-950 text-white h-[100vh] flex flex-col justify-center items-center md:items-center gap-6 overflow-hidden"
    >
      {/* Fondo animado waves con gradiente y blur */}
      {/* Wave */}
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1420 320"
        className={`pointer-events-none absolute left-0 w-[120%] md:w-[130%] xl:w-[115%] 2xl:w-[105%] h-[26rem] -bottom-32 md:-bottom-28 z-0 ${
          reduced ? "" : "animate-wave"
        }`}
      >
        <path
          fill="#1f2f57"
          d="M0,64L30,80C60,96,120,128,180,128C240,128,300,96,360,74.7C420,53,480,43,540,58.7C600,75,660,117,720,128C780,139,840,117,900,128C960,139,1020,181,1080,186.7C1140,192,1200,160,1260,138.7C1320,117,1380,107,1410,101.3L1440,96L1440,320L0,320Z"
        />
      </svg>

      {/* Overlay noise */}
      <img
        src="/assets/noise.png"
        alt="noise"
        className="absolute opacity-5 w-full h-full object-cover"
      />

      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

      {/* Contenido principal */}
      <div className="flex flex-col justify-center items-center md:items-center relative z-10 text-center md:text-center">
        <h2 className="text-blue-300 text-lg md:text-2xl font-semibold stroke-text typing1">
          Hey, I'm
        </h2>

        <h1 className="text-4xl md:text-[5rem] md:py-2 uppercase stroke-text typing2">
          Edwin Torrez
        </h1>
        <h2
          className="uppercase text-lg md:text-2xl tracking-widest stroke-text font-semibold typing2"
          style={{ animationDelay: "3s" }}
        >
          But you can call me Alex
        </h2>

        <p
          className="text-white text-sm md:text-xl fade-in-late"
          style={{ animationDelay: "5s" }}
        >
          I'm a systems engineer <br />& front-end web developer
        </p>
      </div>
    </section>
  );
};
