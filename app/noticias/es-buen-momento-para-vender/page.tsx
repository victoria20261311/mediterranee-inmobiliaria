
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "¿Es un buen momento para vender una propiedad? | Mediterranée",
  description:
    "Descubrí qué factores conviene analizar antes de vender una propiedad en Shangrilá, Ciudad de la Costa o Montevideo.",
};

export default function ArticuloVentaPage() {
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
              Mercado inmobiliario · Artículo 02
            </p>

            <h1 className="text-3xl font-light leading-tight md:text-5xl">
              ¿Es un buen momento para vender una propiedad?
            </h1>

            <p className="mt-6 text-sm text-[#6B6B6B]">
              Mediterranée Servicios Inmobiliarios · 19 de octubre de 2026
            </p>

            <p className="mt-6 text-lg leading-8 text-[#4E535B]">
              Decidir cuándo vender una propiedad es tan importante como
              establecer su precio. El momento adecuado depende de las
              características del inmueble, las necesidades del propietario
              y las condiciones del mercado.
            </p>
          </header>

          <div className="space-y-10 py-10 text-base leading-8 text-[#4E535B] md:text-lg">
            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                No existe un único momento ideal para vender
              </h2>

              <p>
                Cada operación inmobiliaria es diferente. Para algunos
                propietarios, vender puede ser parte de un cambio de vivienda;
                para otros, puede responder a una inversión, una mudanza o
                la necesidad de reorganizar su patrimonio.
              </p>

              <p className="mt-4">
                Por eso, antes de tomar una decisión, conviene analizar
                tanto la situación personal como la demanda de propiedades
                similares en la zona.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                1. Conocer el valor real de la propiedad
              </h2>

              <p>
                El primer paso es establecer un precio de venta razonable.
                Para hacerlo, es importante considerar la ubicación, los
                metros cuadrados, el estado de conservación, las comodidades
                y las referencias de inmuebles comparables.
              </p>

              <p className="mt-4">
                En Shangrilá, Ciudad de la Costa y Montevideo, las diferencias
                entre barrios y tipos de propiedad pueden ser importantes.
                Una valoración individual ayuda a definir una estrategia
                acorde con las características de cada inmueble.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                2. Analizar la oferta y la demanda
              </h2>

              <p>
                Observar cuántas propiedades similares están publicadas,
                cómo se presentan y qué características ofrecen permite
                comprender mejor el contexto en el que competirá tu inmueble.
              </p>

              <p className="mt-4">
                También es importante recordar que el precio anunciado no
                necesariamente coincide con el precio final de una venta.
                Las consultas recibidas y las ofertas concretas aportan
                información útil para evaluar la estrategia.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                3. Preparar la propiedad antes de publicarla
              </h2>

              <p>
                La presentación influye en la primera impresión. Ordenar los
                ambientes, mejorar la iluminación, resolver pequeños detalles
                de mantenimiento y contar con fotografías claras puede ayudar
                a mostrar mejor los atributos del inmueble.
              </p>

              <p className="mt-4">
                No siempre es necesario realizar grandes reformas. Conviene
                priorizar las mejoras que realmente aporten valor a la
                presentación de la propiedad.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                4. Tener la documentación preparada
              </h2>

              <p>
                Antes de comenzar las negociaciones, es conveniente consultar
                qué documentación será necesaria para la operación y verificar
                que la información del inmueble esté actualizada.
              </p>

              <p className="mt-4">
                Contar con asesoramiento profesional desde el comienzo ayuda
                a anticipar posibles dificultades y a organizar los próximos
                pasos de la venta.
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                5. Definir una estrategia y un plazo realista
              </h2>

              <p>
                Si necesitás vender antes de comprar otra propiedad o tenés
                una fecha determinada para mudarte, ese plazo debe formar
                parte de la planificación.
              </p>

              <p className="mt-4">
                Es recomendable establecer desde el inicio cómo se evaluarán
                las ofertas, qué margen de negociación existe y cuándo
                conviene revisar el precio o la estrategia de publicación
                si los resultados no son los esperados.
              </p>
            </section>

            <section className="rounded-2xl border border-[#DEDAD1] bg-[#FAF8F3] p-6 md:p-8">
              <h2 className="mb-4 text-2xl font-medium text-[#20232A]">
                Una buena decisión empieza con información
              </h2>

              <p>
                Vender en el momento adecuado no significa esperar una fecha
                perfecta. Significa conocer el valor de la propiedad, entender
                el mercado, preparar el inmueble y contar con una estrategia
                coherente con tus objetivos.
              </p>

              <p className="mt-4">
                En Mediterranée Servicios Inmobiliarios te acompañamos en
                el análisis y la planificación de la venta de tu propiedad
                en Shangrilá, Ciudad de la Costa y Montevideo.
              </p>

              <Link
                href="/#contacto"
                className="mt-6 inline-flex items-center gap-3 border-b-2 border-[#1300FF] pb-2 font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
              >
                Consultanos sobre tu propiedad
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
