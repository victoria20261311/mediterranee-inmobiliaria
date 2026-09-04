import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

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
        id="propiedades"
        className="
          scroll-mt-32
          bg-[#FAF8F3]
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

            <p
              className="
                mt-5
                text-[#4E535B]
              "
            >
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
        bg-[#FAF8F3]
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
              text-[#4E535B]
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
              bg-white
              rounded-[2rem]
              border
              border-[#1300FF]/10
              p-10
              text-center
              shadow-[0_10px_35px_rgba(19,0,255,0.07)]
            "
          >

            <div className="text-5xl">
              ⭐
            </div>

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

            <p
              className="
                mt-3
                text-[#4E535B]
              "
            >
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

              let imagen: string | null = null;

              if (
                Array.isArray(propiedad.imagenes) &&
                typeof propiedad.imagenes[0] === "string"
              ) {
                imagen = propiedad.imagenes[0];
              }

              if (
                !imagen &&
                typeof propiedad.imagen === "string"
              ) {
                imagen = propiedad.imagen;
              }

              const cantidadImagenes =
                Array.isArray(propiedad.imagenes)
                  ? propiedad.imagenes.length
                  : 0;

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
                    border-[#1300FF]/10
                    shadow-[0_10px_35px_rgba(19,0,255,0.07)]
                    hover:shadow-[0_18px_45px_rgba(19,0,255,0.13)]
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
                      bg-[#F2F3FF]
                      overflow-hidden
                    "
                  >

                    {imagen && imagen.startsWith("http") ? (
                      <Image
                        src={imagen}
                        alt={
                          propiedad.titulo ||
                          "Propiedad"
                        }
                        fill
                        sizes="
                          (max-width: 640px) 100vw,
                          (max-width: 1024px) 50vw,
                          33vw
                        "
                        className="
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
                          text-[#4E535B]/60
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

                    {(propiedad.zona ||
                      propiedad.ubicacion) && (
                      <p
                        className="
                          mt-3
                          text-[#4E535B]
                          text-sm
                          flex
                          items-center
                          gap-2
                        "
                      >

                        <span className="text-[#1300FF]">
                          📍
                        </span>

                        {propiedad.zona ||
                          propiedad.ubicacion}

                      </p>
                    )}

                    {tienePrecio && (
                      <div
                        className="
                          mt-5
                          pt-5
                          border-t
                          border-[#1300FF]/10
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

                      <span>
                        Ver propiedad
                      </span>

                      <span
                        className="
                          w-9
                          h-9
                          rounded-full
                          bg-[#F2F3FF]
                          border
                          border-[#1300FF]/20
                          flex
                          items-center
                          justify-center
                          text-[#1300FF]
                          group-hover/button:bg-[#1300FF]
                          group-hover/button:text-white
                          group-hover/button:border-[#1300FF]
                          transition
                        "
                      >
                        →
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

              <span className="text-lg">
                →
              </span>

            </Link>

          </div>
        )}

      </div>
    </section>
  );
}
