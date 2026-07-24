"use client";

import Image from "next/image";


export default function Header() {

  return (

    <header
      className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        z-50
        w-[94%]
        max-w-6xl
        rounded-3xl
        bg-white/10
        backdrop-blur-3xl
        border
        border-white/20
        shadow-[0_20px_50px_rgba(0,0,0,0.20)]
      "
    >


      <div
        className="
          flex
          items-center
          justify-between
          px-6
          py-1
        "
      >



        <Image
          src="/images/logo.png"
          alt="Mediterranée Servicios Inmobiliarios"
          width={105}
          height={55}
          className="
            object-contain
            drop-shadow-2xl
          "
        />





        <nav
          className="
            hidden
            md:flex
            items-center
            gap-8
            text-sm
            font-medium
            text-white
            drop-shadow-xl
          "
        >



          <a
            href="#inicio"
            className="
              hover:text-[#D8B384]
              transition
            "
          >
            Inicio
          </a>



          <a
            href="#servicios"
            className="
              hover:text-[#D8B384]
              transition
            "
          >
            Servicios
          </a>



          <a
            href="#propiedades"
            className="
              hover:text-[#D8B384]
              transition
            "
          >
            Propiedades
          </a>



          <a
            href="#contacto"
            className="
              hover:text-[#D8B384]
              transition
            "
          >
            Contacto
          </a>





          <a
            href="https://wa.me/59894239220"
            target="_blank"
            rel="noopener noreferrer"
            className="
              bg-white/20
              backdrop-blur-xl
              border
              border-white/30
              text-white
              px-6
              py-2
              rounded-full
              shadow-lg
              hover:bg-[#D8B384]
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