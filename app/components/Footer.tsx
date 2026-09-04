export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer
      className="
        bg-[#111318]
        text-white
        py-16
        sm:py-20
        px-4
        sm:px-6
      "
    >
      <div className="max-w-6xl mx-auto">

        {/* COLUMNAS */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-5
            md:gap-6
          "
        >

          {/* MARCA */}

          <div
            className="
              bg-white/[0.04]
              backdrop-blur-2xl
              rounded-[1.75rem]
              p-7
              sm:p-8
              border
              border-white/10
            "
          >

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                tracking-[0.08em]
              "
            >
              MEDITERRANÉE
            </h3>

            <p
              className="
                mt-3
                text-white/60
                text-xs
                sm:text-sm
                tracking-[0.25em]
                uppercase
              "
            >
              Servicios Inmobiliarios
            </p>

            {/* LÍNEA AZUL */}

            <div
              className="
                w-14
                h-[2px]
                bg-[#1300FF]
                mt-6
                rounded-full
                shadow-[0_0_10px_rgba(19,0,255,0.5)]
              "
            />

            <p
              className="
                mt-6
                text-[#1300FF]
                font-semibold
              "
            >
              Todo en un mismo lugar.
            </p>

          </div>

          {/* UBICACIÓN */}

          <div
            className="
              bg-white/[0.04]
              backdrop-blur-2xl
              rounded-[1.75rem]
              p-7
              sm:p-8
              border
              border-white/10
            "
          >

            <h4
              className="
                text-[#1300FF]
                text-sm
                font-bold
                tracking-[0.18em]
                uppercase
              "
            >
              Ubicación
            </h4>

            <div className="mt-5 space-y-2 text-white/80">

              <p>Shangrilá</p>

              <p>Ciudad de la Costa</p>

              <p>Montevideo</p>

            </div>

            <a
              href="/#contacto"
              className="
                inline-flex
                items-center
                gap-2
                mt-6
                text-sm
                font-semibold
                text-white
                hover:text-[#1300FF]
                transition
              "
            >
              Contactanos
              <span>→</span>
            </a>

          </div>

          {/* SERVICIOS */}

          <div
            className="
              bg-white/[0.04]
              backdrop-blur-2xl
              rounded-[1.75rem]
              p-7
              sm:p-8
              border
              border-white/10
            "
          >

            <h4
              className="
                text-[#1300FF]
                text-sm
                font-bold
                tracking-[0.18em]
                uppercase
              "
            >
              Servicios
            </h4>

            <div className="mt-5 space-y-3 text-white/80">

              <p>Ventas</p>

              <p>Alquileres</p>

              <p>Administraciones</p>

              <p>Tasaciones</p>

            </div>

          </div>

        </div>

        {/* PARTE INFERIOR */}

        <div
          className="
            mt-10
            sm:mt-14
            pt-7
            sm:pt-8
            border-t
            border-white/10
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
        >

          <p
            className="
              text-xs
              sm:text-sm
              text-white/45
              text-center
            "
          >
            © {anio} Mediterranée Servicios Inmobiliarios.
            Todos los derechos reservados.
          </p>

          {/* WHATSAPP */}

          <a
            href="https://wa.me/59894239220"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              bg-[#1300FF]
              border
              border-[#1300FF]
              px-7
              py-3
              rounded-full
              font-semibold
              text-sm
              text-white
              shadow-[0_6px_20px_rgba(19,0,255,0.25)]
              hover:bg-[#0D00B8]
              hover:border-[#0D00B8]
              hover:shadow-[0_8px_25px_rgba(19,0,255,0.35)]
              hover:-translate-y-0.5
              transition-all
            "
          >
            <span>📲</span>
            WhatsApp
          </a>

        </div>

      </div>
    </footer>
  );
}
