import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Noticias inmobiliarias | Mediterranée",
  description:
    "Noticias, información y consejos inmobiliarios para tomar mejores decisiones en Shangrilá, Ciudad de la Costa y Montevideo.",
};

export default function NoticiasPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F3EEE6] text-[#20232A]">
        {/* Encabezado */}
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-20 md:px-10 md:pt-28">
          <p className="mb-4 text-sm uppercase tracking-[0.25em] text-[#1300FF]">
            Mediterranée · Servicios Inmobiliarios
          </p>

          <h1 className="max-w-3xl text-2xl font-light leading-tight md:text-4xl">
            Noticias y consejos
            <span className="mt-2 block font-medium text-[#1300FF]">
              para decidir mejor.
            </span>
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#4E535B] md:text-lg">
            Información útil para comprender el mercado inmobiliario,
            conocer el valor de una propiedad y tomar decisiones con
            mayor seguridad.
          </p>
        </section>

        {/* Artículos */}
        <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
          <div className="mb-8 border-b border-[#DEDAD1] pb-5">
            <p className="text-sm uppercase tracking-[0.2em] text-[#4E535B]">
              Nuestro espacio de actualidad
            </p>
          </div>

          {/* Artículo 01 */}
          <Link
            href="/noticias/precios-propiedades-uruguay"
            className="group block overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] shadow-sm transition duration-300 hover:border-[#1300FF]/30 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[240px] overflow-hidden bg-[#E8E0D2] md:min-h-[360px]">
                <img
                  src="/noticias/Diseño%20sin%20título.png"
                  alt="Información sobre los precios de las propiedades"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
                  Mercado inmobiliario · Artículo 01
                </p>

                <h2 className="mt-5 text-2xl font-medium leading-snug transition-colors duration-300 group-hover:text-[#1300FF] md:text-3xl">
                  ¿Qué está pasando con los precios de las propiedades?
                </h2>

                <p className="mt-4 leading-7 text-[#4E535B]">
                  Conocé qué factores influyen en el valor de una propiedad,
                  cómo interpretar los precios publicados y qué tener en
                  cuenta antes de vender o comprar.
                </p>

                <span className="mt-7 inline-flex w-fit items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]">
                  Leer artículo
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Artículo 02 */}
          <Link
            href="/noticias/es-buen-momento-para-vender"
            className="group mt-8 block overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] shadow-sm transition duration-300 hover:border-[#1300FF]/30 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-7 md:order-1 md:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
                  Mercado inmobiliario · Artículo 02
                </p>

                <h2 className="mt-5 text-2xl font-medium leading-snug transition-colors duration-300 group-hover:text-[#1300FF] md:text-3xl">
                  ¿Es un buen momento para vender una propiedad?
                </h2>

                <p className="mt-4 leading-7 text-[#4E535B]">
                  Qué conviene analizar sobre el precio, la demanda, la
                  presentación del inmueble y tus objetivos antes de decidir
                  vender una propiedad en Shangrilá, Ciudad de la Costa o
                  Montevideo.
                </p>

                <span className="mt-7 inline-flex w-fit items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]">
                  Leer artículo
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </div>

              <div className="relative min-h-[240px] overflow-hidden bg-[#E8E0D2] md:order-2 md:min-h-[360px]">
                <img
                  src="/noticias/Diseño%20sin%20título.png"
                  alt="Artículo sobre el mejor momento para vender una propiedad"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Link>

          {/* Artículo 03 */}
          <Link
            href="/noticias/preparar-casa-para-vender"
            className="group mt-8 block overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] shadow-sm transition duration-300 hover:border-[#1300FF]/30 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="relative min-h-[240px] overflow-hidden bg-[#E8E0D2] md:min-h-[360px]">
                <img
                  src="/noticias/Diseño%20sin%20título.png"
                  alt="Consejos para preparar una casa antes de venderla"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex flex-col justify-center p-7 md:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
                  Consejos para vendedores · Artículo 03
                </p>

                <h2 className="mt-5 text-2xl font-medium leading-snug transition-colors duration-300 group-hover:text-[#1300FF] md:text-3xl">
                  7 tips para preparar tu casa antes de ponerla en venta
                </h2>

                <p className="mt-4 leading-7 text-[#4E535B]">
                  Descubrí cómo mejorar la presentación de tu propiedad,
                  cuidar los detalles y prepararla para recibir visitas
                  sin gastar de más.
                </p>

                <span className="mt-7 inline-flex w-fit items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]">
                  Leer artículo
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </div>
            </div>
          </Link>

          {/* Artículo 04 */}
          <Link
            href="/noticias/documentos-para-vender-propiedad"
            className="group mt-8 block overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] shadow-sm transition duration-300 hover:border-[#1300FF]/30 hover:shadow-xl"
          >
            <div className="grid md:grid-cols-2">
              <div className="flex flex-col justify-center p-7 md:order-1 md:p-10 lg:p-12">
                <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
                  Guía para vendedores · Artículo 04
                </p>

                <h2 className="mt-5 text-2xl font-medium leading-snug transition-colors duration-300 group-hover:text-[#1300FF] md:text-3xl">
                  ¿Qué documentos necesitás para vender una propiedad en Uruguay?
                </h2>

                <p className="mt-4 leading-7 text-[#4E535B]">
                  Conocé qué documentación conviene preparar antes de vender
                  una casa, apartamento o terreno y cómo anticiparte a posibles
                  demoras durante la operación.
                </p>

                <span className="mt-7 inline-flex w-fit items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]">
                  Leer artículo
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    →
                  </span>
                </span>
              </div>

              <div className="relative min-h-[240px] overflow-hidden bg-[#E8E0D2] md:order-2 md:min-h-[360px]">
                <img
                  src="/noticias/Dise%C3%B1o%20sin%20t%C3%ADtulo.png"
                  alt="Documentación necesaria para vender una propiedad"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </Link>


          {/* Cierre */}
          <div className="mt-12 border-t border-[#DEDAD1] pt-8">
            <p className="max-w-2xl text-base leading-7 text-[#4E535B]">
              Cada semana compartimos un nuevo tema para ayudarte a conocer
              mejor el mercado inmobiliario y tomar decisiones informadas.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}