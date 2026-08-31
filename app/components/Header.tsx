"use client";

import Image from "next/image";
import Link from "next/link";
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
        {/* LOGO */}

        <Link href="/#inicio">
          <Image
            src="/images/logo.png"
            alt="Mediterranée Servicios Inmobiliarios"
            width={85}
            height={45}
            className="object-contain drop-shadow-xl"
          />
        </Link>


        {/* MENÚ */}

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

          {/* INICIO */}

          <Link
            href="/#inicio"
            className="hover:text-[#D8B384] transition"
          >
            Inicio
          </Link>


          {/* PROPIEDADES */}

          <div
            className="relative"
            onMouseEnter={() => setPropiedadesOpen(true)}
            onMouseLeave={() => setPropiedadesOpen(false)}
          >

            <div className="flex items-center gap-1">

              <Link
                href="/propiedades"
                className="hover:text-[#D8B384] transition"
              >
                Propiedades
              </Link>

              <button
                type="button"
                onClick={() =>
                  setPropiedadesOpen(!propiedadesOpen)
                }
                className="
                  hover:text-[#D8B384]
                  transition
                  cursor-pointer
                "
                aria-label="Abrir menú de propiedades"
              >
                ▾
              </button>

            </div>


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

                <Link
                  href="/propiedades"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Todas
                </Link>

                <Link
                  href="/propiedades?operacion=VENTA"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Ventas
                </Link>

                <Link
                  href="/propiedades?operacion=ALQUILER"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Alquileres
                </Link>

                <Link
                  href="/propiedades?tipo=Casa"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Casas
                </Link>

                <Link
                  href="/propiedades?tipo=Apartamento"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Apartamentos
                </Link>

                <Link
                  href="/propiedades?tipo=Terreno"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Terrenos
                </Link>

                <Link
                  href="/propiedades?tipo=Chacra"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Chacras
                </Link>

              </div>
            )}

          </div>


          {/* SERVICIOS */}

          <div
            className="relative"
            onMouseEnter={() => setServiciosOpen(true)}
            onMouseLeave={() => setServiciosOpen(false)}
          >

            <div className="flex items-center gap-1">

              <Link
                href="/#servicios"
                className="hover:text-[#D8B384] transition"
              >
                Servicios
              </Link>

              <button
                type="button"
                onClick={() =>
                  setServiciosOpen(!serviciosOpen)
                }
                className="
                  hover:text-[#D8B384]
                  transition
                  cursor-pointer
                "
                aria-label="Abrir menú de servicios"
              >
                ▾
              </button>

            </div>


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

                <Link
                  href="/#servicios"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Ventas
                </Link>

                <Link
                  href="/#servicios"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Alquileres
                </Link>

                <Link
                  href="/#servicios"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Administraciones
                </Link>

                <Link
                  href="/#servicios"
                  className="
                    block
                    py-2
                    hover:text-[#D8B384]
                  "
                >
                  Tasaciones
                </Link>

              </div>
            )}

          </div>


          {/* CONTACTO */}

          <Link
            href="/#contacto"
            className="hover:text-[#D8B384] transition"
          >
            Contacto
          </Link>


          {/* WHATSAPP */}

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