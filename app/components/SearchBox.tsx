"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBox() {
  const router = useRouter();

  const [operacion, setOperacion] = useState("");
  const [tipo, setTipo] = useState("");
  const [zona, setZona] = useState("");
  const [dormitorios, setDormitorios] = useState("");

  function buscar() {
    const parametros = new URLSearchParams();

    if (operacion) {
      parametros.set("operacion", operacion);
    }

    if (tipo) {
      parametros.set("tipo", tipo);
    }

    if (zona) {
      parametros.set("zona", zona);
    }

    if (dormitorios) {
      parametros.set("dormitorios", dormitorios);
    }

    const query = parametros.toString();

    if (query) {
      router.push("/propiedades?" + query);
    } else {
      router.push("/propiedades");
    }
  }

  const estiloSelect =
    "bg-white/75 backdrop-blur-xl border border-[#1300FF]/15 rounded-2xl px-4 py-3 text-[#20232A] font-medium shadow-md focus:outline-none focus:ring-2 focus:ring-[#1300FF]/30 focus:border-[#1300FF] transition";

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 pb-24">
      <div className="max-w-6xl mx-auto bg-white/75 backdrop-blur-2xl rounded-3xl shadow-[0_15px_50px_rgba(19,0,255,0.10)] p-6 md:p-8 border border-[#1300FF]/10">

        <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#20232A]">
          Encontrá tu próxima propiedad
        </h2>

        <div className="w-24 h-[2px] bg-[#1300FF] mx-auto mt-5 rounded-full shadow-[0_0_10px_rgba(19,0,255,0.25)]" />

        <p className="text-center text-[#4E535B] mt-5">
          Venta · Alquiler · Administraciones · Tasaciones
        </p>

        <div className="grid md:grid-cols-5 gap-4 mt-8">

          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            className={estiloSelect}
          >
            <option value="">Operación</option>
            <option value="VENTA">Venta</option>
            <option value="ALQUILER">Alquiler</option>
          </select>

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={estiloSelect}
          >
            <option value="">Tipo</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Chacra">Chacra</option>
          </select>

          <select
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className={estiloSelect}
          >
            <option value="">Zona</option>
            <option value="Shangrilá">Shangrilá</option>
            <option value="Ciudad de la Costa">Ciudad de la Costa</option>
            <option value="Carrasco">Carrasco</option>
            <option value="Montevideo">Montevideo</option>
          </select>

          <select
            value={dormitorios}
            onChange={(e) => setDormitorios(e.target.value)}
            className={estiloSelect}
          >
            <option value="">Dormitorios</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

          <button
            type="button"
            onClick={buscar}
            className="
              bg-[#1300FF]
              hover:bg-[#0D00B8]
              text-white
              rounded-2xl
              font-semibold
              shadow-[0_8px_25px_rgba(19,0,255,0.25)]
              hover:shadow-[0_10px_30px_rgba(19,0,255,0.35)]
              hover:-translate-y-0.5
              transition-all
              duration-300
            "
          >
            Buscar
          </button>

        </div>
      </div>
    </section>
  );
}
