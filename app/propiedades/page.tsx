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



export default async function PropiedadesPage({
  searchParams,
}: Props) {


  const filtros = await searchParams;



  const normalizar = (texto: string = "") =>
    texto
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");





  const resultados = propiedades.filter((p) => {



    const coincideOperacion =
      !filtros.operacion ||
      normalizar(p.tipo) ===
      normalizar(filtros.operacion);





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
        bg-gradient-to-b
        from-[#FAF8F5]
        to-[#F3E7D3]
        px-6
        py-24
      "
    >



      <div
        className="
          max-w-7xl
          mx-auto
        "
      >





        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            text-center
            text-[#303C95]
          "
        >

          {
            filtros.operacion
              ? filtros.operacion === "VENTA"
                ? "Propiedades en venta"
                : "Propiedades en alquiler"

              : filtros.tipo
                ? `${filtros.tipo}s disponibles`

                : "Propiedades disponibles"
          }

        </h1>







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
            text-center
            mt-6
            text-gray-600
            text-lg
          "
        >
          Encontramos {resultados.length} propiedades para vos
        </p>









        {
          resultados.length === 0 && (

            <div
              className="
                mt-12
                bg-white/80
                backdrop-blur-xl
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
                  text-[#303C95]
                "
              >
                No encontramos propiedades
              </h2>


              <p
                className="
                  mt-3
                  text-gray-600
                "
              >
                Probá cambiando los filtros de búsqueda.
              </p>


            </div>

          )
        }








        <div
          className="
            grid
            md:grid-cols-3
            gap-10
            mt-14
          "
        >






          {
            resultados.map((p)=>(


              <article
                key={p.id}
                className="
                  bg-white/80
                  backdrop-blur-xl
                  rounded-3xl
                  overflow-hidden
                  shadow-xl
                  border
                  border-white
                  hover:-translate-y-2
                  transition
                  duration-300
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
                      h-72
                      object-cover
                    "
                  />




                  <span
                    className="
                      absolute
                      top-5
                      left-5
                      bg-white/90
                      backdrop-blur
                      text-[#303C95]
                      px-5
                      py-2
                      rounded-full
                      text-xs
                      font-bold
                    "
                  >
                    {p.tipo}
                  </span>



                </div>







                <div
                  className="
                    p-7
                  "
                >



                  <h2
                    className="
                      text-2xl
                      font-bold
                      text-[#303C95]
                    "
                  >
                    {p.titulo}
                  </h2>






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
                      mt-6
                    "
                  >



                    <div
                      className="
                        bg-[#F3E7D3]
                        rounded-2xl
                        p-3
                        text-center
                      "
                    >
                      🛏
                      <p className="font-bold text-[#303C95]">
                        {p.dormitorios}
                      </p>
                    </div>





                    <div
                      className="
                        bg-[#F3E7D3]
                        rounded-2xl
                        p-3
                        text-center
                      "
                    >
                      🚿
                      <p className="font-bold text-[#303C95]">
                        {p.banos}
                      </p>
                    </div>





                    <div
                      className="
                        bg-[#F3E7D3]
                        rounded-2xl
                        p-3
                        text-center
                      "
                    >
                      📐
                      <p className="font-bold text-[#303C95]">
                        {p.metros}
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
                      border-2
                      border-[#D8B384]
                      text-[#303C95]
                      py-4
                      rounded-full
                      font-bold
                      hover:bg-[#D8B384]
                      hover:text-white
                      transition
                    "
                  >
                    Ver propiedad
                  </Link>




                </div>




              </article>


            ))
          }




        </div>




      </div>




    </main>


  );

}