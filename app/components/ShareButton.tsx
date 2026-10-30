
"use client";

type Props = {
  titulo: string;
};

export default function ShareButton({ titulo }: Props) {
  async function compartir() {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: titulo,
          text: `Mirá esta propiedad de Mediterranée: ${titulo}`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("¡Enlace copiado! Ya podés compartirlo.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        alert("¡Enlace copiado! Ya podés compartirlo.");
      } catch {
        alert("No se pudo compartir el enlace. Intentá nuevamente.");
      }
    }
  }

  return (
    <button
      type="button"
      onClick={compartir}
      className="
        inline-flex
        items-center
        justify-center
        gap-3
        bg-[#1300FF]
        hover:bg-[#0D00B8]
        text-white
        px-8
        py-4
        rounded-full
        font-bold
        transition-all
        duration-300
        shadow-[0_8px_25px_rgba(19,0,255,0.20)]
        hover:shadow-[0_10px_30px_rgba(19,0,255,0.30)]
        hover:-translate-y-0.5
        active:translate-y-0
      "
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.7 13.5 6.6 3.8" />
        <path d="m15.3 6.7-6.6 3.8" />
      </svg>

      <span>Compartir</span>
    </button>
  );
}
