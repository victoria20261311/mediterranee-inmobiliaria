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
        bg-[#FAF8F3]
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
                  bg-white
                  border
                  border-[#1300FF]/20
                  shadow-sm
                  px-4
                  py-2.5
                  rounded-full
                  text-[#1300FF]
                  text-sm
                  font-semibold
                  hover:bg-[#1300FF]/5
                  hover:border-[#1300FF]/40
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
                  bg-white
                  border
                  border-[#1300FF]/20
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  text-xl
                  group-hover:bg-[#1300FF]/5
                  group-hover:border-[#1300FF]/40
                  group-hover:scale-105
                  transition
                "
              >
                📱
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
                  bg-white
                  border
                  border-[#1300FF]/20
                  shadow-sm
                  flex
                  items-center
                  justify-center
                  text-xl
                "
              >
                📍
              </span>

              <span className="font-semibold text-base sm:text-lg">
                Shangrilá · Ciudad de la Costa · Montevideo
              </span>

            </div>

          </div>

        </div>

        {/* TARJETA */}

        <div
          className="
            relative
            bg-white
            rounded-[2rem]
            sm:rounded-[2.5rem]
            p-7
            sm:p-9
            md:p-11
            border
            border-[#1300FF]/10
            shadow-[0_20px_60px_rgba(19,0,255,0.08)]
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
              bg-[#1300FF]/7
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
              bg-[#1300FF]/4
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
                bg-[#F2F3FF]
                border
                border-[#1300FF]/15
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
