
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title: "¿Cuánto cuesta vender una propiedad en Uruguay? | Mediterranée",
  description:
    "Conocé los principales gastos, impuestos y costos que debe considerar un propietario antes de vender su propiedad en Uruguay.",
};

export default function CostosVenderPropiedadPage() {
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
            Mercado inmobiliario · Artículo 05
          </p>

          <h1 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
            ¿Cuánto cuesta vender una propiedad en Uruguay?
          </h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-8 text-lg leading-8 text-[#4E535B]">
            Vender una propiedad implica mucho más que encontrar un comprador
            y acordar un precio. Antes de concretar una operación, es importante
            conocer los gastos e impuestos que pueden intervenir y calcular
            cuánto dinero recibirá finalmente el propietario.
          </p>

          <p className="mt-5 leading-8 text-[#4E535B]">
            Cada inmueble tiene sus particularidades y no todas las operaciones
            generan los mismos costos. Por eso, informarse con anticipación
            permite planificar mejor la venta y evitar sorpresas durante
            el proceso.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-medium">
                1. Comisión inmobiliaria
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Si la venta se realiza con intermediación inmobiliaria,
                es importante conocer desde el comienzo cuáles son los
                honorarios y las condiciones del servicio.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Como referencia, el arancel de la Cámara Inmobiliaria
                Uruguaya establece para las ventas una comisión del 3%
                sobre el precio de la operación para cada parte.
                A ese importe corresponde considerar el IVA.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Es recomendable dejar claramente acordados los honorarios
                antes de comenzar la comercialización.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                2. Impuesto a las Transmisiones Patrimoniales (ITP)
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                El ITP es uno de los impuestos que intervienen en las
                compraventas de inmuebles en Uruguay.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                En las operaciones a título oneroso, la tasa correspondiente
                al vendedor es del 2% y la del comprador también es del 2%.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Este impuesto se calcula sobre el valor real establecido
                por la Dirección Nacional de Catastro, actualizado de
                acuerdo con la variación del IPC según la normativa vigente.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Por eso, el importe no necesariamente coincide con el
                porcentaje aplicado al precio de venta.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                3. IRPF: impuesto por incremento patrimonial
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                En determinadas operaciones puede corresponder el pago
                de IRPF por el incremento patrimonial generado con la venta.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Su cálculo depende, entre otros factores, de:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4E535B]">
                <li>La fecha en que se adquirió la propiedad.</li>
                <li>El valor de adquisición.</li>
                <li>El precio de venta.</li>
                <li>Las mejoras realizadas y debidamente documentadas.</li>
                <li>El régimen de cálculo que corresponda.</li>
              </ul>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Para las personas físicas residentes, la tasa general del
                IRPF sobre la renta computable por incrementos patrimoniales
                es del 12%. Sin embargo, el impuesto no se calcula
                directamente sobre el precio total de venta.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                También existen situaciones particulares y posibles
                exoneraciones. Por eso, es importante consultar con
                un escribano o contador antes de cerrar la operación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                4. Certificados, tributos y documentación
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Para concretar una compraventa es necesario verificar
                la situación documental y tributaria del inmueble.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Según cada caso, puede ser necesario revisar:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4E535B]">
                <li>Contribución inmobiliaria.</li>
                <li>Impuesto de Primaria.</li>
                <li>Tributos municipales.</li>
                <li>Gastos comunes, cuando corresponda.</li>
                <li>Certificados registrales y catastrales.</li>
                <li>
                  Regularizaciones de construcciones o aportes ante BPS,
                  si corresponden.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Si existen deudas o situaciones pendientes, conviene
                identificarlas con anticipación para evitar demoras
                durante la operación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                5. Gastos notariales y asesoramiento
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                La compraventa requiere la intervención de profesionales
                que revisen la documentación y aseguren que la operación
                pueda concretarse correctamente.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Habitualmente, el comprador contrata al escribano que
                autoriza la escritura. El vendedor puede necesitar
                asesoramiento propio y afrontar gastos relacionados
                con certificados, documentación o regularizaciones.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                La distribución de determinados gastos puede depender
                de las condiciones acordadas y de las características
                de cada operación.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                6. ¿Cuánto dinero te queda después de vender?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Conocer el valor de mercado de una propiedad es importante,
                pero también lo es calcular el resultado neto que recibirá
                el propietario una vez descontados los gastos e impuestos
                correspondientes.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                No es lo mismo vender una propiedad adquirida recientemente
                que una comprada hace muchos años, ni una vivienda sin
                pendientes que otra que necesita regularizaciones.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Una estimación previa permite establecer expectativas
                realistas y tomar decisiones con mayor tranquilidad.
              </p>
            </section>
          </div>

          <section className="mt-14 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-7 md:p-10">
            <h2 className="text-2xl font-medium">
              Una venta bien planificada comienza con buena información
            </h2>

            <p className="mt-5 leading-8 text-[#4E535B]">
              Antes de publicar una propiedad, es conveniente conocer
              su valor de mercado y tener identificados los principales
              gastos que pueden intervenir en la operación.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              En Mediterranée Servicios Inmobiliarios acompañamos a los
              propietarios durante todo el proceso de venta, desde la
              valoración inicial hasta las distintas etapas de la operación.
            </p>

            <h3 className="mt-8 text-xl font-medium">
              ¿Estás pensando en vender tu propiedad?
            </h3>

            <p className="mt-3 leading-7 text-[#4E535B]">
              Contactanos. Podemos orientarte sobre el valor de mercado
              de tu propiedad y los aspectos que conviene considerar
              antes de comenzar.
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
