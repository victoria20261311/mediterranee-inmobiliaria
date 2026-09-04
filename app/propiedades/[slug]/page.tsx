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
      <main className="min-h-screen bg-[#FAF8F3] px-4 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">

          <Link
            href="/propiedades"
            className="inline-flex items-center gap-2 text-[#1300FF] font-semibold hover:text-[#0D00B8] transition"
          >
            <span className="text-xl">←</span>
            Volver a propiedades
          </Link>

          <div className="mt-10 bg-white rounded-[2rem] shadow-[0_15px_45px_rgba(19,0,255,0.08)] p-10 text-center border border-[#1300FF]/10">
            <h1 className="text-3xl font-bold text-red-600">
              No se pudo cargar la propiedad
            </h1>

            <p className="mt-4 text-[#4E535B]">
              Propiedad buscada: {slug}
            </p>
          </div>

        </div>
      </main>
    );
  }

  /* =========================
     IMÁGENES
  ========================= */

  let imagenes: string[] = [];

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

  if (
    imagenes.length === 0 &&
    typeof propiedad.imagen === "string" &&
    propiedad.imagen.startsWith("http")
  ) {
    imagenes = [propiedad.imagen];
  }

  /* =========================
     DATOS
  ========================= */

  const titulo = propiedad.titulo || "Propiedad";

  const operacion =
    propiedad.operacion ||
    propiedad.tipo ||
    "";

  const tipo = propiedad.tipo || "";

  const zona =
    propiedad.zona ||
    propiedad.ubicacion ||
    "";

  const tienePrecio =
    propiedad.precio !== null &&
    propiedad.precio !== undefined &&
    String(propiedad.precio).trim() !== "";

  const tieneDormitorios =
    propiedad.dormitorios !== null &&
    propiedad.dormitorios !== undefined;

  const tieneBanos =
    propiedad.banos !== null &&
    propiedad.banos !== undefined;

  const tieneMetros =
    propiedad.metros !== null &&
    propiedad.metros !== undefined;

  const tieneDescripcion =
    propiedad.descripcion !== null &&
    propiedad.descripcion !== undefined &&
    String(propiedad.descripcion).trim() !== "";

  /* =========================
     WHATSAPP
  ========================= */

  const mensajeWhatsApp = encodeURIComponent(
    `Hola, me interesa la propiedad "${titulo}"${zona ? ` en ${zona}` : ""}. Quisiera recibir más información.`
  );

  const whatsappUrl =
    `https://wa.me/59894239220?text=${mensajeWhatsApp}`;

  return (
    <main className="min-h-screen bg-[#FAF8F3] px-4 sm:px-6 py-20 md:py-24">

      <div className="max-w-6xl mx-auto">

        {/* =========================
            VOLVER
        ========================= */}

        <Link
          href="/propiedades"
          className="inline-flex items-center gap-2 text-[#1300FF] font-semibold hover:text-[#0D00B8] transition"
        >
          <span className="text-xl">←</span>
          Volver a propiedades
        </Link>

        {/* =========================
            CABECERA
        ========================= */}

        <header className="mt-8 md:mt-10">

          <div className="flex flex-wrap items-center gap-3">

            {operacion && (
              <span className="bg-[#1300FF] text-white px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-widest uppercase shadow-[0_6px_18px_rgba(19,0,255,0.20)]">
                {operacion}
              </span>
            )}

            {tipo && tipo !== operacion && (
              <span className="bg-white text-[#1300FF] border border-[#1300FF]/20 px-5 py-2 rounded-full text-xs md:text-sm font-semibold uppercase tracking-wide">
                {tipo}
              </span>
            )}

          </div>

          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold text-[#20232A] leading-tight">
            {titulo}
          </h1>

          {zona && (
            <p className="mt-4 flex items-center gap-2 text-[#4E535B] text-base md:text-lg">
              <span className="text-[#1300FF] text-xl">
                📍
              </span>

              {zona}
            </p>
          )}

        </header>

        {/* =========================
            GALERÍA
        ========================= */}

        <div className="mt-8 bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(19,0,255,0.08)] p-4 sm:p-5 md:p-6 border border-[#1300FF]/10">

          <PropertyGallery
            imagenes={imagenes}
            titulo={titulo}
          />

        </div>

        {/* =========================
            INFORMACIÓN
        ========================= */}

        <section className="mt-10 bg-white rounded-[2rem] shadow-[0_15px_50px_rgba(19,0,255,0.08)] overflow-hidden border border-[#1300FF]/10">

          <div className="p-7 sm:p-9 md:p-12">

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

              <div>

                <p className="text-xs sm:text-sm uppercase tracking-[0.22em] font-bold text-[#1300FF]">
                  Información de la propiedad
                </p>

                {tienePrecio && (
                  <p className="mt-3 text-3xl md:text-4xl font-bold text-[#20232A]">
                    {propiedad.precio}
                  </p>
                )}

              </div>

              <a
                href="#contacto"
                className="inline-flex justify-center items-center gap-2 bg-[#1300FF] hover:bg-[#0D00B8] text-white px-7 py-3.5 rounded-full font-bold transition shadow-[0_8px_25px_rgba(19,0,255,0.25)] hover:shadow-[0_10px_30px_rgba(19,0,255,0.35)] hover:-translate-y-0.5"
              >
                Consultar propiedad
                <span>→</span>
              </a>

            </div>

            {/* CARACTERÍSTICAS */}

            {(tieneDormitorios ||
              tieneBanos ||
              tieneMetros) && (

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-9 pt-8 border-t border-[#1300FF]/10">

                {tieneDormitorios && (
                  <div className="bg-[#F2F3FF] hover:bg-[#EDEEFF] rounded-2xl p-5 transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white border border-[#1300FF]/10 flex items-center justify-center text-2xl shadow-sm">
                        🛏️
                      </div>

                      <div>

                        <p className="text-2xl font-bold text-[#20232A]">
                          {propiedad.dormitorios}
                        </p>

                        <p className="text-sm text-[#4E535B]">
                          Dormitorios
                        </p>

                      </div>

                    </div>

                  </div>
                )}

                {tieneBanos && (
                  <div className="bg-[#F2F3FF] hover:bg-[#EDEEFF] rounded-2xl p-5 transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white border border-[#1300FF]/10 flex items-center justify-center text-2xl shadow-sm">
                        🚿
                      </div>

                      <div>

                        <p className="text-2xl font-bold text-[#20232A]">
                          {propiedad.banos}
                        </p>

                        <p className="text-sm text-[#4E535B]">
                          Baños
                        </p>

                      </div>

                    </div>

                  </div>
                )}

                {tieneMetros && (
                  <div className="bg-[#F2F3FF] hover:bg-[#EDEEFF] rounded-2xl p-5 transition">

                    <div className="flex items-center gap-4">

                      <div className="w-12 h-12 rounded-xl bg-white border border-[#1300FF]/10 flex items-center justify-center text-2xl shadow-sm">
                        📐
                      </div>

                      <div>

                        <p className="text-2xl font-bold text-[#20232A]">
                          {propiedad.metros} m²
                        </p>

                        <p className="text-sm text-[#4E535B]">
                          Superficie
                        </p>

                      </div>

                    </div>

                  </div>
                )}

              </div>
            )}

            {/* DESCRIPCIÓN */}

            {tieneDescripcion && (
              <div className="mt-10 pt-8 border-t border-[#1300FF]/10">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-xl bg-[#F2F3FF] border border-[#1300FF]/10 flex items-center justify-center">
                    <span className="text-lg text-[#1300FF]">
                      ✦
                    </span>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold text-[#20232A]">
                    Descripción
                  </h2>

                </div>

                <p className="mt-5 text-[#4E535B] leading-8 whitespace-pre-line text-base md:text-lg">
                  {propiedad.descripcion}
                </p>

              </div>
            )}

          </div>

        </section>

        {/* =========================
            CONTACTO
        ========================= */}

        <section
          id="contacto"
          className="mt-10 bg-[#1300FF] rounded-[2rem] shadow-[0_15px_50px_rgba(19,0,255,0.20)] overflow-hidden"
        >

          <div className="p-7 sm:p-9 md:p-12">

            <div className="max-w-3xl">

              <p className="text-white/75 text-xs sm:text-sm uppercase tracking-[0.22em] font-bold">
                Contacto
              </p>

              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
                ¿Te interesa esta propiedad?
              </h2>

              <p className="mt-4 text-white/75 text-base md:text-lg leading-relaxed">
                Consultanos directamente y te brindamos toda la información disponible.
              </p>

            </div>

            {/* WHATSAPP */}

            <div className="mt-8">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-white text-[#1300FF] hover:bg-[#F2F3FF] hover:text-[#0D00B8] px-7 py-4 rounded-full font-bold shadow-lg transition hover:-translate-y-0.5"
              >
                <span className="text-xl">📲</span>
                Consultar por WhatsApp
              </a>

            </div>

            {/* FORMULARIO */}

            <div className="mt-10 pt-8 border-t border-white/15">

              <p className="text-white/70 text-sm mb-5">
                O dejá tus datos y nos comunicamos contigo.
              </p>

              <form
                action="https://wa.me/59894239220"
                method="get"
                target="_blank"
                className="space-y-4"
              >

                <input
                  type="text"
                  name="text"
                  placeholder="Nombre"
                  required
                  className="w-full bg-white text-[#20232A] border-0 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  className="w-full bg-white text-[#20232A] border-0 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <textarea
                  name="mensaje"
                  rows={4}
                  defaultValue={
                    `Hola, me interesa la propiedad "${titulo}"${zona ? ` en ${zona}` : ""}. Quisiera recibir más información.`
                  }
                  className="w-full bg-white text-[#20232A] border-0 rounded-2xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-white/50"
                />

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-white hover:bg-[#F2F3FF] text-[#1300FF] px-8 py-4 rounded-full font-bold transition shadow-lg hover:-translate-y-0.5"
                >
                  Enviar consulta →
                </button>

              </form>

            </div>

          </div>

        </section>

        {/* =========================
            FINAL
        ========================= */}

        <div className="text-center py-10">

          <Link
            href="/propiedades"
            className="text-[#1300FF] font-semibold hover:text-[#0D00B8] transition"
          >
            ← Ver todas las propiedades
          </Link>

        </div>

      </div>

    </main>
  );
}
