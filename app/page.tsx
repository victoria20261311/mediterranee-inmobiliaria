import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Services from "./components/Services";
import About from "./components/About";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F3] text-[#4E535B]">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <Header />

      {/* =====================================================
          HERO
      ===================================================== */}

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

        {/* =================================================
            VIDEO DE PORTADA
        ================================================= */}

        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            z-0
            h-full
            w-full
            object-cover
          "
        >
          <source
            src="/images/12345.mp4"
            type="video/mp4"
          />
        </video>

        {/* =================================================
            CAPA SUAVE SOBRE EL VIDEO
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-0
            z-[1]
            bg-black/10
          "
        />

        {/* =================================================
            DEGRADADO SUPERIOR
            INTEGRA VISUALMENTE EL HEADER CON EL HERO
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            top-0
            z-[2]
            h-48
            bg-gradient-to-b
            from-black/35
            via-black/10
            to-transparent
          "
        />

        {/* =================================================
            DEGRADADO INFERIOR
        ================================================= */}

        <div
          className="
            pointer-events-none
            absolute
            inset-x-0
            bottom-0
            z-[2]
            h-64
            bg-gradient-to-t
            from-black/65
            via-black/20
            to-transparent
          "
        />

        {/* =================================================
            CONTENIDO CENTRAL DEL HERO
        ================================================= */}

        <div
          className="
            relative
            z-[10]
            flex
            min-h-screen
            items-center
            justify-center
            px-5
            sm:px-6
          "
        >

          <div
            className="
              mt-16
              max-w-5xl
              text-center
              sm:mt-20
            "
          >

            {/* =================================================
                MARCA
            ================================================= */}

            <h1
              className="
                text-4xl
                font-bold
                tracking-[6px]
                text-white
                drop-shadow-[0_4px_18px_rgba(0,0,0,0.65)]
                sm:text-5xl
                sm:tracking-[10px]
                md:text-7xl
                lg:text-8xl
              "
            >
              MEDITERRANÉE
            </h1>

            {/* =================================================
                SUBMARCA
            ================================================= */}

            <p
              className="
                mt-4
                text-xs
                uppercase
                tracking-[4px]
                text-white/95
                drop-shadow-lg
                sm:text-sm
                sm:tracking-[6px]
                md:text-base
              "
            >
              Servicios Inmobiliarios
            </p>

            {/* =================================================
                LÍNEA AZUL
            ================================================= */}

            <div
              className="
                mx-auto
                mt-7
                h-[2px]
                w-20
                rounded-full
                bg-[#1300FF]
                shadow-[0_0_14px_rgba(19,0,255,0.8)]
                sm:mt-8
                sm:w-28
              "
            />

            {/* =================================================
                SERVICIOS
            ================================================= */}

            <p
              className="
                mt-7
                text-xs
                uppercase
                tracking-[2px]
                text-white
                leading-relaxed
                drop-shadow-lg
                sm:mt-8
                sm:text-sm
                sm:tracking-[4px]
                md:text-lg
              "
            >
              Ventas · Alquileres · Administraciones · Tasaciones
            </p>

            {/* =================================================
                BOTONES
            ================================================= */}

            <div
              className="
                mt-10
                flex
                flex-col
                items-center
                justify-center
                gap-5
                sm:mt-12
                sm:flex-row
                sm:gap-8
              "
            >

              {/* VER PROPIEDADES */}

              <a
                href="#propiedades"
                className="
                  w-full
                  min-w-[210px]
                  rounded-full
                  border
                  border-white/20
                  bg-[#1300FF]
                  px-10
                  py-4
                  font-semibold
                  text-white
                  shadow-[0_10px_30px_rgba(19,0,255,0.35)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#0D00B8]
                  hover:shadow-[0_14px_35px_rgba(19,0,255,0.45)]
                  sm:w-auto
                "
              >
                Ver propiedades
              </a>

              {/* CONTACTANOS */}

              <a
                href="#contacto"
                className="
                  w-full
                  min-w-[210px]
                  rounded-full
                  border
                  border-white/40
                  bg-white/95
                  px-10
                  py-4
                  font-semibold
                  text-[#20232A]
                  shadow-xl
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-[#1300FF]
                  hover:text-white
                  hover:shadow-[0_14px_35px_rgba(19,0,255,0.35)]
                  sm:w-auto
                "
              >
                Contactanos
              </a>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          BUSCADOR
      ===================================================== */}

      <SearchBox />

      {/* =====================================================
          SERVICIOS
      ===================================================== */}

      <section id="servicios">
        <Services />
      </section>

      {/* =====================================================
          NOSOTROS
      ===================================================== */}

      <section id="nosotros">
        <About />
      </section>

      {/* =====================================================
          PROPIEDADES
      ===================================================== */}

      <section id="propiedades">
        <Properties />
      </section>

      {/* =====================================================
          CONTACTO
      ===================================================== */}

      <section id="contacto">
        <Contact />
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <Footer />

      {/* =====================================================
          WHATSAPP
      ===================================================== */}

      <Whatsapp />

    </main>
  );
}
 