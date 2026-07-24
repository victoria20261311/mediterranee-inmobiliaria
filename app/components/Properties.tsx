import Link from "next/link";
import { propiedades } from "../data/propiedades";


export default function Properties() {


  return (

    <section
      id="propiedades"
      className="
        bg-gradient-to-b
        from-[#F3E7D3]
        via-[#FAF8F5]
        to-white
        py-28
        px-6
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
        "
      >




        <div
          className="
            text-center
            mb-16
          "
        >



          <span
            className="
              text-sm
              uppercase
              tracking-[5px]
              text-[#D8B384]
              font-semibold
            "
          >
            Propiedades
          </span>





          <h2
            className="
              mt-5
              text-4xl
              md:text-6xl
              font-semibold
              text-[#303C95]
            "
          >
            Encontrá tu próximo lugar
          </h2>





          <div
            className="
              w-28
              h-[3px]
              bg-[#D8B384]
              mx-auto
              mt-7
              rounded-full
            "
          />






          <p
            className="
              mt-6
              text-gray-600
              text-lg
            "
          >
            Propiedades seleccionadas en Ciudad de la Costa y Montevideo.
          </p>



        </div>









        <div
          className="
            grid
            md:grid-cols-3
            gap-10
          "
        >




          {propiedades.map((p)=>(



            <article
              key={p.id}
              className="
                bg-white/60
                backdrop-blur-2xl
                rounded-[35px]
                overflow-hidden
                border
                border-white
                shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                hover:-translate-y-3
                transition
                duration-500
              "
            >






              <div
                className="
                  relative
                  overflow-hidden
                "
              >




                <img
                  src={`/propiedades/${p.imagenes[0]}`}
                  alt={p.titulo}
                  className="
                    w-full
                    h-80
                    object-cover
                    hover:scale-110
                    transition
                    duration-700
                  "
                />







                <span
                  className="
                    absolute
                    top-5
                    left-5
                    bg-white/80
                    backdrop-blur-xl
                    px-5
                    py-2
                    rounded-full
                    text-[#303C95]
                    text-sm
                    font-bold
                    shadow-lg
                  "
                >
                  {p.tipo}
                </span>





              </div>









              <div
                className="
                  p-8
                "
              >





                <h3
                  className="
                    text-2xl
                    font-semibold
                    text-[#303C95]
                  "
                >
                  {p.titulo}
                </h3>






                <p
                  className="
                    mt-3
                    text-gray-500
                  "
                >
                  📍 {p.ubicacion}
                </p>








                <div
                  className="
                    grid
                    grid-cols-3
                    gap-3
                    mt-7
                  "
                >





                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-4
                      text-center
                    "
                  >
                    🛏
                    <p className="font-bold text-[#303C95] mt-1">
                      {p.dormitorios}
                    </p>
                  </div>






                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-4
                      text-center
                    "
                  >
                    🚿
                    <p className="font-bold text-[#303C95] mt-1">
                      {p.banos}
                    </p>
                  </div>






                  <div
                    className="
                      bg-[#F3E7D3]
                      rounded-2xl
                      p-4
                      text-center
                    "
                  >
                    📐
                    <p className="font-bold text-[#303C95] mt-1">
                      {p.metros}
                    </p>
                  </div>




                </div>









                <p
                  className="
                    mt-7
                    text-3xl
                    font-semibold
                    text-[#D8B384]
                  "
                >
                  {p.precio}
                </p>







                <Link
                  href={`/propiedades/${p.slug}`}
                  className="
                    block
                    mt-8
                    text-center
                    bg-[#303C95]
                    text-white
                    py-4
                    rounded-full
                    font-semibold
                    shadow-xl
                    hover:bg-[#252f7d]
                    hover:scale-105
                    transition
                  "
                >
                  Ver propiedad
                </Link>






              </div>






            </article>



          ))}




        </div>




      </div>



    </section>


  );

}