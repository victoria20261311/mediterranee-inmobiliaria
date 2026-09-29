import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

function limpiarUrlImagen(valor: unknown): string | null {
  if (typeof valor !== "string") return null;

  let limpia = valor.trim();

  if (!limpia) return null;

  const markdownMatch = limpia.match(
    /^\[.*?\]\((https?:\/\/[^)]+)\)$/
  );

  if (markdownMatch) {
    limpia = markdownMatch[1];
  }

  if (/^https?:\/\//i.test(limpia)) {
    return limpia;
  }

  if (limpia.startsWith("/")) {
    const rutaBucket = limpia
      .replace(/^\/+/, "")
      .split("/")
      .map((parte) => encodeURIComponent(parte))
      .join("/");

    return `${SUPABASE_STORAGE}/${rutaBucket}`;
  }

  if (limpia.includes("/") && !limpia.startsWith(".")) {
    const rutaBucket = limpia
      .split("/")
      .map((parte) => encodeURIComponent(parte))
      .join("/");

    return `${SUPABASE_STORAGE}/${rutaBucket}`;
  }

  return null;
}

function obtenerImagenes(propiedad: any): string[] {
  let imagenesOriginales: unknown[] = [];

  if (Array.isArray(propiedad.imagenes)) {
    imagenesOriginales = propiedad.imagenes;
  } else if (typeof propiedad.imagenes === "string") {
    try {
      const parseadas = JSON.parse(propiedad.imagenes);

      if (Array.isArray(parseadas)) {
        imagenesOriginales = parseadas;
      }
    } catch {
      imagenesOriginales = [];
    }
  }

  const imagenes = imagenesOriginales
    .map((imagen) => limpiarUrlImagen(imagen))
    .filter((imagen): imagen is string => Boolean(imagen));

  if (
    imagenes.length === 0 &&
    typeof propiedad.imagen === "string"
  ) {
    const portada = limpiarUrlImagen(propiedad.imagen);

    if (portada) {
      imagenes.push(portada);
    }
  }

  return imagenes;
}

