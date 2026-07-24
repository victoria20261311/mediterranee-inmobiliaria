import Link from "next/link";
import { propiedades } from "../data/propiedades";


type Props = {
  actual: string;
};


export default function SimilarProperties({ actual }: Props) {


  const similares = propiedades
    .filter((p) => p.slug !== actual)
    .slice(0, 3);





  return (


    <section className="mt-16">





      <h2
        className="
          text-3xl
          font-bold
          text-[#303C95]
          mb-8
        "
      >
        🏡 Propiedades similares
      </h2>







      <div
        className="
          grid
          md:grid-cols-3
          gap-8
        "
      >





        {similares.map((p) => (




          <div
            key={p.id}
            className="
              bg-white
              rounded-3xl
              shadow-xl
              overflow-hidden
              hover:-translate-y-2
              transition
              duration-300
            "
          >





            <img
              src={`/propiedades/${p.imagenes[0]}`}
              alt={p.titulo}
              className="
                w-full
                h-56
                object-cover
              "
            />






            <div className="p-6">





              <h3
                className="
                  text-xl
                  font-bold
                  text-[#303C95]
                "
              >
                {p.titulo}
              </h3>






              <p
                className="
                  text-gray-500
                  mt-2
                "
              >
                📍 {p.ubicacion}
              </p>






              <p
                className="
                  mt-3
                  text-[#D8B384]
                  font-bold
                  text-lg
                "
              >
                {p.precio}
              </p>







              <Link
                href={`/propiedades/${p.slug}`}
                className="
                  block
                  mt-5
                  text-center
                  border-2
                  border-[#D8B384]
                  py-3
                  rounded-full
                  font-semibold
                  text-[#303C95]
                  hover:bg-[#D8B384]
                  hover:text-white
                  transition
                "
              >
                Ver propiedad
              </Link>






            </div>






          </div>






        ))}





      </div>







    </section>


  );
}