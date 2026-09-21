"use client";

import { useEffect, useState } from "react";

type Props = {
  imagenes: string[];
  titulo: string;
};

const SUPABASE_STORAGE =
  "https://axrbawejnwyqmaqmplkk.supabase.co/storage/v1/object/public/propiedades";

/**
 * Limpia y normaliza las URLs de las imágenes.
 *
 * Acepta:
 * - URL completa de Supabase
 * - URL externa
 * - Ruta local comenzando con /
 * - Ruta dentro del bucket propiedades
 * - URLs que hayan quedado guardadas como Markdown
 */
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
    /^\[.*\]\((https?:\/\/[^)]+)\)$/
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
  // Ejemplo: /images/casa.jpg
  // ---------------------------------------------------------

  if (limpia.startsWith("/")) {
    return limpia;
  }

  // ---------------------------------------------------------
  // Si solamente viene el nombre/ruta del archivo,
  // lo buscamos dentro del bucket "propiedades".
  //
  // Ejemplo:
  // casa-shangrila/1.png
  //
  // Se transforma en:
  // https://.../propiedades/casa-shangrila/1.png
  // ---------------------------------------------------------

  return `${SUPABASE_STORAGE}/${limpia
    .split("/")
    .map((parte) => encodeURIComponent(parte))
    .join("/")}`;
}

