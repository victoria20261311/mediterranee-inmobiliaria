import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "7 tips para preparar tu casa antes de ponerla en venta | Mediterranée",
  description:
    "Descubrí siete consejos prácticos para preparar tu casa antes de venderla en Shangrilá, Ciudad de la Costa o Montevideo.",
};

const consejos = [
  {
    numero: "01",
    titulo: "Ordená y despejá los ambientes",
    texto:
      "Retirá los objetos que ocupan espacio innecesario y dejá a la vista las dimensiones de cada ambiente. Una casa ordenada permite imaginar mejor sus posibilidades.",
  },
  {
    numero: "02",
    titulo: "Hacé una limpieza profunda",
    texto:
      "Prestá atención a la cocina, los baños, las ventanas y los pisos. Una propiedad limpia transmite cuidado y ayuda a que la visita se concentre en sus cualidades.",
  },
  {
    numero: "03",
    titulo: "Repará los pequeños detalles",
    texto:
      "Revisá grifos que gotean, puertas que no cierran bien, lámparas quemadas y marcas visibles en las paredes. Resolver estos detalles puede mejorar la impresión general.",
  },
  {
    numero: "04",
    titulo: "Aprovechá la luz natural",
    texto:
      "Abrí las cortinas, limpiá las ventanas y encendé las luces de los espacios más oscuros. Una buena iluminación ayuda a mostrar mejor cada ambiente.",
  },
  {
    numero: "05",
    titulo: "Cuidá la entrada y los espacios exteriores",
    texto:
      "Si tenés jardín, patio, terraza o un acceso independiente, mantenelos limpios y prolijos. La primera impresión empieza antes de entrar a la casa.",
  },
  {
    numero: "06",
    titulo: "Prepará la casa para las fotografías",
    texto:
      "Antes de tomar fotografías, despejá las superficies, acomodá los muebles y evitá que los objetos personales sean el centro de atención. Las imágenes deben mostrar los espacios con claridad.",
  },
  {
    numero: "07",
    titulo: "Consultá antes de invertir en reformas",
    texto:
      "No todas las mejoras se recuperan en el precio de venta. Antes de realizar una reforma importante, consultá qué conviene priorizar según la propiedad, su estado y el público al que se dirige.",
  },
];

export default function PrepararCasaParaVenderPage() {
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

          <header className="mt-10 border-b border-[#DEDAD1] pb-10">
            <p className="text-xs uppercase tracking-[0.22em] text-[#1300FF]">
              Mercado inmobiliario · Artículo 03
            </p>

            <h1 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
              7 tips para preparar tu casa antes de ponerla en venta
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4E535B]">
              Pequeños detalles pueden cambiar la primera impresión de una
              propiedad. Antes de publicarla, descubrí qué podés hacer para
              mostrarla de la mejor manera sin gastar de más.
            </p>
          </header>

          <div className="mt-10 space-y-8">
            <p className="text-base leading-8 text-[#4E535B] md:text-lg">
              Vender una casa no empieza el día de la primera visita.
              Prepararla con tiempo ayuda a destacar sus cualidades, facilitar
              las recorridas y ofrecer una presentación más cuidada a quienes
              están buscando su próximo hogar.
            </p>

            {consejos.map((consejo) => (
              <section
                key={consejo.numero}
                className="border-b border-[#DEDAD1] pb-8"
              >
                <p className="text-sm font-semibold tracking-[0.2em] text-[#1300FF]">
                  {consejo.numero}
                </p>

                <h2 className="mt-3 text-xl font-medium md:text-2xl">
                  {consejo.titulo}
                </h2>

                <p className="mt-3 leading-7 text-[#4E535B]">
                  {consejo.texto}
                </p>
              </section>
            ))}
          </div>

          <section className="mt-12 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-7 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#1300FF]">
              ¿Estás pensando en vender?
            </p>

            <h2 className="mt-4 text-2xl font-medium leading-snug md:text-3xl">
              Cada propiedad necesita una estrategia propia.
            </h2>

            <p className="mt-4 leading-7 text-[#4E535B]">
              En Mediterranée te acompañamos para evaluar tu propiedad y
              preparar los próximos pasos de la venta en Shangrilá, Ciudad de
              la Costa y Montevideo.
            </p>

            <Link
              href="/#contacto"
              className="mt-7 inline-flex items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
            >
              Contactanos
              <span aria-hidden="true">→</span>
            </Link>
          </section>

          <div className="mt-10">
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