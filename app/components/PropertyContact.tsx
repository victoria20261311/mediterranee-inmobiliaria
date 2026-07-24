"use client";

import { useState } from "react";

type Props = {
  propiedad: string;
};


export default function PropertyContact({ propiedad }: Props) {


  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState(
    `Hola, me interesa la propiedad: ${propiedad}`
  );



  function enviarWhatsApp() {


    const texto = `
Hola, soy ${nombre}.
Teléfono: ${telefono}

${mensaje}
`;



    const url =
      `https://wa.me/59894239220?text=${encodeURIComponent(texto)}`;



    window.open(url, "_blank");

  }





  return (


    <div
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        mt-12
        border
        border-white
      "
    >





      <h2
        className="
          text-3xl
          font-bold
          text-[#303C95]
        "
      >
        📝 Solicitar información
      </h2>





      <p
        className="
          mt-3
          text-gray-600
        "
      >
        Completá tus datos y nos comunicamos contigo.
      </p>







      <div className="mt-6 space-y-4">





        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="
            w-full
            border
            border-gray-200
            rounded-xl
            px-5
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-[#D8B384]
          "
        />







        <input
          type="text"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="
            w-full
            border
            border-gray-200
            rounded-xl
            px-5
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-[#D8B384]
          "
        />







        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={4}
          className="
            w-full
            border
            border-gray-200
            rounded-xl
            px-5
            py-3
            focus:outline-none
            focus:ring-2
            focus:ring-[#D8B384]
          "
        />







        <button
          onClick={enviarWhatsApp}
          className="
            bg-green-500
            hover:bg-green-600
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
          📲 Enviar consulta
        </button>






      </div>





    </div>


  );

}