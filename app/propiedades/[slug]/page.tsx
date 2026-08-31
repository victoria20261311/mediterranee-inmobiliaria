import Link from "next/link";
import { supabase } from "../../../lib/supabase";
import PropertyGallery from "../../components/PropertyGallery";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function PropiedadPage({ params }: Props) {
  const { slug } = await params;

  const { data: propiedad, error } = await supabase
    .from("propiedades")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !propiedad) {
    return (
      <main className="min-h-screen bg-[#F3E7D3] px-6 py-24">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/propiedades"
            className="text-[#303C95] font-semibold hover:text-[#D8B384] transition"
          >
            &larr; Volver a propiedades
          </Link>

          <div className="mt-10 bg-white rounded-3xl shadow-xl p-10">
            <h1 className="text-3xl font-bold text-red-600">
              No se pudo cargar la propiedad
            </h1>

            <p className="mt-4 text-gray-600">
              Propiedad buscada: {slug}
            </p>
          </div>

        </div>
      </main>
    );
  }

  let imagenes: string[] = [];

  /*
    Supabase puede devolver "imagenes" como:
    - un array real
    - un texto que contiene un JSON array
  */

  if (Array.isArray(propiedad.imagenes)) {
    imagenes = propiedad.imagenes.filter(
      (imagen: unknown): imagen is string =>
        typeof imagen === "string" &&
        imagen.trim() !== "" &&
        imagen.startsWith("http")
    );
  } else if (typeof propiedad.imagenes === "string") {
    try {
      const imagenesParseadas = JSON.parse(propiedad.imagenes);

      if (Array.isArray(imagenesParseadas)) {
        imagenes = imagenesParseadas.filter(
          (imagen: unknown): imagen is string =>
            typeof imagen === "string" &&
            imagen.trim() !== "" &&
            imagen.startsWith("http")
        );
      }
    } catch {
      imagenes = [];
    }
  }

  /*
    Si no hay galería, usamos la imagen principal.
  */

  if (
    imagenes.length === 0 &&
    typeof propiedad.imagen === "string" &&
    propiedad.imagen.startsWith("http")
  ) {
    imagenes = [propiedad.imagen];
  }

  return (
    <main className="min-h-screen bg-[#F3E7D3] px-6 py-24">

      <div className="max-w-6xl mx-auto">

        {/* VOLVER */}
        <Link
          href="/propiedades"
          className="text-[#303C95] font-semibold hover:text-[#D8B384] transition"
        >
          &larr; Volver a propiedades
        </Link>

        {/* PROPIEDAD */}
        <div className="mt-8 bg-white rounded-3xl shadow-xl overflow-hidden">

          {/* GALERÍA */}
          <div className="px-4 md:px-8 pt-4 md:pt-8">

            <PropertyGallery
              imagenes={imagenes}
              titulo={propiedad.titulo || "Propiedad"}
            />

          </div>

          {/* INFORMACIÓN */}
          <div className="p-8 md:p-12">

            <p className="text-sm uppercase tracking-widest font-bold text-[#D8B384]">
              {propiedad.operacion || propiedad.tipo || "Propiedad"}
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#303C95] mt-3">
              {propiedad.titulo || "Propiedad"}
            </h1>

            <p className="text-lg text-gray-600 mt-4">
              📍 {propiedad.zona || propiedad.ubicacion || "Ubicación"}
            </p>

            <p className="text-3xl font-bold text-[#D8B384] mt-6">
              {propiedad.precio || "Consultar"}
            </p>

            {/* CARACTERÍSTICAS */}
            <div className="grid grid-cols-3 gap-4 mt-8 border-t pt-8">

              <div>
                <p className="text-2xl">🛏</p>

                <p className="font-semibold mt-1">
                  {propiedad.dormitorios ?? "-"}
                </p>

                <p className="text-sm text-gray-500">
                  Dormitorios
                </p>
              </div>

              <div>
                <p className="text-2xl">🚿</p>

                <p className="font-semibold mt-1">
                  {propiedad.banos ?? "-"}
                </p>

                <p className="text-sm text-gray-500">
                  Baños
                </p>
              </div>

              <div>
                <p className="text-2xl">📐</p>

                <p className="font-semibold mt-1">
                  {propiedad.metros ?? "-"} m²
                </p>

                <p className="text-sm text-gray-500">
                  Superficie
                </p>
              </div>

            </div>

            {/* DESCRIPCIÓN */}
            {propiedad.descripcion && (
              <div className="mt-10">

                <h2 className="text-2xl font-bold text-[#303C95]">
                  Descripción
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed whitespace-pre-line">
                  {propiedad.descripcion}
                </p>

              </div>
            )}

            {/* BOTÓN */}
            <div className="mt-10">

              <a
                href="#contacto"
                className="inline-block bg-[#303C95] hover:bg-[#252f78] text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
              >
                Solicitar información
              </a>

            </div>

          </div>

        </div>

        {/* CONTACTO */}
        <div
          id="contacto"
          className="mt-10 bg-white rounded-3xl shadow-xl p-8 md:p-10"
        >

          <h2 className="text-3xl font-bold text-[#303C95]">
            📝 Solicitar información
          </h2>

          <p className="mt-3 text-gray-600">
            Completá tus datos y enviá tu consulta por WhatsApp.
          </p>

          <form
            action="https://wa.me/59894239220"
            method="get"
            target="_blank"
            className="mt-6 space-y-4"
          >

            <input
              type="text"
              name="text"
              placeholder="Nombre"
              required
              className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#D8B384]"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#D8B384]"
            />

            <textarea
              name="mensaje"
              rows={5}
              defaultValue={
                "Hola, me interesa la propiedad: " +
                (propiedad.titulo || "esta propiedad")
              }
              className="w-full border border-gray-200 rounded-xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-[#D8B384]"
            />

            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold transition shadow-lg"
            >
              📲 Enviar consulta por WhatsApp
            </button>

          </form>

        </div>

      </div>

    </main>
  );
}