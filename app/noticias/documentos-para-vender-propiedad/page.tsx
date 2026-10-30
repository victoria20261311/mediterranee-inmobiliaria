
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Qué documentos necesitás para vender una propiedad | Mediterranée",
  description:
    "Conocé qué documentación conviene preparar antes de vender una casa, apartamento o terreno en Uruguay.",
};

export default function DocumentosParaVenderPage() {
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
            Guía para vendedores · Artículo 04
          </p>

          <h1 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
            ¿Qué documentos necesitás para vender una propiedad en Uruguay?
          </h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-8 text-lg leading-8 text-[#4E535B]">
            Vender una propiedad no consiste solamente en encontrar un
            comprador y acordar un precio. También es importante tener
            preparada la documentación necesaria para que la operación
            pueda avanzar sin demoras innecesarias.
          </p>

          <p className="mt-5 leading-8 text-[#4E535B]">
            Si estás pensando en vender tu casa, apartamento o terreno,
            conocer qué documentos pueden solicitarte es un buen primer paso.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-medium">
                1. Título de propiedad
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Es uno de los documentos fundamentales. Permite acreditar
                la titularidad del inmueble y sirve de base para el estudio
                de títulos que realizará el escribano interviniente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                2. Documentación de los propietarios
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Es necesario contar con la documentación de identidad de
                quienes figuran como titulares.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Si existen varios propietarios, deberán contemplarse las
                particularidades de cada caso y su participación en la
                operación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                3. Información catastral y registral
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Es importante contar con los datos que permitan identificar
                correctamente el inmueble, como el padrón y la información
                catastral correspondiente.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                El escribano podrá solicitar certificados y realizar las
                verificaciones registrales necesarias.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                4. Contribución inmobiliaria y tributos
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                Conviene tener identificados los tributos y gastos asociados
                al inmueble, así como verificar si existen deudas pendientes.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Esto ayuda a anticipar posibles observaciones durante el
                proceso de compraventa.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                5. Planos y documentación de construcciones
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                En casas, ampliaciones o terrenos con construcciones, puede
                ser necesario revisar planos y antecedentes municipales.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Si se realizaron reformas o ampliaciones, es conveniente
                consultar si están debidamente regularizadas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                6. Cada propiedad tiene sus particularidades
              </h2>
              <p className="mt-4 leading-8 text-[#4E535B]">
                No todas las operaciones requieren exactamente la misma
                documentación.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                La situación del inmueble, la titularidad, los antecedentes
                y las características de la compraventa pueden determinar
                qué documentación adicional será necesaria.
              </p>
              <p className="mt-3 leading-8 text-[#4E535B]">
                Por eso, es recomendable consultar con un escribano antes
                de avanzar.
              </p>
            </section>
          </div>

          <section className="mt-14 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-7 md:p-10">
            <h2 className="text-2xl font-medium">
              Prepararse antes de publicar también es vender mejor
            </h2>

            <p className="mt-5 leading-8 text-[#4E535B]">
              Tener la documentación organizada permite responder con
              mayor seguridad las consultas de los interesados y anticipar
              posibles dificultades durante la negociación.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              En Mediterranée Servicios Inmobiliarios acompañamos a los
              propietarios durante el proceso de venta, desde la valoración
              inicial hasta las distintas etapas de la operación.
            </p>

            <h3 className="mt-8 text-xl font-medium">
              ¿Estás pensando en vender tu propiedad?
            </h3>

            <p className="mt-3 leading-7 text-[#4E535B]">
              Conversemos. Podemos orientarte sobre los primeros pasos
              para comenzar.
            </p>

            <p className="mt-6 text-sm font-semibold text-[#3F5870]">
              Mediterranée Servicios Inmobiliarios
            </p>
            <p className="mt-1 text-sm text-[#4E535B]">
              Shangrilá · Ciudad de la Costa · Montevideo
            </p>
            <p className="mt-2 text-sm text-[#4E535B]">
              Venta · Alquiler · Administración · Tasaciones
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
