import Link from "next/link";

import { supabase } from "../../../lib/supabase";

import PropertyGallery from "../../components/PropertyGallery";

import SimilarProperties from "../../components/SimilarProperties";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

function formatearPrecio(valor: unknown) {
  if (valor === null || valor === undefined) {
    return {
      consultar: true,
      moneda: "",
      importe: "",
    };
  }

  const texto = String(valor).trim();

  if (!texto) {
    return {
      consultar: true,
      moneda: "",
      importe: "",
    };
  }

  const textoMayusculas = texto.toUpperCase();

  if (
    textoMayusculas === "CONSULTAR" ||
    textoMayusculas === "CONSULTAR PRECIO"
  ) {
    return {
      consultar: true,
      moneda: "",
      importe: "",
    };
  }

  const coincideMoneda = texto.match(/^(USD|U\$S|US\$|\$)\s*/i);

  let moneda = "";
  let importe = texto;

  if (coincideMoneda) {
    const monedaOriginal = coincideMoneda[1].toUpperCase();

    if (monedaOriginal === "USD") {
      moneda = "USD";
    } else if (
      monedaOriginal === "U$S" ||
      monedaOriginal === "US$"
    ) {
      moneda = "USD";
    } else {
      moneda = "$";
    }

    importe = texto.slice(coincideMoneda[0].length).trim();
  }

  if (!moneda && /^\d/.test(texto)) {
    importe = texto;
  }

  return {
    consultar: false,
    moneda,
    importe,
  };
}

/* =========================================================
   IMÁGENES
========================================================= */

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

function limpiarUrlImagen(url: string): string {
  let limpia = url.trim();

  if (!limpia) {
    return "";
  }

  // ---------------------------------------------------------
  // Si la URL quedó guardada como Markdown:
  // [texto](https://dominio/imagen.jpg)
  // ---------------------------------------------------------

  const markdownMatch = limpia.match(
    /^\[.*?\]\((https?:\/\/[^)]+)\)$/
  );

  if (markdownMatch?.[1]) {
    limpia = markdownMatch[1];
  } else if (
    limpia.startsWith("[") &&
    limpia.includes("](")
  ) {
    const primerHttps = limpia.indexOf("https://");

    if (primerHttps !== -1) {
      limpia = limpia.substring(primerHttps);

      const cierre = limpia.indexOf(")");

      if (cierre !== -1) {
        limpia = limpia.substring(0, cierre);
      }
    }
  }

  limpia = limpia.trim();

  // ---------------------------------------------------------
  // URL completa
  // ---------------------------------------------------------

  if (
    limpia.startsWith("https://") ||
    limpia.startsWith("http://")
  ) {
    return limpia;
  }

  // ---------------------------------------------------------
  // Ruta pública del proyecto
  // Ejemplo:
  // /images/casa.jpg
  // ---------------------------------------------------------

  if (limpia.startsWith("/")) {
    return limpia;
  }

  // ---------------------------------------------------------
  // Ruta dentro del bucket "propiedades"
  //
  // Ejemplo:
  // casa-shangrila/1.png
  // ---------------------------------------------------------

  return `${SUPABASE_STORAGE}/${limpia
    .split("/")
    .map((parte) => encodeURIComponent(parte))
    .join("/")}`;
}

function normalizarImagenes(valor: unknown): string[] {
  let lista: unknown[] = [];

  // Array real
  if (Array.isArray(valor)) {
    lista = valor;
  }

  // JSON guardado como texto
  else if (typeof valor === "string") {
    const texto = valor.trim();

    if (!texto) {
      return [];
    }

    try {
      const parseado = JSON.parse(texto);

      if (Array.isArray(parseado)) {
        lista = parseado;
      } else if (typeof parseado === "string") {
        lista = [parseado];
      } else {
        lista = [texto];
      }
    } catch {
      // Si no es JSON, puede ser directamente una URL/ruta
      lista = [texto];
    }
  }

  return lista
    .filter(
      (imagen): imagen is string =>
        typeof imagen === "string" &&
        imagen.trim() !== ""
    )
    .map(limpiarUrlImagen)
    .filter((imagen) => imagen !== "");
}

