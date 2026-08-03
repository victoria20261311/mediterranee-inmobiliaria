"use client";

import { useState } from "react";

type Props = {
  imagenes: string[];
  titulo: string;
};

export default function PropertyGallery({ imagenes, titulo }: Props) {

  const [indice, setIndice] = useState(0);


  if (!imagenes || imagenes.length === 0) {
    return null;
  }


  function anterior() {

    setIndice((actual) => {

      const nuevoIndice =
        actual === 0
          ? imagenes.length - 1
          : actual - 1;

      console.log("Índice anterior:", nuevoIndice);

      return nuevoIndice;

    });

  }



  function siguiente() {

    setIndice((actual) => {

      const nuevoIndice =
        actual === imagenes.length - 1
          ? 0
          : actual + 1;

      console.log("Índice siguiente:", nuevoIndice);

      return nuevoIndice;

    });

  }



  const imagenPrincipal = imagenes[indice];



  return (

    <section className="bg-[#F3E7D3] py-12">

      <div className="max-w-5xl mx-auto px-6">

        <div className="bg-white rounded-3xl shadow-2xl p-5">


          <div
            className="
              relative
              bg-gray-100
              rounded-2xl
              overflow-hidden
              flex
              items-center
              justify-center
              h-[380px]
              md:h-[520px]
            "
          >


            <img
              key={indice}
              src={imagenPrincipal}
              alt={titulo}
              className="max-h-full max-w-full object-contain"
            />


            <p className="absolute bottom-2 left-2 text-xs bg-white/80 p-2 rounded">
              {imagenPrincipal}
            </p>



            {imagenes.length > 1 && (

              <>


                <button
                  onClick={anterior}
                  className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    bg-white/90
                    text-[#303C95]
                    w-12
                    h-12
                    rounded-full
                    text-3xl
                    shadow-lg
                    hover:scale-110
                    transition
                  "
                >
                  ‹
                </button>



                <button
                  onClick={siguiente}
                  className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    bg-white/90
                    text-[#303C95]
                    w-12
                    h-12
                    rounded-full
                    text-3xl
                    shadow-lg
                    hover:scale-110
                    transition
                  "
                >
                  ›
                </button>


              </>

            )}




            <div
              className="
                absolute
                bottom-5
                left-1/2
                -translate-x-1/2
                bg-[#303C95]/90
                text-white
                px-5
                py-2
                rounded-full
                text-sm
                font-bold
                backdrop-blur
              "
            >

              {indice + 1} / {imagenes.length}

            </div>



          </div>





          <div
            className="
              flex
              gap-4
              mt-6
              overflow-x-auto
              pb-2
            "
          >

            {imagenes.map((imagen, index) => (

              <button
                key={index}
                onClick={() => {

                  console.log("Miniatura índice:", index);

                  setIndice(index);

                }}
                className={`
                  flex-shrink-0
                  rounded-xl
                  overflow-hidden
                  border-4
                  transition

                  ${
                    indice === index
                      ? "border-[#D8B384]"
                      : "border-transparent"
                  }
                `}
              >

                <img
                  src={imagen}
                  alt={`${titulo} ${index + 1}`}
                  className="
                    w-28
                    h-20
                    object-cover
                  "
                />

              </button>

            ))}

          </div>


        </div>

      </div>

    </section>

  );

}