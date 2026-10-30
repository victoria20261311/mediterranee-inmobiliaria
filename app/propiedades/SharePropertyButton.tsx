
"use client";

import { useState } from "react";

type Props = {
  slug: string;
  titulo: string;
};

export default function SharePropertyButton({
  slug,
  titulo,
}: Props) {
  const [copiado, setCopiado] = useState(false);

  async function compartir() {
    const url = `${window.location.origin}/propiedades/${slug}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: titulo,
          text: `Mirá esta propiedad de Mediterranée: ${titulo}`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        setCopiado(true);
        setTimeout(() => setCopiado(false), 2500);
      } catch {
        alert("No se pudo copiar el enlace.");
      }
    }
  }

  return (
    <button
      type="button"
      onClick={compartir}
      aria-label={`Compartir ${titulo}`}
      title="Compartir propiedad"
      className="
        absolute
        top-16
        right-4
        z-20
        w-11
        h-11
        rounded-full
        bg-white
        text-[#1300FF]
        shadow-lg
        border
        border-[#1300FF]/10
        flex
        items-center
        justify-center
        hover:bg-[#1300FF]
        hover:text-white
        transition
      "
    >
      {copiado ? (
        <span className="text-xs font-bold">OK</span>
      ) : (
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="18" cy="5" r="3" />
          <circle cx="6" cy="12" r="3" />
          <circle cx="18" cy="19" r="3" />
          <path d="m8.7 10.7 6.6-4.4" />
          <path d="m8.7 13.3 6.6 4.4" />
        </svg>
      )}
    </button>
  );
}