export default function PropertyGallery({
  imagenes,
  titulo,
}: Props) {
  // ---------------------------------------------------------
  // LIMPIAR IMÁGENES
  // ---------------------------------------------------------

  const imagenesLimpias = Array.isArray(imagenes)
    ? imagenes
        .filter(
          (url): url is string =>
            typeof url === "string" &&
            url.trim() !== ""
        )
        .map(limpiarUrlImagen)
        .filter((url) => url !== "")
    : [];

  const [indice, setIndice] = useState(0);

  // Si cambia la propiedad, volver a la primera imagen.
  useEffect(() => {
    setIndice(0);
  }, [titulo]);

  // ---------------------------------------------------------
  // SIN IMÁGENES
  // ---------------------------------------------------------

  if (imagenesLimpias.length === 0) {
    return (
      <div
        className="
          bg-[#E5EFF4]
          border
          border-[#CBDCE5]
          rounded-[2rem]
          p-10
          text-center
        "
      >
        <div
          className="
            w-14
            h-14
            mx-auto
            rounded-2xl
            bg-[#F8FBFC]
            border
            border-[#CBDCE5]
            flex
            items-center
            justify-center
            text-[#1300FF]
          "
        >
          <svg
            width="25"
            height="25"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="2"
            />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-5-5L5 21" />
          </svg>
        </div>

        <p className="mt-4 text-[#53616B]">
          No hay imágenes disponibles.
        </p>
      </div>
    );
  }

  // ---------------------------------------------------------
  // SEGURIDAD DEL ÍNDICE
  // ---------------------------------------------------------

  const indiceSeguro =
    indice >= imagenesLimpias.length ? 0 : indice;

  const imagenPrincipal =
    imagenesLimpias[indiceSeguro];

  // ---------------------------------------------------------
  // IMAGEN ANTERIOR
  // ---------------------------------------------------------

  function anterior() {
    setIndice((actual) =>
      actual === 0
        ? imagenesLimpias.length - 1
        : actual - 1
    );
  }

  // ---------------------------------------------------------
  // IMAGEN SIGUIENTE
  // ---------------------------------------------------------

  function siguiente() {
    setIndice((actual) =>
      actual === imagenesLimpias.length - 1
        ? 0
        : actual + 1
    );
  }

  return (
    <section className="w-full">

      {/* =====================================================
          FOTO PRINCIPAL
      ===================================================== */}

      <div className="relative group">

        <div
          className="
            relative
            h-[300px]
            sm:h-[420px]
            md:h-[560px]
            bg-[#E5EFF4]
            border
            border-[#CBDCE5]
            rounded-2xl
            sm:rounded-[2rem]
            overflow-hidden
          "
        >

          <img
            key={imagenPrincipal}
            src={imagenPrincipal}
            alt={`${titulo} - imagen ${indiceSeguro + 1}`}
            width={1400}
            height={900}
            className="
              w-full
              h-full
              object-contain
              select-none
            "
            draggable={false}
          />

          {/* =================================================
              CONTADOR
          ================================================= */}

          <div
            className="
              absolute
              bottom-4
              left-4
              sm:bottom-5
              sm:left-5
              bg-[#1300FF]/95
              backdrop-blur-sm
              text-white
              px-3.5
              py-2
              rounded-full
              text-xs
              sm:text-sm
              font-semibold
              shadow-[0_6px_18px_rgba(19,0,255,0.25)]
            "
          >
            {indiceSeguro + 1}

            <span className="mx-1 text-white/50">
              /
            </span>

            {imagenesLimpias.length}
          </div>

          {/* =================================================
              FLECHA IZQUIERDA
          ================================================= */}

          {imagenesLimpias.length > 1 && (
            <button
              type="button"
              onClick={anterior}
              aria-label="Imagen anterior"
              className="
                absolute
                left-3
                sm:left-5
                top-1/2
                -translate-y-1/2
                w-11
                h-11
                sm:w-13
                sm:h-13
                rounded-full
                bg-[#F8FBFC]/95
                backdrop-blur-sm
                text-[#1300FF]
                border
                border-[#CBDCE5]
                shadow-[0_8px_25px_rgba(48,76,95,0.16)]
                flex
                items-center
                justify-center
                hover:bg-[#1300FF]
                hover:text-white
                hover:border-[#1300FF]
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
                z-10
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M19 12H5" />
                <path d="M11 6l-6 6 6 6" />
              </svg>
            </button>
          )}

          {/* =================================================
              FLECHA DERECHA
          ================================================= */}

          {imagenesLimpias.length > 1 && (
            <button
              type="button"
              onClick={siguiente}
              aria-label="Imagen siguiente"
              className="
                absolute
                right-3
                sm:right-5
                top-1/2
                -translate-y-1/2
                w-11
                h-11
                sm:w-13
                sm:h-13
                rounded-full
                bg-[#F8FBFC]/95
                backdrop-blur-sm
                text-[#1300FF]
                border
                border-[#CBDCE5]
                shadow-[0_8px_25px_rgba(48,76,95,0.16)]
                flex
                items-center
                justify-center
                hover:bg-[#1300FF]
                hover:text-white
                hover:border-[#1300FF]
                hover:scale-110
                active:scale-95
                transition-all
                duration-300
                z-10
              "
            >
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 6l6 6-6 6" />
              </svg>
            </button>
          )}

        </div>
      </div>

      {/* =====================================================
          MINIATURAS
      ===================================================== */}

      {imagenesLimpias.length > 1 && (
        <div className="mt-4 sm:mt-5">

          <div
            className="
              flex
              gap-2.5
              sm:gap-3
              overflow-x-auto
              pb-3
              px-1
              snap-x
              snap-mandatory
              scrollbar-thin
            "
          >

            {imagenesLimpias.map((url, index) => {
              const seleccionada =
                index === indiceSeguro;

              return (
                <button
                  key={`${url}-${index}`}
                  type="button"
                  onClick={() => setIndice(index)}
                  aria-label={`Ver imagen ${index + 1}`}
                  className={`
                    relative
                    flex-shrink-0
                    snap-start
                    w-[76px]
                    h-[58px]
                    sm:w-[100px]
                    sm:h-[74px]
                    rounded-lg
                    sm:rounded-xl
                    overflow-hidden
                    transition-all
                    duration-200
                    ${
                      seleccionada
                        ? "ring-2 ring-[#1300FF] ring-offset-2 ring-offset-[#EEF4F7] shadow-md scale-[1.03]"
                        : "opacity-70 hover:opacity-100"
                    }
                  `}
                >

                  <img
                    src={url}
                    alt={`${titulo} - miniatura ${index + 1}`}
                    width={220}
                    height={160}
                    className="
                      w-full
                      h-full
                      object-cover
                      select-none
                    "
                    draggable={false}
                  />

                  {seleccionada && (
                    <div
                      className="
                        absolute
                        inset-0
                        bg-[#1300FF]/10
                        pointer-events-none
                      "
                    />
                  )}

                </button>
              );
            })}

          </div>

        </div>
      )}

    </section>
  );
}