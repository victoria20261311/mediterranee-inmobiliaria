import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F3E7D3] text-gray-800">

      {/* HEADER */}

      <header className="flex items-center justify-between px-10 py-6 bg-white sticky top-0 z-50 shadow">

        <Image
          src="/images/Logo.jpg"
          alt="Mediterranée Servicios Inmobiliarios"
          width={180}
          height={80}
        />

        <nav className="space-x-6 text-[#1B4965] font-semibold">

          <a href="#inicio" className="hover:text-[#D8B384] transition">
            Inicio
          </a>

          <a href="#servicios" className="hover:text-[#D8B384] transition">
            Servicios
          </a>

          <a href="#propiedades" className="hover:text-[#D8B384] transition">
            Propiedades
          </a>

          <a href="#contacto" className="hover:text-[#D8B384] transition">
            Contacto
          </a>

        </nav>

      </header>


      {/* PORTADA */}

      <section
        id="inicio"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
        >

          <source
            src="/images/portada.mp4"
            type="video/mp4"
          />

        </video>


        <div className="absolute inset-0 bg-black/40"></div>


        <div className="relative z-10 text-center text-white px-6">

          <h1 className="text-5xl md:text-6xl font-bold">
            Tu lugar en la costa comienza aquí
          </h1>


          <p className="mt-6 text-xl">
            Mediterranée Servicios Inmobiliarios
          </p>


          <p>
            Shangrilá · Ciudad de la Costa · Montevideo
          </p>


          <a
            href="#propiedades"
            className="inline-block mt-10 bg-[#D8B384] text-white px-8 py-4 rounded-lg shadow-lg hover:bg-[#c79c62] transition"
          >
            Ver propiedades
          </a>


        </div>


      </section>



      {/* SERVICIOS */}

      <section
        id="servicios"
        className="py-20 px-6"
      >

        <h2 className="text-center text-4xl font-bold text-[#1B4965]">
          Nuestros servicios
        </h2>


        <p className="text-center mt-4">
          Administración · Ventas · Alquileres permanentes · Tasaciones
        </p>


        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">


          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">

            <h3 className="text-xl font-bold text-[#1B4965]">
              Ventas
            </h3>

            <p>
              Compra y venta de todo tipo de propiedades.
            </p>

          </div>



          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">

            <h3 className="text-xl font-bold text-[#1B4965]">
              Alquileres
            </h3>

            <p>
              Alquileres permanentes.
            </p>

          </div>



          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">

            <h3 className="text-xl font-bold text-[#1B4965]">
              Administraciones
            </h3>

            <p>
              Gestión profesional para propietarios.
            </p>

          </div>



          <div className="bg-white rounded-2xl p-8 shadow-lg text-center">

            <h3 className="text-xl font-bold text-[#1B4965]">
              Tasaciones
            </h3>

            <p>
              Valoración de propiedades.
            </p>

          </div>


        </div>


      </section>



      {/* SOBRE MEDITERRANÉE */}

      <section className="bg-[#1B4965] py-20 px-6 text-white">

        <div className="max-w-5xl mx-auto text-center">


          <h2 className="text-4xl font-bold">
            Sobre Mediterranée
          </h2>


          <p className="mt-6 text-lg leading-relaxed">
            Somos una inmobiliaria ubicada en Shangrilá,
            Ciudad de la Costa, dedicada a brindar soluciones
            en ventas, alquileres permanentes, administraciones
            y tasaciones.

            Acompañamos cada operación con compromiso,
            transparencia y conocimiento del mercado.
          </p>


          <p className="mt-6 text-xl font-bold text-[#D8B384]">
            Shangrilá · Ciudad de la Costa · Montevideo
          </p>


        </div>

      </section>
            {/* BUSCAR PROPIEDAD */}

      <section className="bg-[#F3E7D3] py-20 px-6">

        <h2 className="text-center text-4xl font-bold text-[#1B4965]">
          Encontrá tu propiedad ideal
        </h2>

        <p className="text-center mt-4 text-gray-700">
          Casas, apartamentos, terrenos y chacras en la zona costera
        </p>


        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">


          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition">

            <div className="text-5xl">
              🏡
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1B4965]">
              Casas
            </h3>

            <p className="mt-3">
              Viviendas con jardín, garage y espacios para disfrutar.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition">

            <div className="text-5xl">
              🏢
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1B4965]">
              Apartamentos
            </h3>

            <p className="mt-3">
              Opciones en Montevideo y Ciudad de la Costa.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition">

            <div className="text-5xl">
              🌱
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1B4965]">
              Terrenos
            </h3>

            <p className="mt-3">
              Lotes ideales para construir o invertir.
            </p>

          </div>


          <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:scale-105 transition">

            <div className="text-5xl">
              🌳
            </div>

            <h3 className="mt-4 text-2xl font-bold text-[#1B4965]">
              Chacras
            </h3>

            <p className="mt-3">
              Naturaleza, tranquilidad y grandes espacios.
            </p>

          </div>


        </div>

      </section>



      {/* POR QUÉ ELEGIRNOS */}

      <section className="bg-white py-20 px-6">

        <h2 className="text-center text-4xl font-bold text-[#1B4965]">
          ¿Por qué elegir Mediterranée?
        </h2>

        <p className="text-center mt-4 text-gray-700">
          Experiencia, cercanía y compromiso con cada cliente
        </p>


        <div className="grid md:grid-cols-4 gap-8 mt-12 max-w-6xl mx-auto">


          <div className="bg-[#F3E7D3] rounded-2xl p-8 text-center shadow-lg">

            <h3 className="text-xl font-bold text-[#1B4965]">
              🌊 Conocimiento de la zona
            </h3>

            <p className="mt-4">
              Especialistas en Shangrilá y Ciudad de la Costa.
            </p>

          </div>


          <div className="bg-[#F3E7D3] rounded-2xl p-8 text-center shadow-lg">

            <h3 className="text-xl font-bold text-[#1B4965]">
              🤝 Atención personalizada
            </h3>

            <p className="mt-4">
              Acompañamos cada operación de principio a fin.
            </p>

          </div>


          <div className="bg-[#F3E7D3] rounded-2xl p-8 text-center shadow-lg">

            <h3 className="text-xl font-bold text-[#1B4965]">
              🏡 Todo tipo de propiedades
            </h3>

            <p className="mt-4">
              Casas, apartamentos, terrenos y chacras.
            </p>

          </div>


          <div className="bg-[#F3E7D3] rounded-2xl p-8 text-center shadow-lg">

            <h3 className="text-xl font-bold text-[#1B4965]">
              📋 Gestión profesional
            </h3>

            <p className="mt-4">
              Administraciones y tasaciones confiables.
            </p>

          </div>


        </div>

      </section>



      {/* PROPIEDADES */}

      <section
        id="propiedades"
        className="bg-white py-20 px-6"
      >

        <h2 className="text-center text-4xl font-bold text-[#1B4965]">
          Propiedades disponibles
        </h2>


        <p className="text-center mt-4 text-gray-700">
          Casas, apartamentos, terrenos y chacras seleccionados para vos
        </p>


        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 max-w-7xl mx-auto">


          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <img
              src="/images/propiedades/casa1.jpg"
              className="w-full h-56 object-cover"
              alt="Casa"
            />

            <div className="p-6">

              <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">
                EN VENTA
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#1B4965]">
                Casa en Shangrilá
              </h3>

              <p>
                🛏 3 dormitorios
              </p>

              <p>
                🚗 Garage · 🌳 Jardín
              </p>

              <p className="mt-3 font-bold text-[#D8B384]">
                Precio: Consultar
              </p>

            </div>

          </div>
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <img
              src="/images/propiedades/apartamento1.jpg"
              className="w-full h-56 object-cover"
              alt="Apartamento"
            />

            <div className="p-6">

              <span className="bg-[#D8B384] text-white px-3 py-1 rounded-full text-sm">
                ALQUILER
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#1B4965]">
                Apartamento moderno
              </h3>

              <p>
                🛏 2 dormitorios
              </p>

              <p>
                📍 Montevideo
              </p>

              <p className="mt-3 font-bold text-[#D8B384]">
                Precio: Consultar
              </p>

            </div>

          </div>



          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <img
              src="/images/propiedades/terreno1.jpg"
              className="w-full h-56 object-cover"
              alt="Terreno"
            />

            <div className="p-6">

              <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">
                EN VENTA
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#1B4965]">
                Terreno costero
              </h3>

              <p>
                📐 Ideal para construir
              </p>

              <p>
                🌊 Cercano al mar
              </p>

              <p className="mt-3 font-bold text-[#D8B384]">
                Precio: Consultar
              </p>

            </div>

          </div>



          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">

            <img
              src="/images/propiedades/chacra1.jpg"
              className="w-full h-56 object-cover"
              alt="Chacra"
            />

            <div className="p-6">

              <span className="bg-[#1B4965] text-white px-3 py-1 rounded-full text-sm">
                DESTACADA
              </span>

              <h3 className="mt-4 text-xl font-bold text-[#1B4965]">
                Chacra
              </h3>

              <p>
                🌳 Naturaleza y tranquilidad
              </p>

              <p>
                🏡 Ideal vivienda o inversión
              </p>

              <p className="mt-3 font-bold text-[#D8B384]">
                Precio: Consultar
              </p>

            </div>

          </div>


        </div>


      </section>




      {/* CONTACTO */}

      <section
        id="contacto"
        className="bg-[#F3E7D3] py-20 px-6"
      >

        <div className="max-w-4xl mx-auto text-center">


          <h2 className="text-4xl font-bold text-[#1B4965]">
            Contactanos
          </h2>


          <p className="mt-4 text-lg">
            Estamos para ayudarte a vender, alquilar o encontrar tu próxima propiedad.
          </p>



          <div className="bg-white rounded-2xl shadow-xl p-8 mt-10">


            <input
              className="w-full border rounded-lg p-3 mb-4"
              placeholder="Nombre"
            />


            <input
              className="w-full border rounded-lg p-3 mb-4"
              placeholder="Teléfono"
            />


            <input
              className="w-full border rounded-lg p-3 mb-4"
              placeholder="Email"
            />


            <textarea
              className="w-full border rounded-lg p-3 mb-5"
              rows={4}
              placeholder="Escribí tu consulta"
            />


            <a
              href="https://wa.me/59894239220"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-green-500 text-white py-4 rounded-lg font-bold hover:bg-green-600 transition"
            >
              Enviar por WhatsApp
            </a>


          </div>



          <div className="mt-10 text-[#1B4965] text-lg">

            <p>
              📱 094 239 220
            </p>


            <p className="mt-2">
              📍 Shangrilá · Ciudad de la Costa · Montevideo
            </p>


            <p className="mt-2">
              ✉ Email: Próximamente
            </p>


          </div>


        </div>


      </section>




      {/* FOOTER */}

      <footer className="bg-[#1B4965] text-white py-10">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <h3 className="text-2xl font-bold">
            Mediterranée Servicios Inmobiliarios
          </h3>


          <p className="mt-4">
            Shangrilá · Ciudad de la Costa · Montevideo
          </p>


          <p className="mt-4 text-gray-300">
            © {new Date().getFullYear()} Todos los derechos reservados.
          </p>


        </div>

      </footer>




      {/* WHATSAPP FLOTANTE */}

      <a
        href="https://wa.me/59894239220"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-full shadow-xl font-bold hover:bg-green-600 transition"
      >
        WhatsApp
      </a>


    </main>
  );
}