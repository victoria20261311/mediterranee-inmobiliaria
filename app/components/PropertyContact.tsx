```tsx
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
        shadow-xl
        p-8
        mt-12
        border
        border-gray-100
      "
    >
      <h2 className="text-3xl font-bold text-[#303C95]">
        📝 Solicitar información
      </h2>

      <p className="mt-3 text-gray-600">
        Completá tus datos y enviá tu consulta por WhatsApp.
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
          type="tel"
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
          rows={5}
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
          type="button"
          onClick={enviarWhatsApp}
          className="
            w-full
            bg-green-500
            hover:bg-green-600
            text-white
            px-8
            py-4
            rounded-full
            font-bold
            transition
            shadow-lg
          "
        >
          📲 Enviar consulta por WhatsApp
        </button>

      </div>
    </section>
  );
}
```
