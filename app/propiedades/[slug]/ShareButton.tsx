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
          text: `Mirá esta propiedad: ${titulo}`,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Enlace copiado. Ya podés compartirlo.");
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }

      try {
        await navigator.clipboard.writeText(url);
        alert("Enlace copiado. Ya podés compartirlo.");
      } catch {
        alert("No se pudo compartir el enlace.");
      }
    }
  }

  return (
    <button
      type="button"
      onClick={compartir}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#3F5870]/30 px-5 py-3 text-sm font-medium text-[#3F5870] transition hover:bg-[#3F5870] hover:text-white"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.7 10.7 6.6-4.4" />
        <path d="m8.7 13.3 6.6 4.4" />
      </svg>
      <span>Compartir</span>
    </button>
  );
}