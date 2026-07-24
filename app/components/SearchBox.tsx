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


    if (operacion)
      parametros.append("operacion", operacion);


    if (tipo)
      parametros.append("tipo", tipo);


    if (zona)
      parametros.append("zona", zona);


    if (dormitorios)
      parametros.append("dormitorios", dormitorios);



    router.push(
      `/propiedades?${parametros.toString()}`
    );

  }








  const estiloSelect = `

    bg-white/60
    backdrop-blur-xl
    border
    border-white/70
    rounded-2xl
    px-4
    py-3
    text-[#303C95]
    font-medium
    shadow-md
    focus:outline-none
    focus:ring-2
    focus:ring-[#D8B384]
    transition

  `;









  return (


    <section
      className="
        relative
        z-20
        -mt-8
        px-6
        pb-24
      "
    >





      <div
        className="
          max-w-6xl
          mx-auto
          bg-white/45
          backdrop-blur-2xl
          rounded-3xl
          shadow-2xl
          p-6
          md:p-8
          border
          border-white/60
        "
      >







        <h2
          className="
            text-3xl
            md:text-4xl
            font-semibold
            text-center
            text-[#303C95]
          "
        >
          Encontrá tu próxima propiedad
        </h2>







        <div
          className="
            w-24
            h-1
            bg-[#D8B384]
            mx-auto
            mt-5
            rounded-full
          "
        />








        <p
          className="
            text-center
            text-gray-600
            mt-5
          "
        >
          Venta · Alquiler · Administraciones · Tasaciones
        </p>









        <div
          className="
            grid
            md:grid-cols-5
            gap-4
            mt-8
          "
        >







          <select
            value={operacion}
            onChange={(e)=>setOperacion(e.target.value)}
            className={estiloSelect}
          >

            <option value="">
              Operación
            </option>

            <option value="VENTA">
              Venta
            </option>

            <option value="ALQUILER">
              Alquiler
            </option>

          </select>








          <select
            value={tipo}
            onChange={(e)=>setTipo(e.target.value)}
            className={estiloSelect}
          >

            <option value="">
              Tipo
            </option>

            <option value="Casa">
              Casa
            </option>

            <option value="Apartamento">
              Apartamento
            </option>

            <option value="Terreno">
              Terreno
            </option>

            <option value="Chacra">
              Chacra
            </option>

          </select>








          <select
            value={zona}
            onChange={(e)=>setZona(e.target.value)}
            className={estiloSelect}
          >

            <option value="">
              Zona
            </option>

            <option value="Shangrilá">
              Shangrilá
            </option>

            <option value="Ciudad de la Costa">
              Ciudad de la Costa
            </option>

            <option value="Carrasco">
              Carrasco
            </option>

            <option value="Montevideo">
              Montevideo
            </option>

          </select>








          <select
            value={dormitorios}
            onChange={(e)=>setDormitorios(e.target.value)}
            className={estiloSelect}
          >

            <option value="">
              Dormitorios
            </option>

            <option value="1">
              1
            </option>

            <option value="2">
              2
            </option>

            <option value="3">
              3+
            </option>

          </select>









          <button
            onClick={buscar}
            className="
              bg-[#303C95]/90
              text-white
              rounded-2xl
              font-semibold
              shadow-xl
              hover:bg-[#252f7d]
              hover:scale-[1.03]
              transition
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