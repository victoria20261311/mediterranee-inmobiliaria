import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "¿Qué está pasando con los precios de las propiedades? | Mediterranée",
  description:
    "Conocé los factores que influyen en el valor de una propiedad en Shangrilá, Ciudad de la Costa y Montevideo.",
};

export default function ArticuloPreciosPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F3EEE6] text-[#20232A]">
        <article className="mx-auto max-w-4xl px-6 py-14 md:px-10 md:py-20">
          <Link
            href="/noticias"
            className="text-sm font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
          >
            ← Volver a noticias
          </Link>

          <header className="mt-12 border-b border-[#DEDAD1] pb-10">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-[#1300FF]">
              Mercado inmobiliario · Artículo 01
            </p>

            <h1 className="text-3xl font-light leading-tight md:text-5xl">
              ¿Qué está pasando con los precios de las propiedades?
            </h1>

            <p className="mt-6 text-sm text-[#6B6B6B]">
              Mediterranée Servicios Inmobiliarios · 16 de octubre de 2026
            </p>

            <p className="mt-6 text-lg leading-8 text-[#4E535B]">
              Conocer el valor de una propiedad es uno de los primeros pasos
              para tomar una buena decisión inmobiliaria. Pero ¿cómo saber
              cuánto vale realmente una casa, un apartamento o un terreno?
            </p>
          </header>

          <div className="space-y-10 py-10 text-base leading-8 text-[#4E535B] md:text-lg">
            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                El precio no depende de un solo factor
              </h2>

              <p>
                El valor de una propiedad está relacionado con su ubicación,
                superficie, estado de conservación, distribución, orientación
                y características. También influyen los servicios cercanos,
                la conectividad, la demanda y la oferta de inmuebles similares.
              </p>

              <p className="mt-4">
                En zonas como Shangrilá y Ciudad de la Costa, las características
                de cada barrio y la cercanía a avenidas, comercios, centros
                educativos y espacios verdes pueden marcar diferencias
                importantes entre propiedades aparentemente similares.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                ¿Cómo saber si una propiedad está bien valorada?
              </h2>

              <p>
                Una buena referencia es comparar inmuebles con características
                semejantes: ubicación, superficie, estado, comodidades y tipo
                de construcción. Comparar solamente el precio total puede
                llevar a conclusiones equivocadas.
              </p>

              <p className="mt-4">
                También es importante distinguir entre el precio publicado y
                el precio final de una operación. El valor anunciado expresa
                la expectativa del vendedor, pero no garantiza que ese sea el
                importe al que se concretará la compraventa.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                ¿Qué pasa cuando el precio es demasiado alto?
              </h2>

              <p>
                Una propiedad publicada por encima de los valores de referencia
                puede recibir menos consultas, permanecer más tiempo en el
                mercado y requerir ajustes posteriores. Esto no significa que
                deba venderse al precio más bajo, sino que conviene establecer
                una estrategia realista desde el comienzo.
              </p>

              <p className="mt-4">
                Una valoración adecuada permite presentar mejor el inmueble,
                orientar las negociaciones y evaluar las ofertas con criterios
                claros.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                ¿Es un buen momento para vender?
              </h2>

              <p>
                La respuesta depende de la propiedad, la zona, las condiciones
                del mercado y las necesidades del propietario. No existe un
                único momento ideal para todos los inmuebles.
              </p>

              <p className="mt-4">
                Antes de publicar, conviene revisar la documentación, preparar
                la propiedad para las visitas y definir un precio de salida
                respaldado por referencias de mercado.
              </p>
            </section>

            <section className="rounded-2xl border border-[#DEDAD1] bg-[#FAF8F3] p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                Una decisión informada empieza con una buena valoración
              </h2>

              <p>
                Cada propiedad tiene características propias. Analizar su
                situación particular permite definir mejor el precio, la
                estrategia de publicación y los próximos pasos.
              </p>

              <p className="mt-4">
                En Mediterranée Servicios Inmobiliarios acompañamos a
                propietarios y compradores en sus decisiones inmobiliarias
                en Shangrilá, Ciudad de la Costa y Montevideo.
              </p>

              <Link
                href="/#contacto"
                className="mt-6 inline-flex items-center gap-3 border-b-2 border-[#1300FF] pb-2 font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
              >
                Consultanos
                <span aria-hidden="true">→</span>
              </Link>
            </section>
          </div>

          <div className="border-t border-[#DEDAD1] pt-8">
            <Link
              href="/noticias"
              className="text-sm font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
            >
              ← Volver a todas las noticias
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}