export default async function Properties() {
  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .eq("destacada", true)
    .order("id", { ascending: true })
    .limit(6);

  if (error) {
    return (
      <section
        id="propiedades-prueba"
        className="
          scroll-mt-32
          bg-[#E8E0D2]
          py-20
          sm:py-24
          md:py-28
          px-4
          sm:px-6
        "
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
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
                font-bold
                text-[#20232A]
              "
            >
              Propiedades destacadas
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

            <p className="mt-5 text-[#53616B]">
              No pudimos cargar las propiedades en este momento.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="propiedades"
      className="
        scroll-mt-32
        bg-[#E8E0D2]
        py-20
        sm:py-24
        md:py-28
        px-4
        sm:px-6
      "
    >
      <div className="max-w-6xl mx-auto">

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
            Propiedades destacadas
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
              text-[#53616B]
              text-base
              sm:text-lg
              leading-relaxed
            "
          >
            Encontrá tu próximo hogar o inversión.
          </p>
        </div>

        {/* PROPIEDADES */}

        {!propiedades || propiedades.length === 0 ? (
          <div
            className="
              mt-12
              bg-[#F3EEE6]
              rounded-[2rem]
              border
              border-[#D6CCBC]
              p-10
              text-center
              shadow-[0_10px_35px_rgba(80,65,45,0.08)]
            "
          >
            <div className="text-5xl">⭐</div>

            <h3
              className="
                mt-5
                text-2xl
                font-bold
                text-[#20232A]
              "
            >
              Próximamente
            </h3>

            <p className="mt-3 text-[#53616B]">
              Estamos seleccionando nuestras propiedades destacadas.
            </p>
          </div>
        ) : (
          <div
            className="
              grid
              sm:grid-cols-2
              lg:grid-cols-3
              gap-6
              md:gap-8
              mt-12
              md:mt-14
            "
          >
            {propiedades.map((propiedad: any) => {
              const imagenes = obtenerImagenes(propiedad);

              const imagen =
                propiedad.slug === "aeris-2"
                  ? "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades/aeris-2/28.png"
                  : limpiarUrlImagen(propiedad.imagen) ||
                    imagenes[0] ||
                    null;

              const cantidadImagenes = imagenes.length;

              const tienePrecio =
                propiedad.precio !== null &&
                propiedad.precio !== undefined &&
                String(propiedad.precio).trim() !== "";

              return (
                <article
                  key={propiedad.id}
                  className="
                    group
                    bg-white
                    rounded-[1.75rem]
                    overflow-hidden
                    border
                    border-[#D6CCBC]
                    shadow-[0_10px_35px_rgba(80,65,45,0.10)]
                    hover:shadow-[0_18px_45px_rgba(80,65,45,0.16)]
                    hover:-translate-y-1
                    transition-all
                    duration-300
                  "
                >

                  {/* IMAGEN */}

                  <div
                    className="
                      relative
                      h-64
                      sm:h-60
                      md:h-64
                      bg-[#F3EEE6]
                      overflow-hidden
                    "
                  >
                    {imagen ? (
                      <img
                        src={imagen}
                        alt={propiedad.titulo || "Propiedad"}
                        className="
                          absolute
                          inset-0
                          w-full
                          h-full
                          object-cover
                          transition-transform
                          duration-500
                          group-hover:scale-105
                        "
                      />
                    ) : (
                      <div
                        className="
                          w-full
                          h-full
                          flex
                          items-center
                          justify-center
                          text-[#53616B]/60
                        "
                      >
                        Sin imagen
                      </div>
                    )}

                    {/* DEGRADADO */}

                    <div
                      className="
                        absolute
                        inset-x-0
                        bottom-0
                        h-24
                        bg-gradient-to-t
                        from-black/45
                        to-transparent
                        pointer-events-none
                      "
                    />

                    {/* DESTACADA */}

                    <span
                      className="
                        absolute
                        top-4
                        right-4
                        bg-[#1300FF]
                        text-white
                        px-4
                        py-2
                        rounded-full
                        text-xs
                        font-bold
                        tracking-wider
                        uppercase
                        shadow-[0_6px_18px_rgba(19,0,255,0.3)]
                      "
                    >
                      ⭐ Destacada
                    </span>

                    {/* OPERACIÓN */}

                    {propiedad.operacion && (
                      <span
                        className="
                          absolute
                          top-4
                          left-4
                          bg-[#20232A]/85
                          backdrop-blur-sm
                          text-white
                          px-4
                          py-2
                          rounded-full
                          text-xs
                          font-bold
                          tracking-wider
                          uppercase
                          shadow-lg
                        "
                      >
                        {propiedad.operacion}
                      </span>
                    )}

                    {/* CANTIDAD DE FOTOS */}

                    {cantidadImagenes > 1 && (
                      <span
                        className="
                          absolute
                          bottom-4
                          right-4
                          bg-black/65
                          backdrop-blur-sm
                          text-white
                          px-3
                          py-1.5
                          rounded-full
                          text-xs
                          font-semibold
                        "
                      >
                        📷 {cantidadImagenes}
                      </span>
                    )}
                  </div>

                  {/* INFORMACIÓN */}

                  <div className="p-6">

                    {propiedad.tipo && (
                      <p
                        className="
                          text-xs
                          uppercase
                          tracking-[0.18em]
                          text-[#1300FF]
                          font-bold
                        "
                      >
                        {propiedad.tipo}
                      </p>
                    )}

                    <h3
                      className="
                        mt-2
                        text-2xl
                        font-bold
                        text-[#20232A]
                        group-hover:text-[#1300FF]
                        transition
                      "
                    >
                      {propiedad.titulo || "Propiedad"}
                    </h3>

                    {(propiedad.zona || propiedad.ubicacion) && (
                      <p
                        className="
                          mt-3
                          text-[#53616B]
                          text-sm
                          flex
                          items-center
                          gap-2
                        "
                      >
                        <span className="text-[#1300FF]">
                          📍
                        </span>

                        {propiedad.zona || propiedad.ubicacion}
                      </p>
                    )}

                    {tienePrecio && (
                      <div
                        className="
                          mt-5
                          pt-5
                          border-t
                          border-[#D6CCBC]
                        "
                      >
                        <p
                          className="
                            text-xl
                            font-bold
                            text-[#20232A]
                          "
                        >
                          {propiedad.precio}
                        </p>
                      </div>
                    )}

                    {/* BOTÓN */}

                    <Link
                      href={`/propiedades/${propiedad.slug}`}
                      className="
                        mt-6
                        flex
                        items-center
                        justify-between
                        w-full
                        text-[#1300FF]
                        font-bold
                        text-sm
                        group/button
                      "
                    >
                      <span
                        className="
                          transition-transform
                          duration-300
                          group-hover/button:translate-x-0.5
                        "
                      >
                        Ver propiedad
                      </span>

                      <span
                        className="
                          relative
                          flex
                          items-center
                          justify-center
                          w-10
                          h-10
                          text-[#1300FF]
                          transition-all
                          duration-300
                          group-hover/button:translate-x-1
                        "
                        aria-hidden="true"
                      >
                        <svg
                          width="25"
                          height="25"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h13" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        )}

        {/* VER TODAS */}

        {propiedades && propiedades.length > 0 && (
          <div className="mt-12 text-center">
            <Link
              href="/propiedades"
              className="
                inline-flex
                items-center
                gap-3
                bg-[#1300FF]
                hover:bg-[#0D00B8]
                text-white
                px-8
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
              Ver todas las propiedades

              <span className="flex items-center">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h13" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}