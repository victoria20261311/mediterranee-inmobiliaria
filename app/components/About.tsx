export default function About() {

  return (

    <section
      className="
        bg-gradient-to-b
        from-white
        via-[#FAF8F5]
        to-[#F3E7D3]
        py-28
        px-6
      "
    >


      <div
        className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >





        <div>


          <span
            className="
              text-sm
              uppercase
              tracking-[5px]
              text-[#D8B384]
              font-semibold
            "
          >
            Mediterranée Servicios Inmobiliarios
          </span>





          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-semibold
              leading-tight
              text-[#303C95]
            "
          >
            Todo en un mismo lugar
          </h2>





          <div
            className="
              w-28
              h-[3px]
              bg-[#D8B384]
              mt-7
              rounded-full
            "
          />






          <p
            className="
              mt-8
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Somos una inmobiliaria ubicada en Shangrilá,
            Ciudad de la Costa, especializada en
            <strong className="text-[#303C95]">
              {" "}ventas, alquileres, administraciones y tasaciones.
            </strong>
          </p>






          <p
            className="
              mt-6
              text-lg
              text-gray-600
              leading-relaxed
            "
          >
            Acompañamos cada operación con profesionalismo,
            cercanía y conocimiento del mercado inmobiliario.
          </p>






          <div
            className="
              mt-9
              flex
              flex-wrap
              gap-3
            "
          >


            {[
              "Ventas",
              "Alquileres",
              "Administraciones",
              "Tasaciones"
            ].map((item)=>(

              <span
                key={item}
                className="
                  bg-white/60
                  backdrop-blur-2xl
                  border
                  border-white
                  shadow-md
                  px-5
                  py-3
                  rounded-full
                  text-[#303C95]
                  font-semibold
                "
              >
                {item}
              </span>

            ))}


          </div>







          <p
            className="
              mt-10
              text-lg
              font-semibold
              text-[#303C95]
            "
          >
            Shangrilá · Ciudad de la Costa · Montevideo
          </p>





        </div>









        <div
          className="
            bg-white/40
            backdrop-blur-3xl
            rounded-[40px]
            p-10
            border
            border-white/80
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
          "
        >





          <h3
            className="
              text-3xl
              font-semibold
              text-[#303C95]
            "
          >
            Nuestra filosofía
          </h3>





          <div
            className="
              w-20
              h-[3px]
              bg-[#D8B384]
              mt-5
              rounded-full
            "
          />






          <p
            className="
              mt-7
              text-gray-600
              text-lg
              leading-relaxed
            "
          >
            Creamos relaciones basadas en confianza,
            transparencia y compromiso.

            <br /><br />

            Cada propiedad tiene una historia.
            Nuestro objetivo es acompañarte a encontrar
            el lugar indicado.
          </p>







          <div
            className="
              mt-10
              bg-white/40
              backdrop-blur-xl
              rounded-3xl
              border
              border-white
              h-32
              flex
              items-center
              justify-center
              text-6xl
            "
          >
            🏡
          </div>





        </div>






      </div>


    </section>

  );

}