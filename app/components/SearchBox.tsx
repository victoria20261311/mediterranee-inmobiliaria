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
    "bg-[#F3EEE6]/95 backdrop-blur-xl border border-[#D6CCBC] rounded-2xl px-4 py-3.5 text-[#20232A] font-medium shadow-[0_5px_18px_rgba(70,60,50,0.06)] focus:outline-none focus:ring-2 focus:ring-[#3F5870]/20 focus:border-[#3F5870] transition-all duration-300";

  return (
    <section className="relative z-20 -mt-8 px-4 sm:px-6 pb-24">
      <div
        className="
          max-w-6xl
          mx-auto
          bg-[#DDD4C6]/95
          backdrop-blur-2xl
          rounded-3xl
          shadow-[0_15px_50px_rgba(70,60,50,0.12)]
          p-6
          md:p-8
          border
          border-[#C8BBA8]
        "
      >
        {/* TÍTULO */}

        <h2
          className="
            text-3xl
            md:text-4xl
            font-semibold
            text-center
            text-[#20232A]
          "
        >
          Encontrá tu próxima propiedad
        </h2>

        <div
          className="
            w-24
            h-[2px]
            bg-[#1300FF]
            mx-auto
            mt-5
            rounded-full
            shadow-[0_0_10px_rgba(19,0,255,0.25)]
          "
        />

        {/* DESCRIPCIÓN */}

        <p
          className="
            text-center
            text-[#4E535B]
            mt-5
          "
        >
          Venta · Alquiler · Administraciones · Tasaciones
        </p>

        {/* FILTROS */}

        <div className="grid md:grid-cols-5 gap-4 mt-8">

          {/* OPERACIÓN */}

          <select
            value={operacion}
            onChange={(e) => setOperacion(e.target.value)}
            className={estiloSelect}
            aria-label="Seleccionar operación"
          >
            <option value="">Operación</option>
            <option value="VENTA">Venta</option>
            <option value="ALQUILER">Alquiler</option>
          </select>

          {/* TIPO */}

          <select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className={estiloSelect}
            aria-label="Seleccionar tipo de propiedad"
          >
            <option value="">Tipo</option>
            <option value="Casa">Casa</option>
            <option value="Apartamento">Apartamento</option>
            <option value="Terreno">Terreno</option>
            <option value="Chacra">Chacra</option>
          </select>

          {/* ZONA */}

          <select
            value={zona}
            onChange={(e) => setZona(e.target.value)}
            className={estiloSelect}
            aria-label="Seleccionar zona"
          >
            <option value="">Zona</option>
            <option value="Shangrilá">Shangrilá</option>
            <option value="Ciudad de la Costa">Ciudad de la Costa</option>
            <option value="Carrasco">Carrasco</option>
            <option value="Montevideo">Montevideo</option>
          </select>

          {/* DORMITORIOS */}

          <select
            value={dormitorios}
            onChange={(e) => setDormitorios(e.target.value)}
            className={estiloSelect}
            aria-label="Seleccionar cantidad de dormitorios"
          >
            <option value="">Dormitorios</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3+</option>
          </select>

          {/* BUSCAR */}

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
              min-h-[52px]
            "
          >
            Buscar
          </button>

        </div>
      </div>
    </section>
  );
}