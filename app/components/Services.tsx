export default function Services() {
const servicios = [
{
titulo: "Ventas",
icono: ( <svg
       width="28"
       height="28"
       viewBox="0 0 24 24"
       fill="none"
       stroke="currentColor"
       strokeWidth="1.8"
       strokeLinecap="round"
       strokeLinejoin="round"
       aria-hidden="true"
     > <path d="M3 10.5L12 3l9 7.5" /> <path d="M5 9.5V21h14V9.5" /> <path d="M9 21v-6h6v6" /> <path d="M16.5 5.5h2.5" /> <path d="M19 3v2.5" /> </svg>
),
descripcion:
"Garantizamos el éxito en la venta de tu inmueble. Te acompañamos con asesoramiento experto, tasaciones reales y un plan de marketing a tu medida. Seguridad, transparencia y el mejor trato para tu patrimonio. Contáctanos y vende con confianza.",
},


{
  titulo: "Alquileres",
  icono: (
    <svg
      width="28"
      height="28"
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
  ),
  descripcion:
    "Hacemos que encontrar tu próximo hogar o el inquilino ideal sea más simple. Te acompañamos con asesoramiento profesional, atención personalizada y una gestión segura y transparente, tanto para propietarios como para inquilinos.",
},

{
  titulo: "Administraciones",
  icono: (
    <svg
      width="28"
      height="28"
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
  ),
  descripcion:
    "Dejá tu propiedad en buenas manos. Gestionamos cada detalle con responsabilidad, seguimiento y atención personalizada, para que disfrutes de una administración eficiente, transparente y, sobre todo, tranquila.",
},

{
  titulo: "Tasaciones",
  icono: (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="M7 16l4-5 3 2 5-7" />
      <path d="M17 6h2v2" />
    </svg>
  ),
  descripcion:
    "Conocé el verdadero valor de tu propiedad. Realizamos tasaciones profesionales basadas en el análisis del inmueble y del mercado, brindándote una valoración real, transparente y confiable.",
},


];

return ( <section
   id="servicios"
   className="
     scroll-mt-32
     py-20
     sm:py-24
     md:py-28
     px-4
     sm:px-6
     bg-[#F2F3FF]
   "
 > <div className="max-w-6xl mx-auto">

```
    {/* ENCABEZADO */}

    <div className="text-center max-w-3xl mx-auto">

      <p
        className="
          text-[#1300FF]
          text-xs
          sm:text-sm
          uppercase
          tracking-[0.25em]
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
        Nuestros servicios
      </h2>

      <div
        className="
          w-20
          h-[2px]
          bg-[#1300FF]
          mx-auto
          mt-6
          rounded-full
          shadow-[0_0_10px_rgba(19,0,255,0.25)]
        "
      />

      <p
        className="
          mt-6
          text-[#4E535B]
          text-base
          sm:text-lg
          leading-relaxed
        "
      >
        Soluciones inmobiliarias pensadas para acompañarte
        en cada etapa.
      </p>

    </div>

    {/* TARJETAS */}

    <div
      className="
        grid
        sm:grid-cols-2
        lg:grid-cols-4
        gap-5
        md:gap-6
        mt-12
        md:mt-14
      "
    >

      {servicios.map((item) => (
        <div
          key={item.titulo}
          className="
            group
            relative
            bg-white
            rounded-[1.75rem]
            p-7
            sm:p-8
            border
            border-[#1300FF]/10
            shadow-[0_10px_35px_rgba(19,0,255,0.07)]
            hover:-translate-y-2
            hover:shadow-[0_18px_45px_rgba(19,0,255,0.13)]
            transition-all
            duration-300
          "
        >

          {/* ICONO */}

          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#F2F3FF]
              border
              border-[#1300FF]/20
              flex
              items-center
              justify-center
              text-[#1300FF]
              shadow-sm
              group-hover:bg-[#1300FF]
              group-hover:text-white
              group-hover:border-[#1300FF]
              transition-all
              duration-300
            "
          >
            {item.icono}
          </div>

          {/* TITULO */}

          <h3
            className="
              mt-7
              text-2xl
              font-bold
              text-[#20232A]
              group-hover:text-[#1300FF]
              transition
            "
          >
            {item.titulo}
          </h3>

          {/* LINEA */}

          <div
            className="
              w-10
              h-[2px]
              bg-[#1300FF]
              mt-4
              rounded-full
              group-hover:w-16
              transition-all
              duration-300
            "
          />

          {/* DESCRIPCION */}

          <p
            className="
              mt-5
              text-[#4E535B]
              leading-7
              text-sm
              sm:text-base
            "
          >
            {item.descripcion}
          </p>

        </div>
      ))}

    </div>

  </div>
</section>


);
}
