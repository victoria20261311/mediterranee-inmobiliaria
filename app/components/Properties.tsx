import Link from "next/link";
import { propiedades } from "../data/propiedades";


export default function Properties() {


  return (

    <section
      id="propiedades"
      className="
        scroll-mt-32
        bg-[#F3E7D3]
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
            mb-14
          "
        >



          <h2
            className="
              text-4xl
              md:text-5xl
              font-semibold
              text-[#303C95]
            "
          >
            Propiedades destacadas
          </h2>



          <div
            className="
              w-24
              h-1
              bg-[#D8B384]
              mx-auto
              mt-6
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
            Encontrá tu próximo hogar o inversión.
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
                bg-white/80
                backdrop-blur-xl
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
                transition
              "
            >



              <img
                src={`/propiedades/${p.imagenes[0]}`}
                alt={p.titulo}
                className="
                  w-full
                  h-72
                  object-cover
                "
              />





              <div
                className="
                  p-7
                "
              >



                <h3
                  className="
                    text-2xl
                    font-bold
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



                <p
                  className="
                    mt-5
                    text-2xl
                    font-bold
                    text-[#D8B384]
                  "
                >
                  {p.precio}
                </p>




                <Link
                  href={`/propiedades/${p.slug}`}
                  className="
                    block
                    mt-7
                    text-center
                    border-2
                    border-[#D8B384]
                    py-3
                    rounded-full
                    font-bold
                    text-[#303C95]
                    hover:bg-[#D8B384]
                    hover:text-white
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