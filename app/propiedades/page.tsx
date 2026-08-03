import Image from "next/image";
import Link from "next/link";
import { supabase } from "../lib/supabase";

export default async function PropiedadesPage() {
  const { data: propiedades, error } = await supabase
    .from("propiedades")
    .select("*")
    .order("id");

  if (error) {
    return (
      <main className="p-10">
        <h1 className="text-2xl font-bold">
          Error cargando propiedades
        </h1>
        <p>{error.message}</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F3E7D3] p-10">

      <h1 className="text-4xl font-bold text-center mb-10">
        Propiedades
      </h1>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

        {propiedades?.map((propiedad) => (

          <div
            key={propiedad.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg"
          >

            <div className="relative h-64">

              <Image
                src={propiedad.imagen}
                alt={propiedad.titulo}
                fill
                className="object-cover"
              />

            </div>


            <div className="p-5">

              <h2 className="text-xl font-bold">
                {propiedad.titulo}
              </h2>

              <p className="text-gray-600">
                {propiedad.zona}
              </p>

              <p className="mt-2 font-semibold">
                {propiedad.precio}
              </p>


              <Link
                href={`/propiedades/${propiedad.slug}`}
                className="inline-block mt-4 bg-black text-white px-5 py-2 rounded-lg"
              >
                Ver propiedad
              </Link>

            </div>

          </div>

        ))}

      </div>

    </main>
  );
}