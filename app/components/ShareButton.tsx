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
      onClick={compartir}
      className="
        bg-[#D8B384]
        hover:bg-[#c89a62]
        text-white
        px-8
        py-4
        rounded-full
        font-bold
        transition
        shadow-lg
        hover:scale-105
      "
    >
      🔗 Compartir
    </button>


  );

}