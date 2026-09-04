"use client";

import { useState } from "react";

type Props = {
  imagenes: string[];
  titulo: string;
};

export default function PropertyGallery({
  imagenes,
  titulo,
}: Props) {
  const imagenesLimpias = Array.isArray(imagenes)
    ? imagenes.filter(
        (url): url is string =>
          typeof url === "string" &&
          url.trim() !== "" &&
          url.startsWith("https://")
      )
    : [];

  const [indice, setIndice] = useState(0);

  if (imagenesLimpias.length === 0) {
    return (
      <div
        className="
          bg-[#F2F3FF]
          border
          border-[#1300FF]/10
          rounded-[2rem]
          p-10
          text-center
        "
      >
        <p className="text-[#4E535B]">
          No hay imágenes disponibles.
        </p>
      </div>
    );
  }

  const indiceSeguro =
    indice >= imagenesLimpias.length ? 0 : indice;

  const imagenPrincipal =
    imagenesLimpias[indiceSeguro];

  function anterior() {
    setIndice((actual) =>
      actual === 0
        ? imagenesLimpias.length - 1
        : actual - 1
    );
  }

  function siguiente() {
    setIndice((actual) =>
      actual === imagenesLimpias.length - 1
        ? 0
        : actual + 1
    );
  }

  return (
    <section className="w-full">

      {/* FOTO PRINCIPAL */}

      <div className="relative group">

        <div
          className="
            relative
            h-[300px]
            sm:h-[420px]
            md:h-[560px]
            bg-[#F2F3FF]
            border
            border-[#1300FF]/10
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
            "
          />

          {/* CONTADOR */}

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

          {/* FLECHA IZQUIERDA */}

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
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-white/95
                text-[#1300FF]
                border
                border-[#1300FF]/20
                shadow-lg
                flex
                items-center
                justify-center
                text-2xl
                sm:text-3xl
                font-light
                hover:bg-[#1300FF]
                hover:text-white
                hover:border-[#1300FF]
                hover:scale-110
                active:scale-95
                transition
              "
            >
              ‹
            </button>
          )}

          {/* FLECHA DERECHA */}

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
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-full
                bg-white/95
                text-[#1300FF]
                border
                border-[#1300FF]/20
                shadow-lg
                flex
                items-center
                justify-center
                text-2xl
                sm:text-3xl
                font-light
                hover:bg-[#1300FF]
                hover:text-white
                hover:border-[#1300FF]
                hover:scale-110
                active:scale-95
                transition
              "
            >
              ›
            </button>
          )}

        </div>

      </div>

      {/* MINIATURAS */}

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
                        ? "ring-2 ring-[#1300FF] ring-offset-2 ring-offset-[#FAF8F3] shadow-md scale-[1.03]"
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
                    "
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
