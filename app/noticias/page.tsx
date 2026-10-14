import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "Noticias inmobiliarias | Mediterranée",
  description:
    "Noticias, consejos y actualidad del mercado inmobiliario en Shangrilá, Ciudad de la Costa y Montevideo.",
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

          <h1 className="max-w-3xl text-4xl font-light leading-tight md:text-6xl">
            Noticias y consejos
            <span className="mt-2 block font-medium text-[#1300FF]">
              para decidir mejor.
            </span>
          </h1>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-6 max-w-2xl text-base leading-8 text-[#4E535B] md:text-lg">
            Un tema nuevo cada semana sobre el mercado inmobiliario,
            la compra y venta de propiedades y las decisiones que
            importan a propietarios y compradores.
          </p>
        </section>

        {/* Artículo destacado */}
        <section className="mx-auto max-w-7xl px-6 pb-24 md:px-10">
          <Link
            href="/noticias/precios-propiedades-uruguay"
            className="group grid overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] shadow-sm transition duration-300 hover:border-[#1300FF]/30 hover:shadow-xl md:grid-cols-2"
          >
            {/* Fotografía */}
            <div className="relative min-h-[280px] overflow-hidden bg-[#E8E0D2] md:min-h-[460px]">
              <img
                src="/noticias/Diseño%20sin%20título.png"
                alt="Propiedad destacada de Mediterranée Servicios Inmobiliarios"
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute left-5 top-5 rounded-full border border-white/60 bg-[#FAF8F3]/95 px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#1300FF]">
                Artículo destacado
              </div>
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-center p-7 md:p-12 lg:p-14">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
                Mercado inmobiliario · Artículo 01
              </p>

              <h2 className="mt-5 text-3xl font-medium leading-snug transition-colors duration-300 group-hover:text-[#1300FF] md:text-4xl">
                ¿Qué está pasando con los precios de las propiedades?
              </h2>

              <p className="mt-5 leading-7 text-[#4E535B]">
                Qué factores influyen en el valor de una propiedad
                y qué conviene analizar antes de ponerla a la venta
                en Shangrilá, Ciudad de la Costa y Montevideo.
              </p>

              <span className="mt-8 inline-flex w-fit items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]">
                Leer artículo
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-2"
                >
                  →
                </span>
              </span>
            </div>
          </Link>

          {/* Cierre */}
          <div className="mt-16 border-t border-[#DEDAD1] pt-8">
            <p className="text-sm leading-7 text-[#4E535B]">
              Cada semana, una nueva mirada sobre el mercado
              inmobiliario de Shangrilá, Ciudad de la Costa y
              Montevideo.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}