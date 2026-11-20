
import Image from "next/image";
import { supabase } from "../../../lib/supabase";

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

function limpiarUrlImagen(valor: unknown): string | null {
  if (typeof valor !== "string" || !valor.trim()) return null;

  let ruta = valor.trim();

  const markdown = ruta.match(/!\[.*?\]\((.*?)\)/);
  if (markdown) ruta = markdown[1];

  if (ruta.startsWith("http://") || ruta.startsWith("https://")) {
    return ruta;
  }

  ruta = ruta.replace(/^\/+/, "");

  if (ruta.startsWith("propiedades/")) {
    ruta = ruta.replace("propiedades/", "");
  }

  return `${SUPABASE_STORAGE}/${ruta}`;
}

function obtenerImagen(propiedad: any): string | null {
  if (propiedad.slug === "aeris-2") {
    return `${SUPABASE_STORAGE}/aeris-2/28.png`;
  }

  const imagenPrincipal = limpiarUrlImagen(propiedad.imagen);

  if (imagenPrincipal) return imagenPrincipal;

  if (Array.isArray(propiedad.imagenes)) {
    for (const imagen of propiedad.imagenes) {
      const url = limpiarUrlImagen(imagen);
      if (url) return url;
    }
  }

  return null;
}

export default async function PropiedadesAlquiladasPage() {
  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    console.error("Error al cargar operaciones concretadas:", error);
  }

  const propiedadesAlquiladas = (propiedades || []).filter(
    (propiedad: any) => {
      const estado = String(propiedad.estado || "").toLowerCase().trim();

      return estado === "alquilada" || estado === "alquilado";
    }
  );

  return (
    <main className="min-h-screen bg-[#FAF8F3]">
      <section className="px-6 pt-28 pb-20 md:px-12">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="text-sm font-bold tracking-[0.25em] text-[#1300FF] uppercase">
              Mediterranée Servicios Inmobiliarios
            </p>

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold text-[#20232A]">
              Operaciones concretadas
            </h1>

            <div className="w-16 h-[3px] bg-[#1300FF] mt-6 rounded-full" />

            <p className="mt-6 max-w-2xl text-[#4E535B] text-base md:text-lg leading-relaxed">
              Cada operación representa una nueva historia. Conocé algunas
              de las propiedades que ya encontraron inquilinos a través
              de Mediterranée.
            </p>
          </div>

          <div className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#20232A]">
              Propiedades alquiladas
            </h2>

            <p className="mt-2 text-[#4E535B]">
              Alquileres concretados por nuestro equipo.
            </p>
          </div>

          {propiedadesAlquiladas.length === 0 ? (
            <div className="bg-white border border-[#1300FF]/10 rounded-3xl p-10 md:p-16 text-center">
              <h3 className="text-2xl font-semibold text-[#20232A]">
                Próximamente
              </h3>

              <p className="mt-4 text-[#4E535B]">
                Estamos preparando nuestra selección de propiedades alquiladas.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {propiedadesAlquiladas.map((propiedad: any) => {
                const imagen = obtenerImagen(propiedad);

                return (
                  <article
                    key={propiedad.id}
                    className="bg-white rounded-[1.75rem] overflow-hidden border border-[#1300FF]/10 shadow-sm"
                  >
                    <div className="relative h-64 bg-[#E8E0D2]">
                      {imagen ? (
                        <Image
                          src={imagen}
                          alt={propiedad.titulo || "Propiedad alquilada"}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-[#4E535B]">
                          Imagen no disponible
                        </div>
                      )}

                      <div className="absolute top-5 left-5 bg-[#1300FF] text-white text-xs font-bold tracking-wider px-5 py-3 rounded-full shadow-lg">
                        ALQUILADA
                      </div>
                    </div>

                    <div className="p-6">
                      {propiedad.tipo && (
                        <p className="text-xs font-bold tracking-widest uppercase text-[#1300FF]">
                          {propiedad.tipo}
                        </p>
                      )}

                      <h3 className="mt-3 text-xl font-semibold text-[#20232A]">
                        {propiedad.titulo || "Propiedad alquilada"}
                      </h3>

                      {(propiedad.zona || propiedad.ubicacion) && (
                        <p className="mt-3 text-sm text-[#4E535B]">
                          {propiedad.zona || propiedad.ubicacion}
                        </p>
                      )}

                      {(propiedad.dormitorios != null ||
                        propiedad.banos != null ||
                        propiedad.metros != null) && (
                        <div className="mt-6 pt-5 border-t border-[#1300FF]/10 flex flex-wrap gap-5 text-sm text-[#4E535B]">
                          {propiedad.dormitorios != null && (
                            <span>🛏️ {propiedad.dormitorios}</span>
                          )}

                          {propiedad.banos != null && (
                            <span>🚿 {propiedad.banos}</span>
                          )}

                          {propiedad.metros != null && (
                            <span>📐 {propiedad.metros} m²</span>
                          )}
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
          )}

          <section className="mt-20 pt-12 border-t border-[#1300FF]/10">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#20232A]">
              Propiedades vendidas
            </h2>

            <p className="mt-3 max-w-2xl text-[#4E535B] leading-relaxed">
              Próximamente compartiremos las propiedades cuya venta
              hayamos concretado junto a nuestros clientes.
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}