export default async function PropiedadPage({ params }: Props) {
  const { slug } = await params;

  const { data: propiedad, error } = await supabase
    .from("propiedades")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();

  if (error || !propiedad) {
    return (
      <main className="min-h-screen bg-[#E8E0D2] px-4 sm:px-6 py-20 md:py-24">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/propiedades"
            className="
              inline-flex
              items-center
              gap-2
              text-[#3F5870]
              font-bold
              hover:text-[#31475C]
              transition
            "
          >
            <span className="text-xl">←</span>
            Volver a propiedades
          </Link>

          <div
            className="
              mt-10
              bg-white
              rounded-[2rem]
              shadow-[0_15px_45px_rgba(63,88,112,0.10)]
              p-10
              text-center
              border
              border-[#D6CCBC]
            "
          >
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

  let imagenes: string[] = normalizarImagenes(
    propiedad.imagenes
  );

  // Si no hay imágenes en "imagenes",
  // usamos la columna "imagen" como respaldo.

  if (imagenes.length === 0) {
    imagenes = normalizarImagenes(propiedad.imagen);
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

  const precioFormateado = formatearPrecio(
    propiedad.precio
  );

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
    `Hola, me interesa la propiedad "${titulo}"${
      zona ? ` en ${zona}` : ""
    }. Quisiera recibir más información.`
  );

  const whatsappUrl =
    `https://wa.me/59894239220?text=${mensajeWhatsApp}`;

  return (
    <main className="min-h-screen bg-[#E8E0D2] px-4 sm:px-6 py-20 md:py-24">
      <div className="max-w-6xl mx-auto">

        {/* =========================
            VOLVER
        ========================= */}

        <Link
          href="/propiedades"
          className="
            inline-flex
            items-center
            gap-2
            text-[#3F5870]
            font-semibold
            hover:text-[#31475C]
            transition
          "
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
              <span
                className="
                  bg-[#3F5870]
                  text-white
                  px-5
                  py-2
                  rounded-full
                  text-xs
                  md:text-sm
                  font-bold
                  tracking-widest
                  uppercase
                  shadow-[0_6px_18px_rgba(63,88,112,0.22)]
                "
              >
                {operacion}
              </span>
            )}

            {tipo && tipo !== operacion && (
              <span
                className="
                  bg-white
                  text-[#3F5870]
                  border
                  border-[#3F5870]/20
                  px-5
                  py-2
                  rounded-full
                  text-xs
                  md:text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                "
              >
                {tipo}
              </span>
            )}

          </div>

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
              text-[#20232A]
              leading-tight
            "
          >
            {titulo}
          </h1>

          {zona && (
            <p
              className="
                mt-4
                flex
                items-center
                gap-2
                text-[#4E535B]
                text-base
                md:text-lg
              "
            >
              <span className="text-[#3F5870] text-xl">
                📍
              </span>
              {zona}
            </p>
          )}
        </header>

        {/* =========================
            GALERÍA
        ========================= */}

        <div
          className="
            mt-8
            bg-white
            rounded-[2rem]
            shadow-[0_15px_50px_rgba(63,88,112,0.10)]
            p-4
            sm:p-5
            md:p-6
            border
            border-[#D6CCBC]
          "
        >
          <PropertyGallery
            imagenes={imagenes}
            titulo={titulo}
          />
        </div>

        {/* =========================
            INFORMACIÓN
        ========================= */}

        <section
          className="
            mt-10
            bg-white
            rounded-[2rem]
            shadow-[0_15px_50px_rgba(63,88,112,0.10)]
            overflow-hidden
            border
            border-[#D6CCBC]
          "
        >
          <div className="p-7 sm:p-9 md:p-12">

            <div
              className="
                flex
                flex-col
                md:flex-row
                md:items-end
                md:justify-between
                gap-6
              "
            >
              <div>

                <p
                  className="
                    text-xs
                    sm:text-sm
                    uppercase
                    tracking-[0.22em]
                    font-bold
                    text-[#3F5870]
                  "
                >
                  Información de la propiedad
                </p>

                {tienePrecio && (
                  <div className="mt-3">

                    {precioFormateado.consultar ? (

                      <p
                        className="
                          text-2xl
                          sm:text-3xl
                          font-semibold
                          text-[#20232A]
                        "
                      >
                        Consultar precio
                      </p>

                    ) : (

                      <div className="flex items-baseline gap-2">

                        {precioFormateado.moneda && (
                          <span
                            className="
                              text-sm
                              sm:text-base
                              font-semibold
                              tracking-[0.12em]
                              text-[#4E535B]
                            "
                          >
                            {precioFormateado.moneda}
                          </span>
                        )}

                        <span
                          className="
                            text-2xl
                            sm:text-3xl
                            md:text-4xl
                            font-semibold
                            tracking-tight
                            text-[#20232A]
                          "
                        >
                          {precioFormateado.importe}
                        </span>

                      </div>

                    )}

                  </div>
                )}

              </div>

              <a
                href="#contacto"
                className="
                  inline-flex
                  justify-center
                  items-center
                  gap-2
                  bg-[#3F5870]
                  hover:bg-[#31475C]
                  text-white
                  px-7
                  py-3.5
                  rounded-full
                  font-bold
                  transition
                  shadow-[0_8px_25px_rgba(63,88,112,0.24)]
                  hover:shadow-[0_10px_30px_rgba(63,88,112,0.32)]
                  hover:-translate-y-0.5
                "
              >
                Consultar propiedad
                <span>→</span>
              </a>

            </div>

            {/* =========================
                CARACTERÍSTICAS
            ========================= */}

            {(tieneDormitorios ||
              tieneBanos ||
              tieneMetros) && (

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-3
                  gap-4
                  mt-9
                  pt-8
                  border-t
                  border-[#D6CCBC]
                "
              >

                {tieneDormitorios && (
                  <div
                    className="
                      bg-[#F3EEE6]
                      hover:bg-[#EDE5D9]
                      rounded-2xl
                      p-5
                      transition
                    "
                  >
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-white
                          border
                          border-[#3F5870]/10
                          flex
                          items-center
                          justify-center
                          text-2xl
                          shadow-sm
                        "
                      >
                        🛏️
                      </div>

                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#20232A]
                          "
                        >
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
                  <div
                    className="
                      bg-[#F3EEE6]
                      hover:bg-[#EDE5D9]
                      rounded-2xl
                      p-5
                      transition
                    "
                  >
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-white
                          border
                          border-[#3F5870]/10
                          flex
                          items-center
                          justify-center
                          text-2xl
                          shadow-sm
                        "
                      >
                        🚿
                      </div>

                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#20232A]
                          "
                        >
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
                  <div
                    className="
                      bg-[#F3EEE6]
                      hover:bg-[#EDE5D9]
                      rounded-2xl
                      p-5
                      transition
                    "
                  >
                    <div className="flex items-center gap-4">

                      <div
                        className="
                          w-12
                          h-12
                          rounded-xl
                          bg-white
                          border
                          border-[#3F5870]/10
                          flex
                          items-center
                          justify-center
                          text-2xl
                          shadow-sm
                        "
                      >
                        📐
                      </div>

                      <div>
                        <p
                          className="
                            text-2xl
                            font-bold
                            text-[#20232A]
                          "
                        >
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

            {/* =========================
                DESCRIPCIÓN
            ========================= */}

            {tieneDescripcion && (
              <div
                className="
                  mt-10
                  pt-8
                  border-t
                  border-[#D6CCBC]
                "
              >
                <div className="flex items-center gap-3">

                  <div
                    className="
                      w-10
                      h-10
                      rounded-xl
                      bg-[#F3EEE6]
                      border
                      border-[#3F5870]/10
                      flex
                      items-center
                      justify-center
                    "
                  >
                    <span className="text-lg text-[#3F5870]">
                      ✦
                    </span>
                  </div>

                  <h2
                    className="
                      text-2xl
                      md:text-3xl
                      font-bold
                      text-[#20232A]
                    "
                  >
                    Descripción
                  </h2>

                </div>

                <p
                  className="
                    mt-5
                    text-[#4E535B]
                    leading-8
                    whitespace-pre-line
                    text-base
                    md:text-lg
                  "
                >
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
          className="
            mt-10
            bg-[#3F5870]
            rounded-[2rem]
            shadow-[0_15px_50px_rgba(63,88,112,0.22)]
            overflow-hidden
          "
        >
          <div className="p-7 sm:p-9 md:p-12">

            <div className="max-w-3xl">

              <p
                className="
                  text-white/75
                  text-xs
                  sm:text-sm
                  uppercase
                  tracking-[0.22em]
                  font-bold
                "
              >
                Contacto
              </p>

              <h2
                className="
                  mt-3
                  text-3xl
                  md:text-4xl
                  font-bold
                  text-white
                "
              >
                ¿Te interesa esta propiedad?
              </h2>

              <p
                className="
                  mt-4
                  text-white/75
                  text-base
                  md:text-lg
                  leading-relaxed
                "
              >
                Consultanos directamente y te brindamos toda la
                información disponible.
              </p>

            </div>

            {/* =========================
                WHATSAPP
            ========================= */}

            <div className="mt-8">

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-3
                  bg-white
                  text-[#3F5870]
                  hover:bg-[#F3EEE6]
                  hover:text-[#31475C]
                  px-7
                  py-4
                  rounded-full
                  font-bold
                  shadow-lg
                  transition
                  hover:-translate-y-0.5
                "
              >
                <span className="text-xl">
                  📲
                </span>

                Consultar por WhatsApp
              </a>

            </div>

            {/* =========================
                FORMULARIO
            ========================= */}

            <div
              className="
                mt-10
                pt-8
                border-t
                border-white/15
              "
            >

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
                  className="
                    w-full
                    bg-white
                    text-[#20232A]
                    border-0
                    rounded-2xl
                    px-5
                    py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/50
                  "
                />

                <input
                  type="tel"
                  name="telefono"
                  placeholder="Teléfono"
                  className="
                    w-full
                    bg-white
                    text-[#20232A]
                    border-0
                    rounded-2xl
                    px-5
                    py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/50
                  "
                />

                <textarea
                  name="mensaje"
                  rows={4}
                  defaultValue={
                    `Hola, me interesa la propiedad "${titulo}"${
                      zona ? ` en ${zona}` : ""
                    }. Quisiera recibir más información.`
                  }
                  className="
                    w-full
                    bg-white
                    text-[#20232A]
                    border-0
                    rounded-2xl
                    px-5
                    py-4
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white/50
                  "
                />

                <button
                  type="submit"
                  className="
                    w-full
                    sm:w-auto
                    bg-white
                    hover:bg-[#F3EEE6]
                    text-[#3F5870]
                    px-8
                    py-4
                    rounded-full
                    font-bold
                    transition
                    shadow-lg
                    hover:-translate-y-0.5
                  "
                >
                  Enviar consulta →
                </button>

              </form>

            </div>

          </div>
        </section>

        {/* =========================
            PROPIEDADES SIMILARES
        ========================= */}

        <div className="mt-10 rounded-[2rem] overflow-hidden">
          <SimilarProperties actual={slug} />
        </div>

        {/* =========================
            FINAL
        ========================= */}

        <div className="text-center py-10">

          <Link
            href="/propiedades"
            className="
              text-[#3F5870]
              font-semibold
              hover:text-[#31475C]
              transition
            "
          >
            ← Ver todas las propiedades
          </Link>

        </div>

      </div>
    </main>
  );
}     