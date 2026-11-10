
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata = {
  title:
    "¿Qué le corresponde al inquilino y al propietario? | Mediterranée",
  description:
    "Conocé las responsabilidades del inquilino y del propietario en un alquiler en Uruguay: reparaciones, gastos, mantenimiento y uso de la vivienda.",
};

export default function InquilinoPropietarioPage() {
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
            Guía para propietarios e inquilinos · Artículo 06
          </p>

          <h1 className="mt-5 text-3xl font-light leading-tight md:text-5xl">
            ¿Qué le corresponde al inquilino y qué al propietario?
            <span className="mt-3 block font-medium">
              Derechos y responsabilidades en un alquiler
            </span>
          </h1>

          <div className="mt-7 h-1 w-20 rounded-full bg-[#1300FF]" />

          <p className="mt-8 text-lg leading-8 text-[#4E535B]">
            Al momento de alquilar una propiedad, una de las dudas más
            frecuentes es saber quién debe hacerse cargo de los gastos,
            las reparaciones y el mantenimiento de la vivienda.
          </p>

          <p className="mt-5 leading-8 text-[#4E535B]">
            Tanto el propietario como el inquilino tienen derechos y
            obligaciones que es importante conocer para evitar malos
            entendidos y mantener una buena relación durante todo el contrato.
          </p>

          <p className="mt-5 leading-8 text-[#4E535B]">
            En Uruguay, estas responsabilidades se encuentran reguladas
            por la normativa vigente y por las condiciones establecidas
            en cada contrato de arrendamiento. También es importante
            considerar el régimen de alquiler que corresponda.
          </p>

          <div className="mt-12 space-y-10">
            <section>
              <h2 className="text-2xl font-medium">
                1. ¿Qué le corresponde al propietario?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                En términos generales, el propietario debe entregar
                la propiedad en condiciones adecuadas para el uso
                acordado y mantenerla en condiciones de servir para
                el destino por el que fue alquilada.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Entre sus principales responsabilidades se encuentran:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-[#4E535B]">
                <li>
                  <strong>Reparaciones necesarias:</strong> solucionar
                  problemas que afecten la habitabilidad y el uso normal
                  de la propiedad.
                </li>
                <li>
                  <strong>Instalaciones:</strong> atender desperfectos
                  en cañerías, instalaciones eléctricas y otros sistemas
                  cuando no sean consecuencia del mal uso del inquilino.
                </li>
                <li>
                  <strong>Problemas estructurales:</strong> hacerse cargo
                  de reparaciones por filtraciones, humedades de origen
                  constructivo y deterioros que no sean imputables al
                  inquilino.
                </li>
                <li>
                  <strong>Defectos preexistentes:</strong> atender
                  problemas que ya existían y que afectan las condiciones
                  de uso o habitabilidad de la vivienda.
                </li>
                <li>
                  <strong>Entrega de la propiedad:</strong> proporcionar
                  el inmueble en las condiciones acordadas y con los
                  servicios y accesorios correspondientes.
                </li>
              </ul>

              <p className="mt-4 leading-8 text-[#4E535B]">
                El propietario también debe respetar el uso y goce
                de la vivienda por parte del inquilino durante la
                vigencia del contrato.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                2. ¿Qué le corresponde al inquilino?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                El inquilino tiene la responsabilidad de cuidar la
                propiedad y utilizarla correctamente durante el período
                de alquiler.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Entre sus principales obligaciones se encuentran:
              </p>

              <ul className="mt-4 list-disc space-y-3 pl-6 leading-8 text-[#4E535B]">
                <li>
                  <strong>Pago del alquiler:</strong> abonar puntualmente
                  el importe y en las condiciones establecidas en el contrato.
                </li>
                <li>
                  <strong>Servicios y consumos:</strong> hacerse cargo
                  de UTE, OSE y otros servicios que correspondan según
                  el contrato y el régimen aplicable.
                </li>
                <li>
                  <strong>Gastos comunes y servicios accesorios:</strong>{" "}
                  abonar los conceptos que contractualmente y según
                  el régimen correspondan al inquilino.
                </li>
                <li>
                  <strong>Cuidado de la vivienda:</strong> mantener
                  los ambientes limpios y en buenas condiciones de
                  conservación.
                </li>
                <li>
                  <strong>Reparaciones locativas:</strong> hacerse
                  cargo de los desperfectos propios del uso que sean
                  de su responsabilidad.
                </li>
                <li>
                  <strong>Uso adecuado:</strong> destinar el inmueble
                  al uso establecido en el contrato y respetar las
                  condiciones acordadas.
                </li>
                <li>
                  <strong>Comunicación de problemas:</strong> informar
                  al propietario o a la inmobiliaria cuando surjan
                  desperfectos que requieran atención.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                3. ¿Quién debe hacerse cargo de las reparaciones?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Esta es una de las cuestiones que más consultas genera.
                No todas las reparaciones corresponden al propietario
                ni todas son responsabilidad del inquilino.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                La diferencia está, principalmente, en el origen del
                desperfecto y en si se trata de una reparación necesaria
                o de una reparación locativa.
              </p>

              <div className="mt-6 rounded-2xl border border-[#DEDAD1] bg-[#FAF8F3] p-6">
                <h3 className="text-lg font-medium">
                  Algunos ejemplos prácticos
                </h3>

                <ul className="mt-4 space-y-4 leading-7 text-[#4E535B]">
                  <li>
                    <strong>Filtración por el techo:</strong> si se debe
                    a un problema de impermeabilización o construcción,
                    generalmente corresponde al propietario.
                  </li>
                  <li>
                    <strong>Vidrio roto por un accidente:</strong> si
                    el daño fue ocasionado por el inquilino o por
                    personas bajo su responsabilidad, puede corresponderle
                    asumir la reparación.
                  </li>
                  <li>
                    <strong>Cañería deteriorada por antigüedad:</strong>{" "}
                    generalmente corresponde al propietario.
                  </li>
                  <li>
                    <strong>Obstrucción por uso inadecuado:</strong>{" "}
                    puede corresponder al inquilino hacerse cargo
                    de la reparación.
                  </li>
                  <li>
                    <strong>Desgaste normal:</strong> el deterioro
                    producido por el paso del tiempo y el uso legítimo
                    no debe confundirse con un daño ocasionado por
                    el inquilino.
                  </li>
                </ul>
              </div>

              <p className="mt-5 leading-8 text-[#4E535B]">
                Por eso, antes de determinar quién debe pagar una
                reparación, es importante identificar la causa
                del problema y revisar las condiciones del contrato.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Si surge una reparación importante, lo recomendable
                es comunicarla cuanto antes y dejar constancia
                por escrito. No es conveniente realizar gastos
                importantes ni descontarlos del alquiler sin
                contar previamente con el acuerdo o asesoramiento
                correspondiente.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                4. ¿Qué gastos debe pagar el inquilino y cuáles el propietario?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Además del alquiler mensual, pueden existir otros
                gastos asociados al uso y mantenimiento de la propiedad.
                Es importante distinguir entre los consumos y servicios
                vinculados a la ocupación y los tributos relacionados
                con la titularidad del inmueble.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Según el contrato y el régimen aplicable, al inquilino
                pueden corresponderle:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4E535B]">
                <li>Consumo de energía eléctrica (UTE).</li>
                <li>Consumo de agua (OSE).</li>
                <li>Gastos comunes, cuando corresponda.</li>
                <li>Tarifa de saneamiento y tributos domiciliarios, según corresponda.</li>
                <li>Otros servicios accesorios que estén a su cargo.</li>
              </ul>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Por su parte, los tributos vinculados a la propiedad,
                como la Contribución Inmobiliaria y el Impuesto de
                Primaria, deben analizarse según su naturaleza,
                el régimen de arrendamiento y las condiciones
                contractuales aplicables.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Antes de firmar, es recomendable consultar qué
                conceptos están incluidos en el alquiler y cuáles
                se pagan por separado. Así se puede conocer el
                costo mensual real de la vivienda.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                5. ¿Puede el inquilino realizar modificaciones en la propiedad?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Si el inquilino desea pintar, modificar instalaciones,
                realizar reformas o incorporar mejoras, es importante
                contar previamente con la autorización expresa
                del propietario.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Lo recomendable es dejar cualquier autorización
                por escrito y establecer qué sucederá con esas
                mejoras al finalizar el contrato.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Realizar modificaciones sin autorización puede
                generar inconvenientes al momento de entregar
                la propiedad.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                6. ¿Para qué se puede utilizar una propiedad alquilada?
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                El inmueble debe utilizarse respetando el destino
                establecido en el contrato de arrendamiento.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Por ejemplo, si se alquila una vivienda para uso
                residencial, no debe suponerse que está permitido
                utilizarla como local comercial, oficina o alojamiento
                turístico.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                También es importante revisar las condiciones
                relativas al subarrendamiento, la convivencia,
                la tenencia de mascotas y cualquier otra condición
                particular que se haya establecido.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Si se desea cambiar el destino o realizar una
                actividad diferente, lo conveniente es consultar
                previamente y contar con las autorizaciones
                que correspondan.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-medium">
                7. La importancia del inventario y del estado de entrega
              </h2>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Un contrato claro y un inventario detallado son
                herramientas fundamentales para proteger a ambas
                partes.
              </p>

              <p className="mt-3 leading-8 text-[#4E535B]">
                Antes de ingresar, es recomendable verificar
                y dejar constancia del estado de:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6 leading-8 text-[#4E535B]">
                <li>Paredes, techos y pisos.</li>
                <li>Puertas y ventanas.</li>
                <li>Griferías y sanitarios.</li>
                <li>Instalaciones eléctricas.</li>
                <li>Equipamiento y electrodomésticos, si los hubiera.</li>
                <li>Pintura y estado general de los ambientes.</li>
              </ul>

              <p className="mt-4 leading-8 text-[#4E535B]">
                Dejar constancia del estado inicial de la propiedad,
                incluso mediante fotografías, ayuda a evitar
                diferencias al finalizar el alquiler.
              </p>
            </section>
          </div>

          <section className="mt-14 rounded-3xl border border-[#DEDAD1] bg-[#FAF8F3] p-7 md:p-10">
            <h2 className="text-2xl font-medium">
              Alquilar con tranquilidad es conocer las responsabilidades
            </h2>

            <p className="mt-5 leading-8 text-[#4E535B]">
              Una relación de alquiler funciona mejor cuando ambas
              partes conocen sus obligaciones, mantienen una
              comunicación fluida y respetan los acuerdos establecidos.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              Para el propietario, significa cuidar su patrimonio.
              Para el inquilino, disfrutar de la vivienda con
              tranquilidad y responsabilidad.
            </p>

            <p className="mt-4 leading-8 text-[#4E535B]">
              En Mediterranée Servicios Inmobiliarios creemos
              que un buen alquiler comienza con información clara,
              asesoramiento y acuerdos transparentes.
            </p>

            <h3 className="mt-8 text-xl font-medium">
              ¿Tenés dudas sobre tus responsabilidades como propietario
              o inquilino?
            </h3>

            <p className="mt-3 leading-7 text-[#4E535B]">
              Contactanos. Estamos para asesorarte y acompañarte
              durante el proceso de alquiler.
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

          <section className="mt-10 border-t border-[#DEDAD1] pt-7">
            <p className="text-xs uppercase tracking-[0.15em] text-[#4E535B]">
              Información de referencia
            </p>

            <p className="mt-3 text-sm leading-7 text-[#4E535B]">
              Este artículo es de carácter informativo. Las
              responsabilidades concretas pueden variar según
              el régimen de arrendamiento y las condiciones
              del contrato. Para situaciones particulares,
              se recomienda consultar con un profesional.
            </p>

            <ul className="mt-4 space-y-2 text-sm text-[#1300FF]">
              <li>
                <a
                  href="https://www.gub.uy/ministerio-economia-finanzas/garantia-de-alquileres/derechos-obligaciones-del-inquilino"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  MEF – Derechos y obligaciones del inquilino ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.gub.uy/ministerio-economia-finanzas/garantia-de-alquileres/propietarios/derechos-obligaciones-del-arrendador"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  MEF – Derechos y obligaciones del propietario ↗
                </a>
              </li>
              <li>
                <a
                  href="https://www.impo.com.uy/bases/codigo-civil/16603-1994"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-70"
                >
                  IMPO – Código Civil uruguayo ↗
                </a>
              </li>
            </ul>
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
