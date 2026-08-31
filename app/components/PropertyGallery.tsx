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
          url.startsWith("http")
      )
    : [];

  const [indice, setIndice] = useState(0);

  if (imagenesLimpias.length === 0) {
    return (
      <div className="bg-gray-100 rounded-2xl h-[520px] flex items-center justify-center">
        <p className="text-gray-500">
          No hay imágenes disponibles.
        </p>
      </div>
    );
  }

  const indiceSeguro =
    indice >= imagenesLimpias.length ? 0 : indice;

  const imagenPrincipal = imagenesLimpias[indiceSeguro];

  const anterior = () => {
    setIndice((actual) =>
      actual === 0
        ? imagenesLimpias.length - 1
        : actual - 1
    );
  };

  const siguiente = () => {
    setIndice((actual) =>
      actual === imagenesLimpias.length - 1
        ? 0
        : actual + 1
    );
  };

  return (
    <section className="w-full">

      {/* FOTO GRANDE */}
      <div className="relative w-full h-[520px] bg-gray-100 rounded-2xl overflow-hidden">

        <img
          src={imagenPrincipal}
          alt={`${titulo} - imagen ${indiceSeguro + 1}`}
          className="absolute inset-0 w-full h-full object-contain"
        />

        {/* BOTÓN ANTERIOR */}
        {imagenesLimpias.length > 1 && (
          <button
            type="button"
            onClick={anterior}
            aria-label="Foto anterior"
            className="
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/90
              shadow-xl
              flex
              items-center
              justify-center
              text-4xl
              text-[#303C95]
              hover:bg-white
              hover:scale-110
              transition
              z-10
            "
          >
            ‹
          </button>
        )}

        {/* BOTÓN SIGUIENTE */}
        {imagenesLimpias.length > 1 && (
          <button
            type="button"
            onClick={siguiente}
            aria-label="Foto siguiente"
            className="
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              w-14
              h-14
              rounded-full
              bg-white/90
              shadow-xl
              flex
              items-center
              justify-center
              text-4xl
              text-[#303C95]
              hover:bg-white
              hover:scale-110
              transition
              z-10
            "
          >
            ›
          </button>
        )}

      </div>

      {/* CONTADOR */}
      <div className="text-center mt-4 text-gray-500 font-medium">
        Foto {indiceSeguro + 1} de {imagenesLimpias.length}
      </div>

      {/* MINIATURAS */}
      {imagenesLimpias.length > 1 && (
        <div className="mt-5 flex gap-3 overflow-x-auto pb-3">

          {imagenesLimpias.map((url, index) => (
            <button
              key={`${url}-${index}`}
              type="button"
              onClick={() => setIndice(index)}
              aria-label={`Ver foto ${index + 1}`}
              className={`
                flex-shrink-0
                w-24
                h-20
                rounded-xl
                overflow-hidden
                border-2
                transition
                ${
                  index === indiceSeguro
                    ? "border-[#303C95] scale-105"
                    : "border-transparent"
                }
              `}
            >
              <img
                src={url}
                alt={`${titulo} - miniatura ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}

        </div>
      )}

    </section>
  );
}