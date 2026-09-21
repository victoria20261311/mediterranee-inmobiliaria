import Image from "next/image";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

type Propiedad = {
  id?: number | string;
  titulo?: string;
  operacion?: string;
  tipo?: string;
  zona?: string;
  precio?: string | number;
  descripcion?: string;
  imagen?: string | null;
  imagenes?: string[] | string | null;
  slug?: string;
  categoria?: string;
  ubicacion?: string;
};

type Props = {
  actual: string;
};

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

function obtenerImagen(propiedad: Propiedad): string | null {
  // =====================================================
  // 1. BUSCAR PRIMERO EN imagenes
  // =====================================================

  if (Array.isArray(propiedad.imagenes)) {
    const imagenValida = propiedad.imagenes.find(
      (imagen) =>
        typeof imagen === "string" &&
        imagen.trim() !== "" &&
        (imagen.startsWith("http://") ||
          imagen.startsWith("https://") ||
          imagen.startsWith("/"))
    );

    if (imagenValida) {
      return imagenValida.trim();
    }
  }

  // =====================================================
  // 2. SI imagenes VIENE COMO STRING JSON
  // =====================================================

  if (typeof propiedad.imagenes === "string") {
    try {
      const imagenesParseadas = JSON.parse(propiedad.imagenes);

      if (Array.isArray(imagenesParseadas)) {
        const imagenValida = imagenesParseadas.find(
          (imagen) =>
            typeof imagen === "string" &&
            imagen.trim() !== "" &&
            (imagen.startsWith("http://") ||
              imagen.startsWith("https://") ||
              imagen.startsWith("/"))
        );

        if (imagenValida) {
          return imagenValida.trim();
        }
      }
    } catch {
      // Si no es JSON válido, continuamos con imagen
    }
  }

  // =====================================================
  // 3. USAR imagen COMO RESPALDO
  // =====================================================

  if (
    typeof propiedad.imagen === "string" &&
    propiedad.imagen.trim() !== ""
  ) {
    const imagen = propiedad.imagen.trim();

    // URL completa
    if (imagen.startsWith("http://") || imagen.startsWith("https://")) {
      return imagen;
    }

    // Imagen local
    if (imagen.startsWith("/")) {
      return imagen;
    }

    // Nombre de archivo dentro del bucket de Supabase
    return `${SUPABASE_STORAGE}/${imagen}`;
  }

  return null;
}

function obtenerPrecio(precio: string | number | undefined): string {
  if (precio === undefined || precio === null || precio === "") {
    return "Consultar";
  }

  if (typeof precio === "number") {
    return `$ ${precio.toLocaleString("es-UY")}`;
  }

  return precio;
}

function calcularSimilitud(
  propiedad: Propiedad,
  actual: Propiedad
): number {
  let puntaje = 0;

  // Misma operación
  if (
    propiedad.operacion &&
    actual.operacion &&
    propiedad.operacion.toLowerCase() === actual.operacion.toLowerCase()
  ) {
    puntaje += 4;
  }

  // Mismo tipo
  if (
    propiedad.tipo &&
    actual.tipo &&
    propiedad.tipo.toLowerCase() === actual.tipo.toLowerCase()
  ) {
    puntaje += 4;
  }

  // Misma categoría
  if (
    propiedad.categoria &&
    actual.categoria &&
    propiedad.categoria.toLowerCase() === actual.categoria.toLowerCase()
  ) {
    puntaje += 3;
  }

  // Misma zona
  if (
    propiedad.zona &&
    actual.zona &&
    propiedad.zona.toLowerCase() === actual.zona.toLowerCase()
  ) {
    puntaje += 5;
  }

  // Misma ubicación
  if (
    propiedad.ubicacion &&
    actual.ubicacion &&
    propiedad.ubicacion.toLowerCase() === actual.ubicacion.toLowerCase()
  ) {
    puntaje += 2;
  }

  return puntaje;
}

export default async function SimilarProperties({
  actual,
}: Props) {
  // =====================================================
  // BUSCAR LA PROPIEDAD ACTUAL
  // =====================================================

  const { data: propiedadActual, error: errorActual } = await supabase
    .from("propiedades")
    .select("*")
    .eq("slug", actual)
    .maybeSingle();

  if (errorActual || !propiedadActual) {
    return null;
  }

  // =====================================================
  // BUSCAR LAS DEMÁS PROPIEDADES
  // =====================================================

  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .neq("slug", actual);

  if (error || !propiedades || propiedades.length === 0) {
    return null;
  }

  // =====================================================
  // ORDENAR POR SIMILITUD
  // =====================================================

  const similares = (propiedades as Propiedad[])
    .map((propiedad) => ({
      propiedad,
      puntaje: calcularSimilitud(propiedad, propiedadActual),
    }))
    .sort((a, b) => b.puntaje - a.puntaje)
    .slice(0, 3)
    .map((item) => item.propiedad);

  if (similares.length === 0) {
    return null;
  }

  return (
    <section className="w-full bg-[#FAF8F3] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =================================================
            ENCABEZADO
        ================================================= */}

        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#1300FF]">
            También puede interesarte
          </p>

          <h2 className="text-3xl font-semibold tracking-tight text-[#4E535B] md:text-4xl">
            Propiedades similares
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[#6B7077]">
            Conocé otras propiedades que pueden ser de tu interés.
          </p>
        </div>

        {/* =================================================
            PROPIEDADES
        ================================================= */}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {similares.map((propiedad) => {
            const imagen = obtenerImagen(propiedad);

            return (
              <Link
                key={propiedad.id ?? propiedad.slug}
                href={`/propiedades/${propiedad.slug}`}
                className="
                  group
                  overflow-hidden
                  rounded-2xl
                  bg-white
                  shadow-sm
                  ring-1
                  ring-black/5
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                {/* =================================================
                    IMAGEN
                ================================================= */}

                <div className="relative h-64 w-full overflow-hidden bg-[#E3E9E7]">
                  {imagen ? (
                    <Image
                      src={imagen}
                      alt={propiedad.titulo || "Propiedad"}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="
                        object-cover
                        transition-transform
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <span className="text-sm text-[#7891A8]">
                        Imagen no disponible
                      </span>
                    </div>
                  )}

                  {/* =================================================
                      OPERACIÓN
                  ================================================= */}

                  {propiedad.operacion && (
                    <div
                      className="
                        absolute
                        left-4
                        top-4
                        rounded-full
                        bg-white/95
                        px-4
                        py-2
                        text-xs
                        font-bold
                        uppercase
                        tracking-wide
                        text-[#1300FF]
                        shadow-sm
                      "
                    >
                      {propiedad.operacion}
                    </div>
                  )}
                </div>

                {/* =================================================
                    INFORMACIÓN
                ================================================= */}

                <div className="p-6">
                  <h3
                    className="
                      line-clamp-1
                      text-xl
                      font-semibold
                      text-[#4E535B]
                      transition-colors
                      duration-300
                      group-hover:text-[#1300FF]
                    "
                  >
                    {propiedad.titulo || "Propiedad"}
                  </h3>

                  {propiedad.zona && (
                    <p className="mt-2 text-sm text-[#7891A8]">
                      {propiedad.zona}
                    </p>
                  )}

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <span className="text-lg font-semibold text-[#4E535B]">
                      {obtenerPrecio(propiedad.precio)}
                    </span>

                    <span
                      className="
                        text-sm
                        font-semibold
                        text-[#1300FF]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    >
                      Ver propiedad →
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
