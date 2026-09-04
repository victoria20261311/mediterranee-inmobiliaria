import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

type Props = {
  searchParams: Promise<{
    operacion?: string;
    tipo?: string;
    zona?: string;
    dormitorios?: string;
    destacada?: string;
  }>;
};

export default async function PropiedadesPage({
  searchParams,
}: Props) {
  const filtros = await searchParams;

  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-[#FAF8F3] px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold text-red-600">
            Error cargando propiedades
          </h1>

          <pre className="mt-6 bg-white p-6 rounded-2xl overflow-auto border border-[#1300FF]/10">
            {JSON.stringify(error, null, 2)}
          </pre>

        </div>
      </main>
    );
  }

  const propiedadesFiltradas = (propiedades || []).filter(
    (propiedad: any) => {

      const coincideOperacion =
        !filtros.operacion ||
        String(propiedad.operacion || "").toUpperCase() ===
          filtros.operacion.toUpperCase();

      const coincideTipo =
        !filtros.tipo ||
        String(propiedad.tipo || "").toLowerCase() ===
          filtros.tipo.toLowerCase();

      const coincideZona =
        !filtros.zona ||
        String(propiedad.zona || "").toLowerCase() ===
          filtros.zona.toLowerCase();

      const coincideDestacada =
        !filtros.destacada ||
        (
          filtros.destacada === "true" &&
          propiedad.destacada === true
        );

      let coincideDormitorios = true;

      if (filtros.dormitorios) {

        const dormitorios =
          Number(propiedad.dormitorios || 0);

        if (filtros.dormitorios === "3") {
          coincideDormitorios = dormitorios >= 3;
        } else {
          coincideDormitorios =
            dormitorios === Number(filtros.dormitorios);
        }

      }

      return (
        coincideOperacion &&
        coincideTipo &&
        coincideZona &&
        coincideDestacada &&
        coincideDormitorios
      );
    }
  );

  return (
    <main className="min-h-screen bg-[#FAF8F3]">

      {/* =========================
          ENCABEZADO
      ========================= */}

      <section className="px-4 sm:px-6 pt-20 md:pt-28 pb-10">

        <div className="max-w-6xl mx-auto">

          <Link
            href="/"
            className="
              inline-flex
              items-center
              gap-2
              text-[#1300FF]
              font-semibold
              hover:text-[#0D00B8]
              transition
            "
          >
            <span className="text-xl">
              ←
            </span>

            Volver al inicio
          </Link>

          <div className="mt-10">

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
              Mediterranée Servicios Inmobiliarios
            </p>

            <h1
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
              Nuestras propiedades
            </h1>

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
                mt-5
                max-w-2xl
                text-[#4E535B]
                text-base
                md:text-lg
                leading-relaxed
              "
            >
              Encontrá tu próximo lugar en Ciudad de la Costa y Montevideo.
            </p>

          </div>

          {/* FILTROS ACTIVOS */}

          {(filtros.operacion ||
            filtros.tipo ||
            filtros.zona ||
            filtros.dormitorios ||
            filtros.destacada) && (

            <div
              className="
                mt-8
                bg-white
                rounded-3xl
                p-5
                border
                border-[#1300FF]/10
                shadow-[0_10px_35px_rgba(19,0,255,0.08)]
              "
            >

              <p className="text-sm font-semibold text-[#4E535B]">
                Filtros seleccionados
              </p>

              <div className="flex flex-wrap gap-2 mt-3">

                {filtros.operacion && (
                  <span
                    className="
                      bg-[#1300FF]
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    {filtros.operacion}
                  </span>
                )}

                {filtros.tipo && (
                  <span
                    className="
                      bg-[#1300FF]
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    {filtros.tipo}
                  </span>
                )}

                {filtros.zona && (
                  <span
                    className="
                      bg-[#F2F3FF]
                      text-[#1300FF]
                      border
                      border-[#1300FF]/20
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    {filtros.zona}
                  </span>
                )}

                {filtros.dormitorios && (
                  <span
                    className="
                      bg-[#F2F3FF]
                      text-[#1300FF]
                      border
                      border-[#1300FF]/20
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    {filtros.dormitorios === "3"
                      ? "3+ dormitorios"
                      : `${filtros.dormitorios} dormitorios`}
                  </span>
                )}

                {filtros.destacada === "true" && (
                  <span
                    className="
                      bg-[#1300FF]
                      text-white
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      sm:text-sm
                      font-semibold
                    "
                  >
                    ⭐ Destacadas
                  </span>
                )}

              </div>

            </div>
          )}

        </div>

      </section>

      {/* =========================
          PROPIEDADES
      ========================= */}

      <section className="px-4 sm:px-6 pb-20">

        <div className="max-w-6xl mx-auto">

          {propiedadesFiltradas.length === 0 ? (

            <div
              className="
                bg-white
                rounded-[2rem]
                border
                border-[#1300FF]/10
                shadow-[0_15px_45px_rgba(19,0,255,0.08)]
                p-10
                md:p-16
                text-center
              "
            >

              <div className="text-5xl">
                🏠
              </div>

              <h2
                className="
                  mt-5
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[#20232A]
                "
              >
                No encontramos propiedades
              </h2>

              <p className="mt-3 text-[#4E535B]">
                Probá cambiando los filtros de búsqueda.
              </p>

              <Link
                href="/propiedades"
                className="
                  inline-flex
                  mt-7
                  bg-[#1300FF]
                  hover:bg-[#0D00B8]
                  text-white
                  px-7
                  py-3
                  rounded-full
                  font-semibold
                  transition
                  shadow-[0_8px_25px_rgba(19,0,255,0.25)]
                "
              >
                Ver todas las propiedades
              </Link>

            </div>

          ) : (

            <>

              {/* CANTIDAD */}

              <div className="flex items-center justify-between mb-6">

                <p className="text-sm text-[#4E535B]">

                  <span className="font-bold text-[#1300FF]">
                    {propiedadesFiltradas.length}
                  </span>{" "}

                  {propiedadesFiltradas.length === 1
                    ? "propiedad disponible"
                    : "propiedades disponibles"}

                </p>

              </div>

              {/* GRID */}

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

                {propiedadesFiltradas.map(
                  (propiedad: any) => {

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

                    const tienePrecio =
                      propiedad.precio !== null &&
                      propiedad.precio !== undefined &&
                      String(propiedad.precio).trim() !== "";

                    return (
                      <Link
                        key={propiedad.id}
                        href={`/propiedades/${propiedad.slug}`}
                        className="
                          group
                          bg-white
                          rounded-[1.75rem]
                          overflow-hidden
                          border
                          border-[#1300FF]/10
                          shadow-[0_12px_35px_rgba(19,0,255,0.09)]
                          hover:shadow-[0_20px_50px_rgba(19,0,255,0.15)]
                          transition-all
                          duration-300
                          hover:-translate-y-1
                        "
                      >

                        {/* FOTO */}

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

                          {imagen &&
                          imagen.startsWith("http") ? (

                            <Image
                              src={imagen}
                              alt={
                                propiedad.titulo ||
                                "Propiedad"
                              }
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                                bg-[#F2F3FF]
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
                              from-black/30
                              to-transparent
                              pointer-events-none
                            "
                          />

                          {/* OPERACIÓN */}

                          {propiedad.operacion && (
                            <span
                              className="
                                absolute
                                top-4
                                left-4
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
                              {propiedad.operacion}
                            </span>
                          )}

                          {/* DESTACADA */}

                          {propiedad.destacada === true && (
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
                          )}

                          {/* CANTIDAD DE FOTOS */}

                          {Array.isArray(propiedad.imagenes) &&
                            propiedad.imagenes.length > 1 && (

                              <span
                                className="
                                  absolute
                                  bottom-4
                                  right-4
                                  bg-black/50
                                  backdrop-blur-sm
                                  text-white
                                  px-3
                                  py-1.5
                                  rounded-full
                                  text-xs
                                  font-semibold
                                "
                              >
                                📷 {propiedad.imagenes.length}
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

                          <h2
                            className="
                              mt-2
                              text-2xl
                              font-bold
                              text-[#20232A]
                              group-hover:text-[#1300FF]
                              transition
                            "
                          >
                            {propiedad.titulo ||
                              "Propiedad"}
                          </h2>

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

                          {/* PRECIO */}

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
                                  text-[#1300FF]
                                "
                              >
                                {propiedad.precio}
                              </p>

                            </div>
                          )}

                          {/* CARACTERÍSTICAS */}

                          {(propiedad.dormitorios !== null &&
                            propiedad.dormitorios !== undefined) ||
                          (propiedad.banos !== null &&
                            propiedad.banos !== undefined) ||
                          (propiedad.metros !== null &&
                            propiedad.metros !== undefined) ? (

                            <div
                              className="
                                flex
                                flex-wrap
                                gap-x-5
                                gap-y-2
                                mt-5
                                pt-5
                                border-t
                                border-[#1300FF]/10
                                text-sm
                                text-[#4E535B]
                              "
                            >

                              {propiedad.dormitorios !== null &&
                                propiedad.dormitorios !== undefined && (
                                  <span>
                                    🛏️{" "}
                                    {propiedad.dormitorios}
                                  </span>
                                )}

                              {propiedad.banos !== null &&
                                propiedad.banos !== undefined && (
                                  <span>
                                    🚿{" "}
                                    {propiedad.banos}
                                  </span>
                                )}

                              {propiedad.metros !== null &&
                                propiedad.metros !== undefined && (
                                  <span>
                                    📐{" "}
                                    {propiedad.metros} m²
                                  </span>
                                )}

                            </div>

                          ) : null}

                          {/* BOTÓN */}

                          <div
                            className="
                              mt-6
                              flex
                              items-center
                              justify-between
                            "
                          >

                            <span
                              className="
                                text-[#1300FF]
                                font-bold
                                text-sm
                              "
                            >
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
                                group-hover:bg-[#1300FF]
                                group-hover:border-[#1300FF]
                                group-hover:text-white
                                transition
                              "
                            >
                              →
                            </span>

                          </div>

                        </div>

                      </Link>
                    );
                  }
                )}

              </div>

            </>
          )}

        </div>

      </section>

    </main>
  );
}
