import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import Services from "./components/Services";
import About from "./components/About";
import Properties from "./components/Properties";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Whatsapp from "./components/Whatsapp";


export default function Home() {


  return (


    <main
      className="
        min-h-screen
        bg-[#FAF8F5]
        text-gray-800
      "
    >



      <Header />



      {/* HERO */}

      <section
        id="inicio"
        className="
          relative
          h-screen
          overflow-hidden
        "
      >



        <video
          autoPlay
          loop
          muted
          playsInline
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        >

          <source
            src="/images/portada.mp4"
            type="video/mp4"
          />

        </video>





        {/* OSCURECER VIDEO */}

        <div
          className="
            absolute
            inset-0
            bg-black/35
          "
        />




        <div
          className="
            absolute
            inset-0
            bg-gradient-to-b
            from-black/10
            via-transparent
            to-black/70
          "
        />






        <div
          className="
            relative
            z-10
            h-full
            flex
            items-center
            justify-center
            px-6
          "
        >




          <div
            className="
              text-center
              mt-16
            "
          >






            <h1
              className="
                text-5xl
                md:text-7xl
                tracking-[10px]
                font-bold
                text-white
                drop-shadow-2xl
              "
            >
              MEDITERRANÉE
            </h1>







            <p
              className="
                mt-4
                text-sm
                md:text-base
                tracking-[6px]
                uppercase
                text-white/90
              "
            >
              Servicios Inmobiliarios
            </p>








            <div
              className="
                w-28
                h-[2px]
                bg-[#D8B384]
                mx-auto
                mt-8
              "
            />







            <p
              className="
                mt-8
                text-sm
                md:text-lg
                tracking-[4px]
                uppercase
                text-white
              "
            >
              Ventas · Alquileres · Administraciones · Tasaciones
            </p>









            <div
              className="
                mt-12
                flex
                flex-col
                md:flex-row
                gap-6
                justify-center
              "
            >





              <a
                href="#propiedades"
                className="
                  px-10
                  py-4
                  rounded-full
                  bg-white/20
                  backdrop-blur-xl
                  border
                  border-white/40
                  text-white
                  font-semibold
                  shadow-xl
                  hover:bg-white/30
                  transition
                "
              >
                Ver propiedades
              </a>






              <a
                href="#contacto"
                className="
                  px-10
                  py-4
                  rounded-full
                  bg-[#D8B384]
                  text-white
                  font-semibold
                  shadow-xl
                  hover:bg-[#c69a66]
                  transition
                "
              >
                Contactanos
              </a>





            </div>





          </div>





        </div>





      </section>





      {/* BUSCADOR */}

      <SearchBox />



      {/* SERVICIOS */}

      <Services />



      {/* NOSOTROS */}

      <About />



      {/* PROPIEDADES */}

      <Properties />



      {/* CONTACTO */}

      <Contact />



      {/* FOOTER */}

      <Footer />



      {/* BOTON FLOTANTE */}

      <Whatsapp />





    </main>


  );

}