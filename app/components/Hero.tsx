<section
  id="inicio"
  className="
    relative
    h-screen
    overflow-hidden
  "
>

  {/* VIDEO */}

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

  {/* OSCURECIDO SUAVE */}
  {/* Mantiene los colores originales del video */}

  <div
    className="
      absolute
      inset-0
      bg-black/15
    "
  />

  {/* DEGRADADO PARA DAR PROFUNDIDAD */}

  <div
    className="
      absolute
      inset-0
      bg-gradient-to-b
      from-black/25
      via-transparent
      to-black/65
    "
  />

  {/* CONTENIDO */}

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
        mt-12
      "
    >

      {/* MARCA */}

      <h1
        className="
          text-5xl
          md:text-8xl
          tracking-[10px]
          font-semibold
          text-white
          drop-shadow-[0_8px_30px_rgba(0,0,0,0.45)]
        "
      >
        MEDITERRANÉE
      </h1>

      {/* LÍNEA AZUL DE MARCA */}

      <div
        className="
          w-32
          h-[2px]
          bg-[#1300FF]
          mx-auto
          mt-6
          rounded-full
          shadow-[0_0_12px_rgba(19,0,255,0.65)]
        "
      />

      {/* SUBTÍTULO */}

      <p
        className="
          mt-6
          text-sm
          md:text-lg
          tracking-[7px]
          uppercase
          text-white/90
        "
      >
        Servicios Inmobiliarios
      </p>

      {/* SERVICIOS */}

      <p
        className="
          mt-8
          text-sm
          md:text-base
          tracking-[4px]
          uppercase
          text-white
          font-semibold
        "
      >
        Ventas · Alquileres · Administraciones · Tasaciones
      </p>

      {/* BOTONES */}

      <div
        className="
          mt-14
          flex
          flex-col
          md:flex-row
          justify-center
          gap-5
        "
      >

        {/* VER PROPIEDADES */}

        <a
          href="#propiedades"
          className="
            rounded-full
            bg-[#1300FF]
            border
            border-white/20
            px-10
            py-4
            text-white
            font-semibold
            shadow-[0_8px_25px_rgba(19,0,255,0.30)]
            hover:bg-[#0D00B8]
            hover:scale-105
            hover:shadow-[0_10px_30px_rgba(19,0,255,0.40)]
            transition-all
            duration-300
          "
        >
          Ver propiedades
        </a>

        {/* CONTACTANOS */}

        <a
          href="#contacto"
          className="
            rounded-full
            bg-white/95
            backdrop-blur-xl
            border
            border-white/40
            px-10
            py-4
            text-[#20232A]
            font-semibold
            shadow-2xl
            hover:bg-white
            hover:text-[#1300FF]
            hover:scale-105
            transition-all
            duration-300
          "
        >
          Contactanos
        </a>

      </div>

    </div>

  </div>

</section>
