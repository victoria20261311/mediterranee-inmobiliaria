export default function Contact() {
  const servicios = [
    "Ventas",
    "Alquileres",
    "Administraciones",
    "Tasaciones",
  ];

  return (
    <section
      id="contacto"
      className="
        scroll-mt-24
        bg-[#D5C9B8]
        py-20
        sm:py-24
        md:py-28
        px-4
        sm:px-6
      "
    >
      <div
        className="
          max-w-6xl
          mx-auto
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
        "
      >
        {/* INFORMACIÓN */}

        <div>
          <p
            className="
              text-[#1300FF]
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.28em]
              font-bold
            "
          >
            Mediterranée
          </p>

          <h2
            className="
              mt-3
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-[#20232A]
              leading-tight
            "
          >
            Contactanos
          </h2>

          {/* LÍNEA AZUL */}

          <div
            className="
              w-24
              h-[2px]
              bg-[#1300FF]
              mt-6
              rounded-full
              shadow-[0_0_10px_rgba(19,0,255,0.25)]
            "
          />

          <p
            className="
              mt-7
              text-base
              sm:text-lg
              text-[#4E535B]
              leading-8
              max-w-xl
            "
          >
            Estamos para ayudarte a encontrar,
            vender o administrar tu propiedad
            con asesoramiento profesional.
          </p>

          {/* SERVICIOS */}

          <div className="mt-8 flex flex-wrap gap-2.5">
            {servicios.map((item) => (
              <span
                key={item}
                className="
                  bg-[#F3EEE6]
                  border
                  border-[#C8BBA8]
                  shadow-sm
                  px-4
                  py-2.5
                  rounded-full
                  text-[#1300FF]
                  text-sm
                  font-semibold
                  hover:bg-[#E8E0D2]
                  hover:border-[#B7A995]
                  hover:-translate-y-0.5
                  hover:shadow-md
                  transition
                "
              >
                {item}
              </span>
            ))}
          </div>

          {/* DATOS */}

          <div className="mt-9 space-y-4">
            {/* WHATSAPP */}

            <a
              href="https://wa.me/59894239220"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex
                items-center
                gap-4
                text-[#20232A]
                hover:text-[#1300FF]
                transition
                group
              "
            >
              <span
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#F3EEE6]
                  border
                  border-[#C8BBA8]
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  group-hover:bg-[#E8E0D2]
                  group-hover:border-[#B7A995]
                  group-hover:scale-105
                  transition
                "
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M20 3.8A10.04 10.04 0 0 0 12.86 1C7.31 1 2.8 5.51 2.8 11.06c0 1.77.46 3.49 1.34 5.01L2.72 21.9l5.97-1.39a10.1 10.1 0 0 0 4.17.91h.01c5.55 0 10.06-4.51 10.06-10.06A10 10 0 0 0 20 3.8Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.42 7.12c.2-.45.41-.46.75-.47h.64c.2 0 .42.08.52.37l.79 1.88c.1.24.06.43-.08.62l-.51.68c-.14.19-.29.39-.12.69.17.3.75 1.23 1.62 1.99 1.12.98 2.06 1.28 2.35 1.42.29.15.46.13.63-.08l.88-1.04c.18-.21.37-.18.62-.11l1.82.86c.25.12.42.18.48.29.06.11.06.64-.15 1.23-.21.59-1.21 1.13-1.67 1.2-.43.07-.98.1-1.58-.1-.36-.12-.83-.27-1.43-.53-2.51-1.08-4.14-3.63-4.27-3.79-.13-.17-1.02-1.35-1.02-2.58 0-1.22.64-1.82.87-2.08Z"
                    fill="currentColor"
                  />
                </svg>
              </span>

              <span className="font-semibold text-base sm:text-lg">
                094 239 220
              </span>
            </a>

            {/* UBICACIÓN */}

            <div
              className="
                flex
                items-center
                gap-4
                text-[#20232A]
              "
            >
              <span
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#F3EEE6]
                  border
                  border-[#C8BBA8]
                  shadow-sm
                  flex
                  items-center
                  justify-center
                "
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M12 21s7-6.05 7-12a7 7 0 1 0-14 0c0 5.95 7 12 7 12Z"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                  <circle
                    cx="12"
                    cy="9"
                    r="2.2"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  />
                </svg>
              </span>

              <span className="font-semibold text-base sm:text-lg">
                Shangrilá · Ciudad de la Costa · Montevideo
              </span>
            </div>

            {/* DIRECCIÓN */}

            <div
              className="
                ml-[3.75rem]
                text-[#4E535B]
                text-sm
                sm:text-base
                leading-7
              "
            >
              <p>Avenida Calcagno M56 S24</p>
              <p>Tel. 2682 7157</p>
              <p>Lunes a viernes · 10:00 a 18:00 hs.</p>
            </div>
          </div>
        </div>

        {/* TARJETA */}

        <div
          className="
            relative
            bg-[#E8E0D2]
            rounded-[2rem]
            sm:rounded-[2.5rem]
            p-7
            sm:p-9
            md:p-11
            border
            border-[#C8BBA8]
            shadow-[0_20px_60px_rgba(48,45,40,0.16)]
            text-center
            overflow-hidden
          "
        >
          {/* DETALLES */}

          <div
            className="
              absolute
              -top-20
              -right-20
              w-48
              h-48
              rounded-full
              bg-[#1300FF]/5
            "
          />

          <div
            className="
              absolute
              -bottom-24
              -left-20
              w-52
              h-52
              rounded-full
              bg-white/30
            "
          />

          <div className="relative z-10">
            {/* ICONO */}

            <div
              className="
                w-20
                h-20
                sm:w-24
                sm:h-24
                mx-auto
                rounded-3xl
                bg-[#F3EEE6]
                border
                border-[#C8BBA8]
                flex
                items-center
                justify-center
                text-4xl
                sm:text-5xl
                shadow-sm
              "
            >
              🏡
            </div>

            <p
              className="
                mt-7
                text-[#1300FF]
                text-xs
                uppercase
                tracking-[0.28em]
                font-bold
              "
            >
              Estamos para ayudarte
            </p>

            <h3
              className="
                mt-3
                text-3xl
                sm:text-4xl
                font-bold
                text-[#20232A]
              "
            >
              Hablemos de tu propiedad
            </h3>

            <p
              className="
                mt-5
                text-[#4E535B]
                text-base
                sm:text-lg
                leading-8
              "
            >
              Contanos qué necesitás.
              Nuestro equipo está listo para asesorarte.
            </p>

            {/* BOTÓN WHATSAPP */}

            <a
              href="https://wa.me/59894239220"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                mt-8
                bg-[#1300FF]
                hover:bg-[#0D00B8]
                text-white
                px-8
                sm:px-10
                py-4
                rounded-full
                font-bold
                shadow-[0_8px_25px_rgba(19,0,255,0.25)]
                hover:shadow-[0_10px_30px_rgba(19,0,255,0.35)]
                hover:-translate-y-0.5
                transition-all
                duration-300
              "
            >
              <span className="text-xl">
                📲
              </span>

              Escribir por WhatsApp

              <span>
                →
              </span>
            </a>

            {/* LÍNEA AZUL */}

            <div
              className="
                w-24
                h-[2px]
                bg-[#1300FF]
                mx-auto
                mt-8
                rounded-full
              "
            />

            <p
              className="
                mt-3
                text-[#1300FF]
                text-xs
                uppercase
                tracking-[0.22em]
                font-semibold
              "
            >
              Mediterranée Servicios Inmobiliarios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}