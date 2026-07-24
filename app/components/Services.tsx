export default function Services() {


  const servicios = [

    {
      icono: "🏡",
      titulo: "Ventas",
      descripcion:
        "Te acompañamos en todo el proceso de venta con asesoramiento profesional y estrategia personalizada.",
    },

    {
      icono: "🔑",
      titulo: "Alquileres",
      descripcion:
        "Encontramos la mejor opción para propietarios e inquilinos en Ciudad de la Costa y Montevideo.",
    },

    {
      icono: "🏢",
      titulo: "Administraciones",
      descripcion:
        "Gestionamos tu propiedad con seguimiento, responsabilidad y tranquilidad.",
    },

    {
      icono: "📐",
      titulo: "Tasaciones",
      descripcion:
        "Realizamos valoraciones profesionales para conocer el verdadero valor de tu inmueble.",
    },

  ];





  return (


    <section
      id="servicios"
      className="
        py-28
        px-6
        bg-gradient-to-b
        from-[#F3E7D3]
        via-[#FAF8F5]
        to-white
      "
    >





      <div
        className="
          max-w-6xl
          mx-auto
        "
      >






        <div
          className="
            text-center
          "
        >




          <span
            className="
              text-sm
              uppercase
              tracking-[5px]
              text-[#D8B384]
              font-semibold
            "
          >
            Servicios
          </span>







          <h2
            className="
              mt-5
              text-4xl
              md:text-6xl
              font-semibold
              text-[#303C95]
            "
          >
            Todo lo que necesitás
          </h2>







          <div
            className="
              w-28
              h-[3px]
              bg-[#D8B384]
              mx-auto
              mt-7
              rounded-full
            "
          />







          <p
            className="
              mt-6
              text-gray-600
              text-lg
            "
          >
            Venta · Alquiler · Administraciones · Tasaciones
          </p>



        </div>









        <div
          className="
            grid
            md:grid-cols-4
            gap-7
            mt-14
          "
        >







          {servicios.map((item)=>(



            <div
              key={item.titulo}
              className="
                group
                bg-white/50
                backdrop-blur-3xl
                rounded-[35px]
                p-8
                border
                border-white
                shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                hover:-translate-y-3
                transition
                duration-500
              "
            >







              <div
                className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/70
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-3xl
                  shadow-md
                "
              >
                {item.icono}
              </div>








              <h3
                className="
                  mt-7
                  text-2xl
                  font-semibold
                  text-[#303C95]
                "
              >
                {item.titulo}
              </h3>








              <div
                className="
                  w-12
                  h-[3px]
                  bg-[#D8B384]
                  mt-5
                  rounded-full
                  group-hover:w-20
                  transition-all
                "
              />








              <p
                className="
                  mt-6
                  text-gray-600
                  leading-relaxed
                "
              >
                {item.descripcion}
              </p>





            </div>



          ))}






        </div>






      </div>






    </section>


  );

}