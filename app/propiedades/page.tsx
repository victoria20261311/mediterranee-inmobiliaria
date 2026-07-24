import Link from "next/link";
import { propiedades } from "../data/propiedades";


type Props = {
  searchParams: Promise<{
    operacion?: string;
    tipo?: string;
    zona?: string;
    dormitorios?: string;
  }>;
};



export default async function PropiedadesPage({ searchParams }: Props) {


  const filtros = await searchParams;



  const normalizar = (texto: string = "") =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");






  const resultados = propiedades.filter((p) => {



    const coincideOperacion =
      !filtros.operacion ||
      normalizar(p.tipo).includes(
        normalizar(filtros.operacion)
      );





    const coincideTipo =
      !filtros.tipo ||
      normalizar(p.categoria).includes(
        normalizar(filtros.tipo)
      );





    const coincideZona =
      !filtros.zona ||
      normalizar(p.ubicacion).includes(
        normalizar(filtros.zona)
      );





    const coincideDormitorios =
      !filtros.dormitorios ||
      (
        filtros.dormitorios === "3"
          ? p.dormitorios >= 3
          : p.dormitorios === Number(filtros.dormitorios)
      );






    return (
      coincideOperacion &&
      coincideTipo &&
      coincideZona &&
      coincideDormitorios
    );


  });









  return (

    <main
      className="
        min-h-screen
        bg-[#F3E7D3]
        px-6
        py-20
      "
    >


      <div className="max-w-7xl mx-auto">



        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            text-center
            text-[#1B4965]
          "
        >
          Propiedades disponibles
        </h1>





        <p
          className="
            text-center
            text-gray-600
            mt-4
            text-lg
          "
        >
          Encontramos {resultados.length} propiedades para vos
        </p>








        {resultados.length === 0 && (

          <div
            className="
              mt-12
              bg-white/80
              backdrop-blur-md
              rounded-3xl
              p-10
              text-center
              shadow-xl
            "
          >

            <h2
              className="
                text-2xl
                font-bold
                text-[#1B4965]
              "
            >
              No encontramos propiedades
            </h2>


            <p className="mt-3 text-gray-600">
              Probá cambiar los filtros de búsqueda.
            </p>


          </div>

        )}









        <div
          className="
            grid
            md:grid-cols-3
            gap-10
            mt-14
          "
        >





          {resultados.map((p) => (


            <article
              key={p.id}
              className="
                bg-white/80
                backdrop-blur-md
                rounded-3xl
                overflow-hidden
                shadow-xl
                hover:-translate-y-2
                transition
                duration-300
                border
                border-white/60
              "
            >




              <div className="relative overflow-hidden">


                <img
                  src={`/propiedades/${p.imagenes[0]}`}
                  alt={p.titulo}
                  className="
                    w-full
                    h-72
                    object-cover
                  "
                />



                <span
                  className="
                    absolute
                    top-5
                    left-5
                    bg-white/80
                    backdrop-blur-md
                    text-[#1B4965]
                    px-4
                    py-2
                    rounded-full
                    text-xs
                    font-bold
                  "
                >
                  {p.tipo}
                </span>


              </div>









              <div className="p-7">



                <h2
                  className="
                    text-2xl
                    font-bold
                    text-[#1B4965]
                  "
                >
                  {p.titulo}
                </h2>




                <p className="mt-3 text-gray-500">
                  📍 {p.ubicacion}
                </p>







                <div className="grid grid-cols-3 gap-3 mt-7">


                  <div className="bg-[#F3E7D3] rounded-2xl p-3 text-center">

                    <div>
                      🛏
                    </div>

                    <strong className="text-[#1B4965]">
                      {p.dormitorios}
                    </strong>

                    <p className="text-xs text-gray-500">
                      Dorm.
                    </p>

                  </div>





                  <div className="bg-[#F3E7D3] rounded-2xl p-3 text-center">

                    <div>
                      🚿
                    </div>

                    <strong className="text-[#1B4965]">
                      {p.banos}
                    </strong>

                    <p className="text-xs text-gray-500">
                      Baños
                    </p>

                  </div>





                  <div className="bg-[#F3E7D3] rounded-2xl p-3 text-center">

                    <div>
                      📐
                    </div>

                    <strong className="text-[#1B4965]">
                      {p.metros}
                    </strong>

                    <p className="text-xs text-gray-500">
                      m²
                    </p>

                  </div>


                </div>








                <p
                  className="
                    mt-7
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
                    rounded-full
                    py-4
                    border-2
                    border-[#D8B384]
                    text-[#1B4965]
                    font-semibold
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


    </main>

  );

}