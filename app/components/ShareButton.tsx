"use client";

type Props = {
  titulo: string;
};

export default function ShareButton({ titulo }: Props) {
  function compartir() {
    if (navigator.share) {
      navigator.share({
        title: titulo,
        text: `Mirá esta propiedad: ${titulo}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);

      alert("Enlace copiado");
    }
  }

  return (
    <button
      type="button"
      onClick={compartir}
      className="
        bg-[#1300FF]
        hover:bg-[#0D00B8]
        text-white
        px-8
        py-4
        rounded-full
        font-bold
        transition-all
        duration-300
        shadow-[0_8px_25px_rgba(19,0,255,0.25)]
        hover:shadow-[0_10px_30px_rgba(19,0,255,0.35)]
        hover:-translate-y-0.5
      "
    >
      🔗 Compartir
    </button>
  );
}
