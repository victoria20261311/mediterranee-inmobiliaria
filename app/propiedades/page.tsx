import Link from "next/link";
import Image from "next/image";
import { supabase } from "../../lib/supabase";

type Props = {
  searchParams: Promise<{
    operacion?: string;
    tipo?: string;
    zona?: string;
    dormitorios?: string;
  }>;
};

export default async function PropiedadesPage({ searchParams }: Props) {
  const filtros = await searchParams;

  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .order("id", { ascending: true });

  if (error) {
    return (
      <main className="min-h-screen bg-[#F3E7D3] px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-red-600">
            Error cargando propiedades
          </h1>

          <pre className="mt-6 bg-white p-6 rounded-2xl overflow-auto">
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

      const dormitoriosFiltro = filtros.dormitorios;

      let coincideDormitorios = true;

      if (dormitoriosFiltro) {
        const dormitorios = Number(propiedad.dormitorios || 0);

        if (dormitoriosFiltro === "3") {
          coincideDormitorios = dormitorios >= 3;
        } else {
          coincideDormitorios =
            dormitorios === Number(dormitoriosFiltro);
        }
      }

      return (
        coincideOperacion &&
        coincideTipo &&
        coincideZona &&
        coincideDormitorios
      );
    }
  );

  return (
    <main className="min-h-screen bg-[#F3E7D3] px-6 py-24">
      <div className="max-w-6xl mx-auto">

        <Link
          href="/"
          className="text-[#303C95] font-semibold hover:text-[#D8B384] transition"
        >
          Volver al inicio
        </Link>

        <h1 className="text-4xl md:text-5xl font-bold text-[#303C95] mt-8">
          Propiedades
        </h1>

        {(filtros.operacion ||
          filtros.tipo ||
          filtros.zona ||
          filtros.dormitorios) && (
          <div className="mt-6 bg-white/70 backdrop-blur-xl rounded-2xl p-5 border border-white/70">
            <p className="text-gray-600">
              Resultados de búsqueda
            </p>

            <div className="flex flex-wrap gap-3 mt-3">
              {filtros.operacion && (
                <span className="bg-[#303C95] text-white px-4 py-2 rounded-full text-sm">
                  {filtros.operacion}
                </span>
              )}

              {filtros.tipo && (
                <span className="bg-[#D8B384] text-white px-4 py-2 rounded-full text-sm">
                  {filtros.tipo}
                </span>
              )}

              {filtros.zona && (
                <span className="bg-white text-[#303C95] border border-[#D8B384] px-4 py-2 rounded-full text-sm">
                  {filtros.zona}
                </span>
              )}

              {filtros.dormitorios && (
                <span className="bg-white text-[#303C95] border border-[#D8B384] px-4 py-2 rounded-full text-sm">
                  {filtros.dormitorios === "3"
                    ? "3+ dormitorios"
                    : `${filtros.dormitorios} dormitorios`}
                </span>
              )}
            </div>
          </div>
        )}

        {propiedadesFiltradas.length === 0 ? (
          <div className="mt-12 bg-white rounded-3xl shadow-xl p-10 text-center">
            <h2 className="text-2xl font-bold text-[#303C95]">
              No encontramos propiedades
            </h2>

            <p className="mt-3 text-gray-600">
              Probá cambiando los filtros de búsqueda.
            </p>

            <Link
              href="/propiedades"
              className="inline-block mt-6 bg-[#303C95] text-white px-7 py-3 rounded-full font-semibold hover:bg-[#252f7d] transition"
            >
              Ver todas las propiedades
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mt-10">

            {propiedadesFiltradas.map((propiedad: any) => {
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

              return (
                <Link
                  key={propiedad.id}
                  href={`/propiedades/${propiedad.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-xl hover:scale-[1.02] transition"
                >

                  <div className="relative h-64 bg-gray-200">

                    {imagen && imagen.startsWith("http") ? (
                      <Image
                        src={imagen}
                        alt={propiedad.titulo || "Propiedad"}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        Sin imagen
                      </div>
                    )}

                  </div>

                  <div className="p-6">

                    <p className="text-sm text-[#D8B384] font-bold uppercase">
                      {propiedad.tipo || "Propiedad"}
                    </p>

                    <h2 className="text-2xl font-bold text-[#303C95] mt-2">
                      {propiedad.titulo || "Sin título"}
                    </h2>

                    <p className="text-gray-600 mt-2">
                      📍{" "}
                      {propiedad.zona ||
                        propiedad.ubicacion ||
                        "Ubicación no disponible"}
                    </p>

                    <p className="text-xl font-bold text-[#D8B384] mt-4">
                      {propiedad.precio || "Consultar"}
                    </p>

                    <div className="mt-5 flex justify-between text-sm text-gray-500 border-t pt-4">

                      <span>
                        🛏 {propiedad.dormitorios ?? "-"}
                      </span>

                      <span>
                        🚿 {propiedad.banos ?? "-"}
                      </span>

                      <span>
                        📐 {propiedad.metros ?? "-"} m²
                      </span>

                    </div>

                    <div className="mt-6 text-center">
                      <span className="inline-block bg-[#303C95] text-white px-6 py-3 rounded-full font-semibold">
                        Ver propiedad
                      </span>
                    </div>

                  </div>

                </Link>
              );
            })}

          </div>
        )}

      </div>
    </main>
  );
}