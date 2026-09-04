import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Services from "./components/Services";
import About from "./components/About";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
return ( <main className="min-h-screen bg-[#FAF8F3] text-[#4E535B]">


  {/* HEADER */}
  <Header />

  {/* =========================
      HERO
  ========================= */}

  <section
    id="inicio"
    className="
      relative
      min-h-screen
      w-full
      overflow-hidden
      bg-black
    "
  >

    {/* =========================
        VIDEO DE PORTADA
    ========================= */}

    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      poster="/images/logo.png"
      className="
        absolute
        inset-0
        z-0
        w-full
        h-full
        object-cover
      "
    >
      <source
        src="/images/12345.mp4"
        type="video/mp4"
      />
    </video>

    {/* =========================
        CAPA DE PROTECCIÓN
    ========================= */}

    <div
      className="
        absolute
        inset-0
        z-[1]
        bg-black/10
        pointer-events-none
      "
    />

    {/* =========================
        DEGRADADO SUPERIOR
        AYUDA A INTEGRAR EL HEADER
    ========================= */}

    <div
      className="
        absolute
        inset-x-0
        top-0
        h-48
        z-[2]
        bg-gradient-to-b
        from-black/35
        via-black/10
        to-transparent
        pointer-events-none
      "
    />

    {/* =========================
        DEGRADADO INFERIOR
    ========================= */}

    <div
      className="
        absolute
        inset-x-0
        bottom-0
        h-64
        z-[2]
        bg-gradient-to-t
        from-black/65
        via-black/20
        to-transparent
        pointer-events-none
      "
    />

    {/* =========================
        CONTENIDO
    ========================= */}

    <div
      className="
        relative
        z-[10]
        min-h-screen
        flex
        items-center
        justify-center
        px-5
        sm:px-6
      "
    >

      <div
        className="
          text-center
          max-w-5xl
          mt-16
          sm:mt-20
        "
      >

        {/* MARCA */}

        <h1
          className="
            text-4xl
            sm:text-5xl
            md:text-7xl
            lg:text-8xl
            tracking-[6px]
            sm:tracking-[10px]
            font-bold
            text-white
            drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]
          "
        >
          MEDITERRANÉE
        </h1>

        <p
          className="
            mt-4
            text-xs
            sm:text-sm
            md:text-base
            tracking-[4px]
            sm:tracking-[6px]
            uppercase
            text-white/95
            drop-shadow-lg
          "
        >
          Servicios Inmobiliarios
        </p>

        {/* LÍNEA AZUL */}

        <div
          className="
            w-20
            sm:w-28
            h-[2px]
            bg-[#1300FF]
            mx-auto
            mt-7
            sm:mt-8
            rounded-full
            shadow-[0_0_14px_rgba(19,0,255,0.8)]
          "
        />

        <p
          className="
            mt-7
            sm:mt-8
            text-xs
            sm:text-sm
            md:text-lg
            tracking-[2px]
            sm:tracking-[4px]
            uppercase
            text-white
            leading-relaxed
            drop-shadow-lg
          "
        >
          Ventas · Alquileres · Administraciones · Tasaciones
        </p>

        {/* =========================
            BOTONES
        ========================= */}

        <div
          className="
            mt-10
            sm:mt-12
            flex
            flex-col
            sm:flex-row
            gap-5
            sm:gap-8
            justify-center
            items-center
          "
        >

          {/* VER PROPIEDADES */}

          <a
            href="#propiedades"
            className="
              w-full
              sm:w-auto
              min-w-[210px]
              px-10
              py-4
              rounded-full
              bg-[#1300FF]
              text-white
              font-semibold
              shadow-[0_10px_30px_rgba(19,0,255,0.35)]
              border
              border-white/20
              hover:bg-[#0D00B8]
              hover:-translate-y-1
              hover:shadow-[0_14px_35px_rgba(19,0,255,0.45)]
              transition-all
              duration-300
            "
          >
            Ver propiedades
          </a>

          {/* CONTACTANOS */}

          <a
            href="#contacto"
            className="
              w-full
              sm:w-auto
              min-w-[210px]
              px-10
              py-4
              rounded-full
              bg-white/95
              backdrop-blur-sm
              text-[#20232A]
              font-semibold
              shadow-xl
              border
              border-white/40
              hover:bg-[#1300FF]
              hover:text-white
              hover:-translate-y-1
              hover:shadow-[0_14px_35px_rgba(19,0,255,0.35)]
              transition-all
              duration-300
            "
          >
            Contactanos
          </a>

        </div>

      </div>

    </div>

    {/* =========================
        SCROLL
    ========================= */}

    <a
      href="#propiedades"
      aria-label="Desplazarse hacia abajo"
      className="
        absolute
        bottom-7
        left-1/2
        -translate-x-1/2
        z-[10]
        flex
        flex-col
        items-center
        gap-2
        text-white/80
        hover:text-white
        transition
        drop-shadow-lg
      "
    >

      <span className="text-[10px] uppercase tracking-[3px]">
        Explorar
      </span>

      <span className="text-xl animate-bounce">
        ↓
      </span>

    </a>

  </section>

  {/* =========================
      BUSCADOR
  ========================= */}

  <SearchBox />

  {/* =========================
      SERVICIOS
  ========================= */}

  <section id="servicios">
    <Services />
  </section>

  {/* =========================
      NOSOTROS
  ========================= */}

  <section id="nosotros">
    <About />
  </section>

  {/* =========================
      PROPIEDADES
  ========================= */}

  <section id="propiedades">
    <Properties />
  </section>

  {/* =========================
      CONTACTO
  ========================= */}

  <section id="contacto">
    <Contact />
  </section>

  {/* =========================
      FOOTER
  ========================= */}

  <Footer />

  {/* =========================
      WHATSAPP
  ========================= */}

  <Whatsapp />

</main>

);
}
