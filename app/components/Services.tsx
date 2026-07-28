export default function Services() {


  const servicios = [

    {
      titulo: "Ventas",
      descripcion:
        "Te acompañamos en todo el proceso de venta de tu propiedad con asesoramiento profesional.",
    },

    {
      titulo: "Alquileres",
      descripcion:
        "Encontramos la mejor opción para propietarios e inquilinos en Ciudad de la Costa y Montevideo.",
    },

    {
      titulo: "Administraciones",
      descripcion:
        "Gestionamos tu propiedad con seguimiento, responsabilidad y tranquilidad.",
    },

    {
      titulo: "Tasaciones",
      descripcion:
        "Realizamos valoraciones profesionales para conocer el verdadero valor de tu inmueble.",
    },

  ];



  return (

    <section
      id="servicios"
      className="
        scroll-mt-32
        py-28
        px-6
        bg-gradient-to-b
        from-[#F3E7D3]
        to-[#FAF8F5]
      "
    >



      <div
        className="
          max-w-6xl
          mx-auto
        "
      >



        <h2
          className="
            text-4xl
            md:text-5xl
            font-semibold
            text-center
            text-[#303C95]
          "
        >
          Nuestros servicios
        </h2>



        <div
          className="
            w-24
            h-1
            bg-[#D8B384]
            mx-auto
            mt-6
            rounded-full
          "
        />



        <p
          className="
            text-center
            mt-6
            text-gray-600
            text-lg
          "
        >
          Venta · Alquiler · Administraciones · Tasaciones
        </p>





        <div
          className="
            grid
            md:grid-cols-4
            gap-6
            mt-12
          "
        >



          {servicios.map((item)=>(


            <div
              key={item.titulo}
              className="
                bg-white/60
                backdrop-blur-2xl
                rounded-3xl
                p-8
                shadow-xl
                border
                border-white/70
                hover:-translate-y-2
                transition
                duration-300
              "
            >



              <h3
                className="
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
                  h-1
                  bg-[#D8B384]
                  mt-4
                  rounded-full
                "
              />



              <p
                className="
                  mt-5
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