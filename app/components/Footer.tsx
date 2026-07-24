export default function Footer() {

  return (

    <footer
      className="
        bg-gradient-to-b
        from-[#303C95]
        to-[#20285f]
        text-white
        py-20
        px-6
      "
    >


      <div
        className="
          max-w-7xl
          mx-auto
        "
      >



        <div
          className="
            grid
            md:grid-cols-3
            gap-8
          "
        >





          <div
            className="
              bg-white/10
              backdrop-blur-2xl
              rounded-3xl
              p-8
              border
              border-white/20
            "
          >


            <h3
              className="
                text-3xl
                font-semibold
                tracking-wide
              "
            >
              MEDITERRANÉE
            </h3>




            <p
              className="
                mt-3
                text-white/70
                text-sm
                tracking-[4px]
                uppercase
              "
            >
              Servicios Inmobiliarios
            </p>




            <p
              className="
                mt-7
                text-[#D8B384]
                font-semibold
              "
            >
              Todo en un mismo lugar
            </p>



          </div>








          <div
            className="
              bg-white/10
              backdrop-blur-2xl
              rounded-3xl
              p-8
              border
              border-white/20
            "
          >



            <h4
              className="
                text-[#D8B384]
                font-bold
                tracking-wide
              "
            >
              UBICACIÓN
            </h4>




            <p
              className="
                mt-5
                text-white/90
                leading-relaxed
              "
            >
              Shangrilá
              <br />
              Ciudad de la Costa
              <br />
              Montevideo
            </p>



          </div>









          <div
            className="
              bg-white/10
              backdrop-blur-2xl
              rounded-3xl
              p-8
              border
              border-white/20
            "
          >



            <h4
              className="
                text-[#D8B384]
                font-bold
                tracking-wide
              "
            >
              SERVICIOS
            </h4>




            <div
              className="
                mt-5
                space-y-2
                text-white/90
              "
            >

              <p>Ventas</p>

              <p>Alquileres</p>

              <p>Administraciones</p>

              <p>Tasaciones</p>

            </div>



          </div>




        </div>









        <div
          className="
            mt-14
            pt-8
            border-t
            border-white/20
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-5
          "
        >




          <p
            className="
              text-sm
              text-white/60
              text-center
            "
          >
            © {new Date().getFullYear()} Mediterranée Servicios Inmobiliarios.
            Todos los derechos reservados.
          </p>







          <a
            href="https://wa.me/59894239220"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              px-8
              py-3
              rounded-full
              font-semibold
              shadow-xl
              hover:bg-[#D8B384]
              hover:scale-105
              transition
            "
          >
            WhatsApp
          </a>




        </div>




      </div>



    </footer>


  );

}