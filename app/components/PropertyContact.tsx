"use client";

import { useState } from "react";

type Props = {
  propiedad: string;
};

export default function PropertyContact({ propiedad }: Props) {
  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");

  const mensajeInicial = `Hola, me interesa la propiedad: ${propiedad}`;

  const [mensaje, setMensaje] = useState(mensajeInicial);

  function enviarWhatsApp() {
    const texto = `Hola, soy ${nombre || "un interesado"}.
Teléfono: ${telefono || "No indicado"}

${mensaje}`;

    const url = `https://wa.me/59894239220?text=${encodeURIComponent(
      texto
    )}`;

    window.location.href = url;
  }

  return (
    <section
      id="contacto"
      className="
        bg-white
        rounded-3xl
        shadow-[0_15px_50px_rgba(19,0,255,0.08)]
        p-8
        mt-12
        border
        border-[#1300FF]/10
      "
    >

      {/* TÍTULO */}

      <h2
        className="
          text-3xl
          font-bold
          text-[#20232A]
        "
      >
        📝 Solicitar información
      </h2>

      {/* DESCRIPCIÓN */}

      <p
        className="
          mt-3
          text-[#4E535B]
        "
      >
        Completá tus datos y enviá tu consulta por WhatsApp.
      </p>

      {/* FORMULARIO */}

      <div className="mt-6 space-y-4">

        {/* NOMBRE */}

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="
            w-full
            bg-[#F2F3FF]
            border
            border-[#1300FF]/15
            rounded-xl
            px-5
            py-3
            text-[#20232A]
            placeholder:text-[#4E535B]/55
            focus:outline-none
            focus:ring-2
            focus:ring-[#1300FF]/30
            focus:border-[#1300FF]
            transition
          "
        />

        {/* TELÉFONO */}

        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
          className="
            w-full
            bg-[#F2F3FF]
            border
            border-[#1300FF]/15
            rounded-xl
            px-5
            py-3
            text-[#20232A]
            placeholder:text-[#4E535B]/55
            focus:outline-none
            focus:ring-2
            focus:ring-[#1300FF]/30
            focus:border-[#1300FF]
            transition
          "
        />

        {/* MENSAJE */}

        <textarea
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          rows={5}
          className="
            w-full
            bg-[#F2F3FF]
            border
            border-[#1300FF]/15
            rounded-xl
            px-5
            py-3
            text-[#20232A]
            placeholder:text-[#4E535B]/55
            focus:outline-none
            focus:ring-2
            focus:ring-[#1300FF]/30
            focus:border-[#1300FF]
            transition
            resize-none
          "
        />

        {/* BOTÓN WHATSAPP */}

        <button
          type="button"
          onClick={enviarWhatsApp}
          className="
            w-full
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
          📲 Enviar consulta por WhatsApp
        </button>

      </div>

    </section>
  );
}
