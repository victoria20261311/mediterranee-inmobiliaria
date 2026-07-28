"use client";

import Image from "next/image";
import { useState } from "react";


export default function Header() {


  const [propiedadesOpen, setPropiedadesOpen] = useState(false);
  const [serviciosOpen, setServiciosOpen] = useState(false);



  return (

    <header
      className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        z-50
        w-[92%]
        max-w-6xl
        rounded-2xl
        bg-black/20
        backdrop-blur-3xl
        border
        border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.15)]
      "
    >



      <div
        className="
          flex
          items-center
          justify-between
          px-6
          py-2
        "
      >



        <Image
          src="/images/logo.png"
          alt="Mediterranée Servicios Inmobiliarios"
          width={85}
          height={45}
          className="
            object-contain
            drop-shadow-xl
          "
        />







        <nav
          className="
            hidden
            md:flex
            items-center
            gap-7
            text-sm
            font-semibold
            text-white
            drop-shadow-lg
          "
        >



          <a
            href="#inicio"
            className="hover:text-[#D8B384] transition"
          >
            Inicio
          </a>






          {/* PROPIEDADES */}


          <div
            className="relative"
            onMouseEnter={()=>setPropiedadesOpen(true)}
            onMouseLeave={()=>setPropiedadesOpen(false)}
          >

            <button
              className="
                hover:text-[#D8B384]
                transition
              "
            >
              Propiedades ▾
            </button>




            {propiedadesOpen && (

              <div
                className="
                  absolute
                  top-8
                  left-0
                  w-52
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  p-4
                  text-[#303C95]
                "
              >

                <a
                  href="/propiedades"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Todas
                </a>


                <a
                  href="/propiedades?operacion=VENTA"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Ventas
                </a>


                <a
                  href="/propiedades?operacion=ALQUILER"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Alquileres
                </a>


                <a
                  href="/propiedades?tipo=Casa"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Casas
                </a>


                <a
                  href="/propiedades?tipo=Apartamento"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Apartamentos
                </a>


                <a
                  href="/propiedades?tipo=Terreno"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Terrenos
                </a>


              </div>

            )}

          </div>







          {/* SERVICIOS */}


          <div
            className="relative"
            onMouseEnter={()=>setServiciosOpen(true)}
            onMouseLeave={()=>setServiciosOpen(false)}
          >

            <button
              className="
                hover:text-[#D8B384]
                transition
              "
            >
              Servicios ▾
            </button>




            {serviciosOpen && (

              <div
                className="
                  absolute
                  top-8
                  left-0
                  w-56
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  p-4
                  text-[#303C95]
                "
              >


                <a
                  href="#servicios"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Ventas
                </a>


                <a
                  href="#servicios"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Alquileres
                </a>


                <a
                  href="#servicios"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Administraciones
                </a>


                <a
                  href="#servicios"
                  className="block py-2 hover:text-[#D8B384]"
                >
                  Tasaciones
                </a>


              </div>

            )}

          </div>








          <a
            href="#contacto"
            className="hover:text-[#D8B384] transition"
          >
            Contacto
          </a>







          <a
            href="https://wa.me/59894239220"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-[#D8B384]
              text-white
              px-5
              py-2
              rounded-full
              shadow-xl
              hover:bg-[#c69a66]
              hover:scale-105
              transition
            "
          >
            WhatsApp
          </a>





        </nav>





      </div>


    </header>

  );

}