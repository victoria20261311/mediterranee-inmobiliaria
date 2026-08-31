import Image from "next/image";
import Link from "next/link";
import { propiedades } from "../data/propiedades";

type Props = {
  actual: string;
};

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

function obtenerImagen(propiedad: any): string | null {
  let imagen: unknown = null;

  // Primero buscamos en imagenes[]
  if (
    Array.isArray(propiedad.imagenes) &&
    propiedad.imagenes.length > 0
  ) {
    imagen = propiedad.imagenes[0];
  }

  // Si no existe, usamos imagen
  else if (propiedad.imagen) {
    imagen = propiedad.imagen;
  }

  // Comprobamos que sea texto
  if (typeof imagen !== "string") {
    return null;
  }

  const valor = imagen.trim();

  if (!valor) {
    return null;
  }

  // Si ya es una URL completa
  if (
    valor.startsWith("http://") ||
    valor.startsWith("https://")
  ) {
    return valor;
  }

  // Si es una ruta local
  if (valor.startsWith("/")) {
    return valor;
  }

  // Si es solamente el nombre del archivo,
  // buscamos dentro de la carpeta de esa propiedad
  return `${SUPABASE_STORAGE}/${propiedad.slug}/${encodeURIComponent(
    valor
  )}`;
}

export default function SimilarProperties({
  actual,
}: Props) {

  // Sacamos la propiedad actual
  // y mostramos hasta 3 propiedades diferentes
  const similares = propiedades
    .filter((p) => p.slug !== actual)
    .slice(0, 3);

  return (
    <section className="mt-16">

      {/* TÍTULO */}

      <h2
        className="
          text-3xl
          font-bold
          text-[#303C95]
          mb-8
        "
      >
        🏡 Propiedades similares
      </h2>


      {/* PROPIEDADES */}

      <div
        className="
          grid
          sm:grid-cols-2
          md:grid-cols-3
          gap-8
        "
      >

        {similares.map((propiedad) => {

          const imagenPrincipal =
            obtenerImagen(propiedad);

          return (
            <article
              key={propiedad.id}
              className="
                bg-white
                rounded-3xl
                shadow-xl
                overflow-hidden
                hover:-translate-y-2
                transition
                duration-300
              "
            >

              {/* FOTO */}

              <div
                className="
                  relative
                  h-64
                  bg-gray-100
                "
              >

                {imagenPrincipal ? (

                  <Image
                    src={imagenPrincipal}
                    alt={
                      propiedad.titulo ||
                      "Propiedad"
                    }
                    fill
                    className="object-cover"
                    sizes="
                      (max-width: 640px) 100vw,
                      (max-width: 1024px) 50vw,
                      33vw
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
                      text-gray-400
                    "
                  >
                    Sin imagen
                  </div>

                )}

              </div>


              {/* INFORMACIÓN */}

              <div className="p-6 text-center">

                {/* TIPO */}

                <p
                  className="
                    text-sm
                    uppercase
                    tracking-wider
                    text-[#D8B384]
                    font-bold
                  "
                >
                  {propiedad.tipo}
                </p>


                {/* TÍTULO */}

                <h3
                  className="
                    text-2xl
                    font-bold
                    text-[#303C95]
                    mt-2
                  "
                >
                  {propiedad.titulo}
                </h3>


                {/* UBICACIÓN */}

                <p
                  className="
                    text-gray-500
                    mt-2
                  "
                >
                  📍 {propiedad.ubicacion}
                </p>


                {/* CARACTERÍSTICAS */}

                <div
                  className="
                    grid
                    grid-cols-3
                    gap-2
                    mt-5
                  "
                >

                  {/* DORMITORIOS */}

                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-3
                    "
                  >
                    <div className="text-xl">
                      🛏
                    </div>

                    <p
                      className="
                        font-bold
                        text-[#303C95]
                        mt-1
                      "
                    >
                      {propiedad.dormitorios ?? "-"}
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      Dorm.
                    </p>
                  </div>


                  {/* BAÑOS */}

                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-3
                    "
                  >
                    <div className="text-xl">
                      🚿
                    </div>

                    <p
                      className="
                        font-bold
                        text-[#303C95]
                        mt-1
                      "
                    >
                      {propiedad.banos ?? "-"}
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      Baños
                    </p>
                  </div>


                  {/* METROS */}

                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-3
                    "
                  >
                    <div className="text-xl">
                      📐
                    </div>

                    <p
                      className="
                        font-bold
                        text-[#303C95]
                        mt-1
                      "
                    >
                      {propiedad.metros ?? "-"}
                    </p>

                    <p
                      className="
                        text-xs
                        text-gray-500
                      "
                    >
                      m²
                    </p>
                  </div>

                </div>


                {/* PRECIO */}

                <p
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    text-[#D8B384]
                  "
                >
                  {propiedad.precio ||
                    "Consultar"}
                </p>


                {/* BOTÓN */}

                <Link
                  href={`/propiedades/${propiedad.slug}`}
                  className="
                    block
                    w-full
                    mt-5
                    bg-[#303C95]
                    hover:bg-[#252F7D]
                    text-white
                    py-3
                    rounded-full
                    font-bold
                    shadow-lg
                    transition
                  "
                >
                  Ver propiedad
                </Link>

              </div>

            </article>
          );
        })}

      </div>

    </section>
  );
}