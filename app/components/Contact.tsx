export default function Contact() {

  return (

    <section
      id="contacto"
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
            Mediterranée
          </span>





          <h2
            className="
              mt-6
              text-4xl
              md:text-6xl
              font-semibold
              text-[#303C95]
            "
          >
            Contactanos
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
            Estamos para ayudarte a encontrar,
            vender o administrar tu propiedad
            con asesoramiento profesional.
          </p>








          <div
            className="
              mt-8
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
                  backdrop-blur-xl
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








          <div
            className="
              mt-10
              space-y-4
              text-[#303C95]
              font-semibold
              text-lg
            "
          >


            <p>
              📱 WhatsApp: 094 239 220
            </p>


            <p>
              📍 Shangrilá · Ciudad de la Costa · Montevideo
            </p>


          </div>






        </div>









        <div
          className="
            bg-white/50
            backdrop-blur-3xl
            rounded-[40px]
            p-10
            border
            border-white
            shadow-[0_20px_60px_rgba(0,0,0,0.12)]
            text-center
          "
        >





          <div
            className="
              w-24
              h-24
              mx-auto
              rounded-full
              bg-white/70
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-5xl
              shadow-lg
            "
          >
            🏡
          </div>







          <h3
            className="
              mt-8
              text-3xl
              font-semibold
              text-[#303C95]
            "
          >
            Hablemos de tu propiedad
          </h3>







          <p
            className="
              mt-5
              text-gray-600
              text-lg
              leading-relaxed
            "
          >
            Contanos qué necesitás.
            Nuestro equipo está listo para asesorarte.
          </p>







          <a
            href="https://wa.me/59894239220"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-block
              mt-8
              bg-[#303C95]
              text-white
              px-10
              py-4
              rounded-full
              font-semibold
              shadow-xl
              hover:bg-[#252f7d]
              hover:scale-105
              transition
            "
          >
            Escribir por WhatsApp
          </a>





        </div>





      </div>





    </section>


  );

}