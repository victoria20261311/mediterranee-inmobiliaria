import { supabase } from "../../lib/supabase";
import Link from "next/link";
import PropertyGallery from "../../components/PropertyGallery";
import ShareButton from "../../components/ShareButton";
import PropertyContact from "../../components/PropertyContact";
import SimilarProperties from "../../components/SimilarProperties";
import PropertyMap from "../../components/PropertyMap";


type Props = {
  params: Promise<{
    slug: string;
  }>;
};


export default async function PropertyPage({ params }: Props) {


  const { slug } = await params;


  const { data: propiedad } = await supabase
  .from("propiedades")
  .select("*")
  .eq("slug", slug)
  .single();


  if (!propiedad) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-[#F3E7D3]">
        <h1 className="text-3xl font-bold text-[#303C95]">
          Propiedad no encontrada
        </h1>
      </main>
    );
  }


  console.log(propiedad.imagenes);


  return (

    <main className="bg-[#F3E7D3] min-h-screen">



      <pre className="p-4 bg-white text-black overflow-auto">
  {JSON.stringify(propiedad.imagenes, null, 2)}
</pre>



      <div className="max-w-6xl mx-auto px-6 py-16">





        <p className="text-[#D8B384] font-bold uppercase tracking-wider">
          {propiedad.tipo}
        </p>





        <h1
          className="
            text-4xl
            md:text-5xl
            font-bold
            text-[#303C95]
            mt-3
          "
        >
          {propiedad.titulo}
        </h1>





        <p className="text-xl text-gray-600 mt-4">
          📍 {propiedad.ubicacion}
        </p>





        <p className="
          text-4xl
          font-bold
          text-[#D8B384]
          mt-8
        ">
          {propiedad.precio}
        </p>








        <div className="grid md:grid-cols-3 gap-6 mt-10">



          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">

            🛏

            <p className="text-3xl font-bold text-[#303C95] mt-3">
              {propiedad.dormitorios}
            </p>

            <p className="text-gray-500">
              Dormitorios
            </p>

          </div>






          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">

            🚿

            <p className="text-3xl font-bold text-[#303C95] mt-3">
              {propiedad.banos}
            </p>

            <p className="text-gray-500">
              Baños
            </p>

          </div>






          <div className="bg-white rounded-3xl p-6 shadow-xl text-center">

            📐

            <p className="text-3xl font-bold text-[#303C95] mt-3">
              {propiedad.metros}
            </p>

            <p className="text-gray-500">
              Metros cuadrados
            </p>

          </div>



        </div>









        <div className="mt-8 flex flex-wrap gap-3">


          {propiedad.caracteristicas?.map((item, index) => (

            <span
              key={index}
              className="
                bg-white
                shadow
                px-5
                py-3
                rounded-full
                text-[#303C95]
                font-semibold
              "
            >
              ✓ {item}
            </span>

          ))}


        </div>









        <p className="
          mt-12
          text-lg
          leading-8
          text-gray-700
        ">
          {propiedad.descripcion}
        </p>







        <PropertyContact propiedad={propiedad.titulo} />

        <PropertyMap ubicacion={propiedad.mapa} />







        <SimilarProperties actual={propiedad.slug} />








        <div className="mt-12 flex flex-wrap gap-4">





          <a
            href={`https://wa.me/59894239220?text=Hola,%20me%20interesa%20la%20propiedad:%20${encodeURIComponent(propiedad.titulo)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
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
            📲 Consultar por WhatsApp
          </a>







          <ShareButton titulo={propiedad.titulo} />







          <Link
            href="/"
            className="
              border-2
              border-[#303C95]
              px-8
              py-4
              rounded-full
              font-bold
              text-[#303C95]
              hover:bg-[#303C95]
              hover:text-white
              transition
            "
          >
            Volver
          </Link>





        </div>






      </div>


    </main>

  );
}