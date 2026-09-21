export default function About() {
  return (
    <section
      id="nosotros"
      className="
        scroll-mt-24
        bg-[#E8E0D2]
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

        {/* =========================
            PRESENTACIÓN
        ========================= */}

        <div>

          <p
            className="
              text-[#3F5870]
              text-xs
              sm:text-sm
              uppercase
              tracking-[0.22em]
              sm:tracking-[0.3em]
              font-bold
            "
          >
            Mediterranée Servicios Inmobiliarios
          </p>

          <h2
            className="
              mt-4
              sm:mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-[#20232A]
            "
          >
            Todo en un mismo lugar
          </h2>

          <div
            className="
              w-20
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
            "
          >
            Somos una inmobiliaria ubicada en Shangrilá,
            Ciudad de la Costa, especializada en{" "}
            <strong className="text-[#20232A]">
              ventas, alquileres, administraciones y tasaciones.
            </strong>
          </p>

          <p
            className="
              mt-5
              text-base
              sm:text-lg
              text-[#4E535B]
              leading-8
            "
          >
            Acompañamos cada operación con{" "}
            <strong className="text-[#20232A]">
              profesionalismo, cercanía y conocimiento del mercado inmobiliario
            </strong>
            , porque sabemos que detrás de cada propiedad hay una decisión
            importante y un patrimonio que cuidar.
          </p>

          {/* =========================
              VENTAS
          ========================= */}

          <div
            className="
              mt-8
              bg-white
              rounded-3xl
              p-6
              sm:p-7
              border
              border-[#D6CCBC]
              shadow-[0_8px_30px_rgba(70,60,50,0.07)]
              hover:shadow-[0_14px_35px_rgba(70,60,50,0.12)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-2xl
                  bg-[#F3EEE6]
                  border
                  border-[#D6CCBC]
                  flex
                  items-center
                  justify-center
                  text-[#3F5870]
                "
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M3 10.5L12 3l9 7.5" />
                  <path d="M5 9.5V21h14V9.5" />
                  <path d="M9 21v-6h6v6" />
                  <path d="M16 6h4" />
                  <path d="M18 4v4" />
                </svg>
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-[#20232A]
                  "
                >
                  Ventas
                </h3>

                <p
                  className="
                    mt-2
                    text-[#3F5870]
                    font-semibold
                    text-sm
                    sm:text-base
                  "
                >
                  Vendé tu propiedad con la tranquilidad de estar en buenas manos.
                </p>

                <p
                  className="
                    mt-2
                    text-[#4E535B]
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  Trabajamos para que tu inmueble encuentre al comprador
                  adecuado, con una estrategia pensada para destacar sus
                  fortalezas y alcanzar el mejor resultado posible.
                  Te acompañamos desde la tasación hasta el cierre de la
                  operación, con asesoramiento personalizado, comunicación
                  clara y total transparencia.
                </p>

              </div>
            </div>
          </div>

          {/* =========================
              ALQUILERES
          ========================= */}

          <div
            className="
              mt-4
              bg-white
              rounded-3xl
              p-6
              sm:p-7
              border
              border-[#D6CCBC]
              shadow-[0_8px_30px_rgba(70,60,50,0.07)]
              hover:shadow-[0_14px_35px_rgba(70,60,50,0.12)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-2xl
                  bg-[#F3EEE6]
                  border
                  border-[#D6CCBC]
                  flex
                  items-center
                  justify-center
                  text-[#3F5870]
                "
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="8.5" cy="15.5" r="3.5" />
                  <path d="M11 13l8-8" />
                  <path d="M17 5l2 2" />
                  <path d="M15 7l2 2" />
                  <path d="M5.5 18.5L4 20" />
                </svg>
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-[#20232A]
                  "
                >
                  Alquileres
                </h3>

                <p
                  className="
                    mt-2
                    text-[#3F5870]
                    font-semibold
                    text-sm
                    sm:text-base
                  "
                >
                  Encontrá tu próximo hogar o el inquilino ideal con respaldo profesional.
                </p>

                <p
                  className="
                    mt-2
                    text-[#4E535B]
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  Nos ocupamos de cada etapa del proceso para que alquilar sea
                  simple, seguro y transparente. Analizamos las necesidades de
                  propietarios e inquilinos, brindamos asesoramiento y buscamos
                  generar operaciones que funcionen a largo plazo.
                </p>

              </div>
            </div>
          </div>

          {/* =========================
              ADMINISTRACIONES
          ========================= */}

          <div
            className="
              mt-4
              bg-white
              rounded-3xl
              p-6
              sm:p-7
              border
              border-[#D6CCBC]
              shadow-[0_8px_30px_rgba(70,60,50,0.07)]
              hover:shadow-[0_14px_35px_rgba(70,60,50,0.12)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            <div className="flex items-start gap-4">

              <div
                className="
                  w-12
                  h-12
                  shrink-0
                  rounded-2xl
                  bg-[#F3EEE6]
                  border
                  border-[#D6CCBC]
                  flex
                  items-center
                  justify-center
                  text-[#3F5870]
                "
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M4 21V5l8-3 8 3v16" />
                  <path d="M2 21h20" />
                  <path d="M8 8h1" />
                  <path d="M15 8h1" />
                  <path d="M8 12h1" />
                  <path d="M15 12h1" />
                  <path d="M10 21v-5h4v5" />
                </svg>
              </div>

              <div>

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    text-[#20232A]
                  "
                >
                  Administraciones
                </h3>

                <p
                  className="
                    mt-2
                    text-[#3F5870]
                    font-semibold
                    text-sm
                    sm:text-base
                  "
                >
                  Tu propiedad merece una gestión responsable y dedicada.
                </p>

                <p
                  className="
                    mt-2
                    text-[#4E535B]
                    text-sm
                    sm:text-base
                    leading-7
                  "
                >
                  Nos encargamos de la administración con seguimiento,
                  compromiso y atención personalizada, cuidando cada detalle
                  para que puedas disfrutar de la tranquilidad de saber que
                  tu inmueble está en buenas manos.
                </p>

              </div>
            </div>
          </div>

          {/* =========================
              UBICACIÓN
          ========================= */}

          <div
            className="
              mt-8
              flex
              items-center
              gap-3
              text-[#20232A]
            "
          >
            <span
              className="
                w-10
                h-10
                rounded-xl
                bg-[#F3EEE6]
                border
                border-[#D6CCBC]
                shadow-sm
                flex
                items-center
                justify-center
                text-[#3F5870]
              "
            >
              <svg
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
            </span>

            <p className="font-semibold">
              Shangrilá · Ciudad de la Costa · Montevideo
            </p>
          </div>

        </div>

        {/* =========================
            FILOSOFÍA
        ========================= */}

        <div
          className="
            relative
            bg-[#DDD4C6]
            rounded-[2rem]
            sm:rounded-[2.5rem]
            p-7
            sm:p-9
            md:p-11
            border
            border-[#C8BBA8]
            shadow-[0_18px_50px_rgba(70,60,50,0.12)]
            overflow-hidden
          "
        >

          {/* DETALLES DECORATIVOS */}

          <div
            className="
              absolute
              -top-16
              -right-16
              w-40
              h-40
              rounded-full
              bg-[#1300FF]/5
            "
          />

          <div
            className="
              absolute
              -bottom-20
              -left-20
              w-44
              h-44
              rounded-full
              bg-white/40
            "
          />

          <div className="relative z-10">

            <p
              className="
                text-[#1300FF]
                text-xs
                uppercase
                tracking-[0.25em]
                font-bold
              "
            >
              Nuestra filosofía
            </p>

            <h3
              className="
                mt-3
                text-3xl
                sm:text-4xl
                font-bold
                text-[#20232A]
                leading-tight
              "
            >
              Confianza que construye
              relaciones
            </h3>

            <div
              className="
                w-16
                h-[2px]
                bg-[#1300FF]
                mt-5
                rounded-full
                shadow-[0_0_10px_rgba(19,0,255,0.25)]
              "
            />

            <p
              className="
                mt-7
                text-[#4E535B]
                text-base
                sm:text-lg
                leading-8
              "
            >
              Creamos relaciones basadas en{" "}
              <strong className="text-[#20232A]">
                confianza, transparencia y compromiso.
              </strong>
            </p>

            <p
              className="
                mt-5
                text-[#4E535B]
                text-base
                sm:text-lg
                leading-8
              "
            >
              Cada propiedad tiene una historia y cada cliente tiene una
              necesidad diferente. Nuestro objetivo es escucharte, asesorarte
              y acompañarte para que puedas tomar decisiones con seguridad.
            </p>

            <p
              className="
                mt-5
                text-[#4E535B]
                text-base
                sm:text-lg
                leading-8
              "
            >
              Ponemos nuestro conocimiento del mercado y nuestra experiencia
              al servicio de tu patrimonio, buscando siempre una atención
              cercana, clara y profesional.
            </p>

            {/* =========================
                COMPROMISO / CONTACTO
            ========================= */}

            <div
              className="
                mt-9
                bg-[#F3EEE6]
                rounded-3xl
                p-6
                sm:p-7
                border
                border-[#C8BBA8]
                shadow-[0_10px_30px_rgba(70,60,50,0.09)]
              "
            >

              <div className="flex items-start gap-4">

                <div
                  className="
                    w-12
                    h-12
                    shrink-0
                    rounded-2xl
                    bg-[#3F5870]
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-[0_6px_18px_rgba(63,88,112,0.20)]
                  "
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>

                <div>

                  <p
                    className="
                      text-[#20232A]
                      font-bold
                      text-lg
                      sm:text-xl
                    "
                  >
                    Más que una inmobiliaria, somos tu respaldo.
                  </p>

                  <p
                    className="
                      mt-2
                      text-[#4E535B]
                      text-sm
                      sm:text-base
                      leading-7
                    "
                  >
                    Escuchamos, asesoramos y acompañamos para que puedas tomar
                    buenas decisiones con la tranquilidad de contar con un
                    equipo comprometido.
                  </p>

                </div>

              </div>

              {/* FRASE FINAL */}

              <div
                className="
                  mt-6
                  pt-5
                  border-t
                  border-[#C8BBA8]
                "
              >
                <p
                  className="
                    text-[#1300FF]
                    font-bold
                    text-lg
                    sm:text-xl
                  "
                >
                  Tu propiedad. Tu proyecto. Nuestro compromiso.
                </p>

                <p
                  className="
                    mt-1
                    text-[#687780]
                    text-sm
                  "
                >
                  Una buena operación se construye con confianza.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}