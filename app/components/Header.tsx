"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [propiedadesAbierto, setPropiedadesAbierto] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function manejarScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", manejarScroll);
    manejarScroll();

    return () => {
      window.removeEventListener("scroll", manejarScroll);
    };
  }, []);

  function cerrarMenus() {
    setMenuAbierto(false);
    setPropiedadesAbierto(false);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">

      {/* =====================================================
          VIDEO DEL HEADER
      ===================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          overflow-hidden
          pointer-events-none
        "
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
        >
          <source
            src="/images/12345.mp4"
            type="video/mp4"
          />
        </video>

        {/* CAPA SUAVE SOBRE EL VIDEO */}

        <div
          className="
            absolute
            inset-0
            bg-black/15
          "
        />
      </div>

      {/* =====================================================
          BARRA VIDRIADA
      ===================================================== */}

      <div
        className={`
          relative
          z-10
          overflow-visible
          bg-[#F3EEE6]/72
          backdrop-blur-xl
          backdrop-saturate-150
          border-b
          border-[#D6CCBC]/70
          shadow-[0_8px_30px_rgba(63,88,112,0.12)]
          transition-all
          duration-500
          ease-in-out
          ${scrolled ? "py-1 bg-[#F3EEE6]/88" : "py-2"}
        `}
      >

        <div className="mx-auto max-w-7xl px-4 sm:px-6">

          <div
            className={`
              flex
              items-center
              justify-between
              transition-all
              duration-500
              ease-in-out
              ${scrolled ? "h-[68px]" : "h-[105px]"}
            `}
          >

            {/* =================================================
                LOGO
            ================================================= */}

            <Link
              href="/"
              className="
                relative
                z-20
                flex
                shrink-0
                items-center
              "
              onClick={cerrarMenus}
            >

              <Image
                src="/images/78.png"
                alt="MEDITERRANÉE Servicios Inmobiliarios"
                width={240}
                height={110}
                priority
                className={`
                  object-contain
                  transition-all
                  duration-500
                  ease-in-out
                  ${
                    scrolled
                      ? "w-[120px] md:w-[145px] translate-y-0"
                      : "w-[145px] md:w-[170px] translate-y-5"
                  }
                `}
              />

            </Link>

            {/* =================================================
                NAVEGACIÓN DESKTOP
            ================================================= */}

            <nav className="hidden items-center gap-8 md:flex">

              {/* INICIO */}

              <Link
                href="/"
                onClick={cerrarMenus}
                className="
                  text-sm
                  font-semibold
                  text-[#3F454B]
                  drop-shadow-sm
                  transition
                  hover:text-[#3F5870]
                "
              >
                Inicio
              </Link>

              {/* PROPIEDADES */}

              <div
                className="relative"
                onMouseEnter={() =>
                  setPropiedadesAbierto(true)
                }
                onMouseLeave={() =>
                  setPropiedadesAbierto(false)
                }
              >

                <button
                  type="button"
                  onClick={() =>
                    setPropiedadesAbierto(
                      !propiedadesAbierto
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-2
                    text-sm
                    font-semibold
                    text-[#3F454B]
                    drop-shadow-sm
                    transition
                    hover:text-[#3F5870]
                  "
                >

                  Propiedades

                  {/* CHEVRON */}

                  <span
                    className={`
                      flex
                      h-5
                      w-5
                      items-center
                      justify-center
                      rounded-full
                      bg-white/45
                      border
                      border-[#D6CCBC]
                      transition-all
                      duration-300
                      ${
                        propiedadesAbierto
                          ? "bg-[#3F5870] border-[#3F5870]"
                          : ""
                      }
                    `}
                  >
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`
                        text-[#3F5870]
                        transition-transform
                        duration-300
                        ${
                          propiedadesAbierto
                            ? "rotate-180 text-white"
                            : ""
                        }
                      `}
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </span>

                </button>

                {propiedadesAbierto && (
                  <div
                    className="
                      absolute
                      left-1/2
                      top-full
                      -translate-x-1/2
                      pt-4
                    "
                  >

                    <div
                      className="
                        w-52
                        rounded-2xl
                        border
                        border-[#D6CCBC]
                        bg-[#F3EEE6]/96
                        p-2
                        shadow-[0_15px_40px_rgba(63,88,112,0.16)]
                        backdrop-blur-2xl
                        backdrop-saturate-150
                      "
                    >

                      {/* ALQUILERES */}

                      <Link
                        href="/propiedades?operacion=ALQUILER"
                        onClick={cerrarMenus}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          text-[#30343B]
                          transition
                          hover:bg-[#E8E0D2]
                          hover:text-[#3F5870]
                        "
                      >

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path d="M3 10.5L12 3l9 7.5" />
                          <path d="M5.5 9.5V21h13V9.5" />
                          <path d="M9.5 21v-6h5v6" />
                        </svg>

                        <span>Alquileres</span>

                      </Link>

                      {/* VENTAS */}

                      <Link
                        href="/propiedades?operacion=VENTA"
                        onClick={cerrarMenus}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          text-[#30343B]
                          transition
                          hover:bg-[#E8E0D2]
                          hover:text-[#3F5870]
                        "
                      >

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path d="M4 21V9l8-6 8 6v12" />
                          <path d="M8 21v-7h8v7" />
                          <path d="M8 10h.01" />
                          <path d="M12 10h.01" />
                          <path d="M16 10h.01" />
                        </svg>

                        <span>Ventas</span>

                      </Link>

                      {/* DESTACADAS */}

                      <Link
                        href="/propiedades?destacada=true"
                        onClick={cerrarMenus}
                        className="
                          flex
                          items-center
                          gap-3
                          rounded-xl
                          px-4
                          py-3
                          text-sm
                          font-semibold
                          text-[#30343B]
                          transition
                          hover:bg-[#E8E0D2]
                          hover:text-[#3F5870]
                        "
                      >

                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                          className="shrink-0"
                        >
                          <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3.5z" />
                        </svg>

                        <span>Destacadas</span>

                      </Link>

                    </div>

                  </div>
                )}

              </div>

              {/* SERVICIOS */}

              <a
                href="/#servicios"
                onClick={cerrarMenus}
                className="
                  text-sm
                  font-semibold
                  text-[#3F454B]
                  drop-shadow-sm
                  transition
                  hover:text-[#3F5870]
                "
              >
                Servicios
              </a>

              {/* NOSOTROS */}

              <a
                href="/#nosotros"
                onClick={cerrarMenus}
                className="
                  text-sm
                  font-semibold
                  text-[#3F454B]
                  drop-shadow-sm
                  transition
                  hover:text-[#3F5870]
                "
              >
                Nosotros
              </a>

              {/* CONTACTO */}

              <a
                href="/#contacto"
                onClick={cerrarMenus}
                className="
                  rounded-full
                  bg-[#3F5870]
                  px-5
                  py-2.5
                  text-sm
                  font-bold
                  text-white
                  shadow-[0_6px_20px_rgba(63,88,112,0.25)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-[#31475C]
                  hover:shadow-[0_8px_25px_rgba(63,88,112,0.35)]
                "
              >
                Contactanos
              </a>

            </nav>

            {/* =================================================
                BOTÓN MOBILE
            ================================================= */}

            <button
              type="button"
              onClick={() =>
                setMenuAbierto(!menuAbierto)
              }
              aria-label={
                menuAbierto
                  ? "Cerrar menú"
                  : "Abrir menú"
              }
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-xl
                border
                border-[#D6CCBC]
                bg-[#F3EEE6]/75
                text-2xl
                text-[#3F5870]
                shadow-sm
                backdrop-blur-xl
                transition
                hover:bg-[#F3EEE6]
                md:hidden
              "
            >
              {menuAbierto ? "×" : "☰"}
            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          MENÚ MOBILE
      ===================================================== */}

      {menuAbierto && (
        <div
          className="
            relative
            z-20
            border-b
            border-[#D6CCBC]
            bg-[#F3EEE6]/97
            shadow-[0_15px_40px_rgba(63,88,112,0.12)]
            backdrop-blur-2xl
            backdrop-saturate-150
            md:hidden
          "
        >

          <nav className="space-y-2 px-5 py-5">

            {/* INICIO */}

            <Link
              href="/"
              onClick={cerrarMenus}
              className="
                block
                rounded-xl
                px-4
                py-3
                font-semibold
                text-[#30343B]
                transition
                hover:bg-[#E8E0D2]
                hover:text-[#3F5870]
              "
            >
              Inicio
            </Link>

            {/* PROPIEDADES */}

            <button
              type="button"
              onClick={() =>
                setPropiedadesAbierto(
                  !propiedadesAbierto
                )
              }
              className="
                flex
                w-full
                items-center
                justify-between
                rounded-xl
                px-4
                py-3
                font-semibold
                text-[#30343B]
                transition
                hover:bg-[#E8E0D2]
                hover:text-[#3F5870]
              "
            >

              <span>Propiedades</span>

              {/* CHEVRON MOBILE */}

              <span
                className={`
                  flex
                  h-6
                  w-6
                  items-center
                  justify-center
                  rounded-full
                  bg-[#E8E0D2]
                  border
                  border-[#D6CCBC]
                  text-[#3F5870]
                  transition-all
                  duration-300
                  ${
                    propiedadesAbierto
                      ? "bg-[#3F5870] border-[#3F5870] text-white"
                      : ""
                  }
                `}
              >
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={`
                    transition-transform
                    duration-300
                    ${
                      propiedadesAbierto
                        ? "rotate-180"
                        : ""
                    }
                  `}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </span>

            </button>

            {propiedadesAbierto && (
              <div
                className="
                  ml-4
                  space-y-1
                  border-l-2
                  border-[#3F5870]
                  pl-3
                "
              >

                {/* ALQUILERES */}

                <Link
                  href="/propiedades?operacion=ALQUILER"
                  onClick={cerrarMenus}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-2.5
                    font-medium
                    text-[#30343B]
                    transition
                    hover:bg-[#E8E0D2]
                    hover:text-[#3F5870]
                  "
                >

                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M3 10.5L12 3l9 7.5" />
                    <path d="M5.5 9.5V21h13V9.5" />
                    <path d="M9.5 21v-6h5v6" />
                  </svg>

                  <span>Alquileres</span>

                </Link>

                {/* VENTAS */}

                <Link
                  href="/propiedades?operacion=VENTA"
                  onClick={cerrarMenus}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-2.5
                    font-medium
                    text-[#30343B]
                    transition
                    hover:bg-[#E8E0D2]
                    hover:text-[#3F5870]
                  "
                >

                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M4 21V9l8-6 8 6v12" />
                    <path d="M8 21v-7h8v7" />
                    <path d="M8 10h.01" />
                    <path d="M12 10h.01" />
                    <path d="M16 10h.01" />
                  </svg>

                  <span>Ventas</span>

                </Link>

                {/* DESTACADAS */}

                <Link
                  href="/propiedades?destacada=true"
                  onClick={cerrarMenus}
                  className="
                    flex
                    items-center
                    gap-3
                    rounded-xl
                    px-4
                    py-2.5
                    font-medium
                    text-[#30343B]
                    transition
                    hover:bg-[#E8E0D2]
                    hover:text-[#3F5870]
                  "
                >

                  <svg
                    width="19"
                    height="19"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="shrink-0"
                  >
                    <path d="M12 3.5l2.6 5.3 5.9.9-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.9L12 3.5z" />
                  </svg>

                  <span>Destacadas</span>

                </Link>

              </div>
            )}

            {/* SERVICIOS */}

            <a
              href="/#servicios"
              onClick={cerrarMenus}
              className="
                block
                rounded-xl
                px-4
                py-3
                font-semibold
                text-[#30343B]
                transition
                hover:bg-[#E8E0D2]
                hover:text-[#3F5870]
              "
            >
              Servicios
            </a>

            {/* NOSOTROS */}

            <a
              href="/#nosotros"
              onClick={cerrarMenus}
              className="
                block
                rounded-xl
                px-4
                py-3
                font-semibold
                text-[#30343B]
                transition
                hover:bg-[#E8E0D2]
                hover:text-[#3F5870]
              "
            >
              Nosotros
            </a>

            {/* CONTACTO */}

            <a
              href="/#contacto"
              onClick={cerrarMenus}
              className="
                mt-4
                block
                rounded-full
                bg-[#3F5870]
                px-5
                py-3.5
                text-center
                font-bold
                text-white
                shadow-[0_6px_20px_rgba(63,88,112,0.25)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:bg-[#31475C]
                hover:shadow-[0_8px_25px_rgba(63,88,112,0.35)]
              "
            >
              Contactanos
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}