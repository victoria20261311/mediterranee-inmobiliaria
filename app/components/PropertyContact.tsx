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
    const texto = `Hola, me interesa una propiedad.

Propiedad: ${propiedad}

Nombre: ${nombre || "No indicado"}
Teléfono: ${telefono || "No indicado"}

Consulta:
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
        bg-[#E2EDF3]
        rounded-3xl
        shadow-[0_15px_50px_rgba(48,76,95,0.12)]
        p-6
        sm:p-8
        mt-12
        border
        border-[#CBDCE5]
      "
    >
      {/* TÍTULO */}

      <div className="flex items-center gap-4">
        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-2xl
            bg-[#F4F9FB]
            border
            border-[#CBDCE5]
            flex
            items-center
            justify-center
            text-[#1300FF]
          "
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M21 11.5a8.4 8.4 0 0 1-8.9 8.4 8.7 8.7 0 0 1-3.7-.9L3 20l1.4-4.9A8.4 8.4 0 0 1 3.5 11c0-4.7 4-8.5 8.8-8.5S21 6.3 21 11.5Z" />
            <path d="M8 10h8" />
            <path d="M8 14h5" />
          </svg>
        </div>

        <div>
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#20232A]
            "
          >
            Solicitar información
          </h2>

          <p
            className="
              mt-1
              text-sm
              sm:text-base
              text-[#53616B]
            "
          >
            Estamos para ayudarte con esta propiedad.
          </p>
        </div>
      </div>

      {/* DESCRIPCIÓN */}

      <p
        className="
          mt-5
          text-[#53616B]
          leading-relaxed
        "
      >
        Completá tus datos y enviá tu consulta directamente por WhatsApp.
      </p>

      {/* FORMULARIO */}

      <div className="mt-6 space-y-4">
        {/* NOMBRE */}

        <div>
          <label
            htmlFor="nombre"
            className="
              block
              mb-2
              text-sm
              font-semibold
              text-[#53616B]
            "
          >
            Nombre
          </label>

          <input
            id="nombre"
            type="text"
            placeholder="Tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="
              w-full
              bg-[#F8FBFC]
              border
              border-[#CBDCE5]
              rounded-xl
              px-5
              py-3.5
              text-[#20232A]
              placeholder:text-[#53616B]/50
              focus:outline-none
              focus:ring-2
              focus:ring-[#1300FF]/20
              focus:border-[#1300FF]
              transition-all
              duration-200
            "
          />
        </div>

        {/* TELÉFONO */}

        <div>
          <label
            htmlFor="telefono"
            className="
              block
              mb-2
              text-sm
              font-semibold
              text-[#53616B]
            "
          >
            Teléfono
          </label>

          <input
            id="telefono"
            type="tel"
            placeholder="Tu teléfono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
            className="
              w-full
              bg-[#F8FBFC]
              border
              border-[#CBDCE5]
              rounded-xl
              px-5
              py-3.5
              text-[#20232A]
              placeholder:text-[#53616B]/50
              focus:outline-none
              focus:ring-2
              focus:ring-[#1300FF]/20
              focus:border-[#1300FF]
              transition-all
              duration-200
            "
          />
        </div>

        {/* MENSAJE */}

        <div>
          <label
            htmlFor="mensaje"
            className="
              block
              mb-2
              text-sm
              font-semibold
              text-[#53616B]
            "
          >
            Consulta
          </label>

          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            rows={5}
            className="
              w-full
              bg-[#F8FBFC]
              border
              border-[#CBDCE5]
              rounded-xl
              px-5
              py-3.5
              text-[#20232A]
              placeholder:text-[#53616B]/50
              focus:outline-none
              focus:ring-2
              focus:ring-[#1300FF]/20
              focus:border-[#1300FF]
              transition-all
              duration-200
              resize-none
            "
          />
        </div>

        {/* BOTÓN WHATSAPP */}

        <button
          type="button"
          onClick={enviarWhatsApp}
          className="
            w-full
            mt-2
            bg-[#1300FF]
            hover:bg-[#0D00B8]
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            flex
            items-center
            justify-center
            gap-3
            transition-all
            duration-300
            shadow-[0_8px_25px_rgba(19,0,255,0.25)]
            hover:shadow-[0_10px_30px_rgba(19,0,255,0.35)]
            hover:-translate-y-0.5
          "
        >
          <svg
            width="21"
            height="21"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 4a10 10 0 0 0-16 12L3 21l5-1a10 10 0 0 0 12-16Z" />
            <path d="M8.5 8.5c.3-.7.6-.7.9-.7h.5c.2 0 .4.1.5.4l.7 1.7c.1.3.1.5-.1.7l-.5.6c-.2.2-.2.4 0 .7.4.7 1 1.3 1.7 1.7.3.2.5.2.7 0l.6-.5c.2-.2.4-.2.7-.1l1.7.7c.3.1.4.3.4.5v.5c0 .3 0 .6-.7.9-.5.2-1.8.4-3.8-.8-2.2-1.3-3.5-3.5-3.7-4-.2-.5-.6-1.8.4-2.3Z" />
          </svg>

          <span>
            Enviar consulta por WhatsApp
          </span>
        </button>
      </div>
    </section>
  );
}