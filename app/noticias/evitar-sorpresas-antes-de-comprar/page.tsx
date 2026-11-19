
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Evitar sorpresas antes de comprar una propiedad | Mediterranée",
  description:
    "Qué revisar, qué preguntar y qué tener en cuenta antes de comprar una casa o apartamento en Uruguay.",
};

export default function EvitarSorpresasPage() {
  return (
    <>
      <Header />

      <main className="min-h-screen bg-[#F3EEE6] text-[#20232A]">
        <article className="mx-auto max-w-4xl px-6 pb-20 pt-20 md:px-10 md:pt-28">
          <Link
            href="/noticias"
            className="text-sm text-[#1300FF] transition hover:opacity-70"
          >
            ← Volver a noticias
          </Link>

          <p className="mt-10 text-xs uppercase tracking-[0.2em] text-[#1300FF]">
            Guía para compradores · Artículo 07
          </p>

          <h1 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
            Evitar sorpresas antes de comprar una propiedad
            <span className="mt-3 block font-medium">
              Qué revisar antes de tomar una decisión
            </span>
          </h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-8 text-lg leading-8 text-[#4E535B]">
            Comprar una casa o un apartamento es una decisión importante.
            La emoción de encontrar ese lugar que imaginamos como nuestro
            puede hacer que pasemos por alto algunos detalles que, más
            adelante, pueden convertirse en gastos, inconvenientes o
            preocupaciones.
          </p>

          <p className="mt-5 leading-8 text-[#4E535B]">
            Por eso, antes de tomar una decisión, es importante mirar más
            allá de la primera impresión y conocer realmente la propiedad
            que estamos por comprar.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-medium">
                1. Mirá más allá de lo estético
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Una propiedad puede lucir impecable y, sin embargo, tener
                problemas que no se detectan a simple vista. Prestá atención
                a paredes, techos, pisos y rincones donde puedan existir
                señales de humedad, filtraciones o reparaciones recientes.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Una pintura nueva no siempre significa que todo esté en
                buenas condiciones. Si observás manchas, olores a humedad
                o zonas recientemente reparadas, consultá cuál fue el motivo.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                2. Revisá las instalaciones
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Durante la visita, es recomendable comprobar el funcionamiento
                de canillas, desagües, puertas, ventanas, persianas y otros
                elementos de uso cotidiano.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                También es importante consultar sobre el estado de las
                instalaciones eléctricas y sanitarias, especialmente en
                propiedades con varios años de antigüedad. Si existen dudas,
                una revisión por parte de un técnico puede ayudar a conocer
                mejor su estado.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                3. Conocé los gastos que implica
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                El precio de compra no es el único aspecto económico a
                considerar. Es importante conocer los gastos asociados a
                la operación y, si se trata de un apartamento, consultar
                cuánto se paga de gastos comunes, qué incluyen y si existen
                obras o gastos extraordinarios previstos.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Tener esta información desde el principio permite evaluar
                mejor si la propiedad se adapta a tu presupuesto. Consultá
                también los tributos y servicios que correspondan al inmueble.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                4. Prestá atención a la ubicación y al entorno
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Visitá la zona, observá los accesos, los servicios, el tránsito
                y los ruidos. Si es posible, recorré el entorno en diferentes
                horarios.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                La ubicación no solo influye en el valor de la propiedad,
                sino también en la comodidad y calidad de vida que vas a tener.
                Considerá la cercanía a transporte, comercios, centros de
                estudio, espacios verdes y otros servicios que sean importantes
                para tu rutina.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                5. Preguntá por lo que no se ve
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                No tengas miedo de hacer preguntas. Consultá sobre reparaciones
                anteriores, antigüedad de determinadas instalaciones,
                ampliaciones realizadas y cualquier aspecto que te genere dudas.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Si hubo reformas o ampliaciones, preguntá si cuentan con los
                permisos y regularizaciones que correspondan. Cuanta más
                información tengas, más clara será tu decisión.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                6. Revisá la documentación antes de avanzar
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Antes de comprometer dinero o firmar una reserva, es fundamental
                que un escribano de tu confianza revise la documentación y la
                situación jurídica de la propiedad.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Este paso permite estudiar los títulos, verificar la situación
                registral y analizar los aspectos legales de la operación.
                También es conveniente consultar si existen deudas, afectaciones
                u otras circunstancias que deban considerarse antes de comprar.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                7. No te apures a decidir
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Encontrar una propiedad que te guste es importante, pero tomar
                una decisión informada lo es todavía más. Volver a visitarla,
                analizar los detalles y evaluar con tranquilidad cada aspecto
                puede ayudarte a evitar decisiones apresuradas.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Si algo no está claro, pedí la información necesaria antes de
                avanzar. Es preferible dedicar tiempo a resolver dudas que
                descubrir después un problema que pudo haberse detectado.
              </p>
            </section>
          </div>

          <section className="mt-14 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-7 md:p-10">
            <h2 className="text-2xl font-medium">
              Comprar con tranquilidad también es comprar bien
            </h2>

            <p className="mt-5 leading-8 text-[#4E535B]">
              Una buena compra no depende únicamente de encontrar una propiedad
              que te enamore. También depende de conocerla, entender lo que
              estás comprando y tener la seguridad de que se adapta a tus
              necesidades y posibilidades.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              En Mediterranée creemos que acompañar al comprador significa
              mucho más que mostrar propiedades: significa asesorarlo,
              responder sus dudas y ayudarlo a tomar decisiones con confianza.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              Porque encontrar tu lugar es importante. Y encontrarlo con
              tranquilidad, aún más.
            </p>

            <p className="mt-8 text-sm font-semibold text-[#3F5870]">
              Mediterranée Servicios Inmobiliarios
            </p>
            <p className="mt-1 text-sm text-[#4E535B]">
              Shangrilá · Ciudad de la Costa · Montevideo
            </p>
            <p className="mt-2 text-sm text-[#4E535B]">
              Venta · Alquiler · Administración · Tasaciones
            </p>
          </section>

          <section className="mt-10 border-t border-[#DEDAD1] pt-7">
            <p className="text-xs uppercase tracking-[0.15em] text-[#4E535B]">
              Información de referencia
            </p>
            <p className="mt-3 text-sm leading-7 text-[#4E535B]">
              Este artículo es de carácter informativo y no sustituye el
              asesoramiento técnico ni notarial. El estado de conservación,
              las instalaciones y la situación jurídica de cada inmueble
              deben analizarse de acuerdo con sus características particulares.
              Antes de concretar una compra, se recomienda realizar las
              consultas profesionales correspondientes.
            </p>
          </section>

          <div className="mt-12">
            <Link
              href="/noticias"
              className="inline-flex items-center gap-3 border-b-2 border-[#1300FF] pb-2 text-sm font-semibold text-[#1300FF]"
            >
              Volver a todas las noticias →
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
