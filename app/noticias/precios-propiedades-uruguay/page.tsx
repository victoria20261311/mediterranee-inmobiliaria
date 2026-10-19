import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "¿Qué está pasando con los precios de las propiedades? | Mediterranée",
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
            ← Volver a Noticias
          </Link>

          <header className="mt-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1300FF]">
              Mercado inmobiliario · Mediterranée
            </p>
            

            <h1 className="mt-4 text-3xl font-semibold leading-tight text-[#1300FF] md:text-4xl">
              ¿Qué está pasando con los precios de las propiedades en tu ciudad?
            </h1>

            <div className="mt-5 h-1 w-16 rounded-full bg-[#1300FF]" />

            <p className="mt-5 text-base font-medium leading-7 text-[#4E535B]">
              Antes de vender, es importante conocer el mercado,
              entender qué valoran los compradores y establecer
              un precio acorde con las características del inmueble.
            </p>
          </header>

          {/* Fotografía principal */}
          <figure className="mt-8 overflow-hidden rounded-3xl border border-[#DEDAD1] bg-[#E8E0D2] shadow-sm">
            <img
              src="/noticias/1.png?v=2"
              alt="Propiedad destacada de Mediterranée Servicios Inmobiliarios"
              className="max-h-[460px] min-h-[240px] w-full object-cover md:min-h-[340px]"
            />
          </figure>

          {/* Contenido */}
          <div className="mt-10 space-y-6 text-[15px] font-medium leading-7 text-[#4E535B]">
            <p>
              ¿Estás pensando en vender tu casa, apartamento o
              terreno? Una de las primeras preguntas que seguramente
              te hacés es: ¿cuánto vale hoy mi propiedad?
            </p>

            <p>
              El mercado inmobiliario no tiene un único precio.
              El valor de cada inmueble depende de su ubicación,
              sus características, su estado de conservación y
              la demanda de compradores para ese tipo de propiedad.
            </p>

            <h2 className="pt-3 text-xl font-semibold leading-snug text-[#1300FF] md:text-2xl">
              ¿Cómo evolucionan los precios?
            </h2>

            <p>
              Para comprender la evolución del mercado, conviene
              consultar datos actualizados y distinguir entre los
              precios publicados en los avisos y los valores de las
              compraventas efectivamente registradas.
            </p>

            <p>
              Los indicadores generales ayudan a entender el contexto,
              pero no determinan cuánto vale una vivienda concreta.
              Para eso, es necesario estudiar su ubicación, superficie,
              estado y las referencias disponibles de inmuebles comparables.
            </p>

            <h2 className="pt-3 text-xl font-semibold leading-snug text-[#1300FF] md:text-2xl">
              ¿Qué sucede en Shangrilá y Ciudad de la Costa?
            </h2>

            <p>
              En Ciudad de la Costa conviven mercados diferentes:
              casas con jardín, apartamentos, terrenos y propiedades
              con características particulares.
            </p>

            <p>
              La cercanía a los servicios, la conectividad, el estado
              de la vivienda, el tamaño del terreno y las posibilidades
              de uso pueden influir en el interés de los compradores.
              Los valores de una zona no necesariamente evolucionan
              al mismo ritmo que los de otra.
            </p>

            <h2 className="pt-3 text-xl font-semibold leading-snug text-[#1300FF] md:text-2xl">
              Tres factores que influyen en el valor
            </h2>

            <div>
              <h3 className="text-base font-bold text-[#1300FF]">
                1. La ubicación
              </h3>
              <p>
                La zona, los accesos, los servicios cercanos y el
                entorno son elementos importantes al evaluar un inmueble.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1300FF]">
                2. El estado y las características
              </h3>
              <p>
                La distribución de los ambientes, la superficie,
                el mantenimiento y las mejoras realizadas pueden
                influir en la valoración y en el interés de los compradores.
              </p>
            </div>

            <div>
              <h3 className="text-base font-bold text-[#1300FF]">
                3. El precio de publicación
              </h3>
              <p>
                Un precio adecuado ayuda a llegar a compradores
                cuyo presupuesto y necesidades coinciden con lo
                que ofrece el inmueble. Un precio demasiado elevado
                puede reducir las consultas.
              </p>
            </div>

            <h2 className="pt-3 text-xl font-semibold leading-snug text-[#1300FF] md:text-2xl">
              ¿Cómo saber cuánto vale realmente tu propiedad?
            </h2>

            <p>
              No alcanza con mirar cuánto piden otros propietarios
              por viviendas similares: los precios publicados son
              expectativas de venta, no necesariamente los valores
              finales de las operaciones.
            </p>

            <p>
              Una valoración profesional considera las características
              concretas del inmueble, las referencias disponibles y
              las condiciones del mercado al momento de vender.
            </p>
          </div>

          {/* Contacto */}
          <section className="mt-12 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-6 shadow-sm md:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1300FF]">
              Estamos para ayudarte
            </p>

            <h2 className="mt-3 text-2xl font-semibold leading-snug text-[#1300FF]">
              ¿Estás pensando en vender?
            </h2>

            <p className="mt-3 text-[15px] font-medium leading-7 text-[#4E535B]">
              En Mediterranée Servicios Inmobiliarios te ayudamos
              a evaluar tu propiedad y a definir una estrategia de
              venta acorde con sus características y el mercado de la zona.
            </p>

            <a
              href="https://wa.me/59894239220?text=Hola%2C%20quisiera%20consultar%20por%20la%20valoraci%C3%B3n%20de%20mi%20propiedad."
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1300FF] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#0D00B8]"
            >
              Consultar por WhatsApp
            </a>

            <p className="mt-4 text-sm font-medium leading-6 text-[#4E535B]">
              Mediterranée Servicios Inmobiliarios
              <br />
              Shangrilá · Ciudad de la Costa · Montevideo
              <br />
              094 239 220 · 2682 7157
            </p>
          </section>

          <p className="mt-7 text-xs leading-5 text-[#4E535B]">
            La información de este artículo es orientativa.
            El valor de cada propiedad debe analizarse según sus
            características y los datos disponibles al momento
            de la valoración.
          </p>

          <Link
            href="/noticias"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#1300FF] transition hover:text-[#0D00B8]"
          >
            ← Volver a todas las noticias
          </Link>
        </article>
      </main>

      <Footer />
    </>
  );
}
