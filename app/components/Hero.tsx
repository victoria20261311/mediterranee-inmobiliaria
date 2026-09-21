<section
  id="inicio"
  className="
    relative
    h-screen
    min-h-[680px]
    w-full
    overflow-hidden
    flex
    items-center
    justify-center
  "
>
  {/* VIDEO DE FONDO */}
  <video
    autoPlay
    muted
    loop
    playsInline
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
    "
  >
    <source src="/images/portada.mp4" type="video/mp4" />
  </video>

  {/* CAPA OSCURA SUAVE */}
  <div className="absolute inset-0 bg-black/15" />

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
      w-full
      max-w-6xl
      mx-auto
      px-6
      text-center
      flex
      flex-col
      items-center
      justify-center
      pt-20
    "
  >
    <h1
      className="
        text-white
        text-5xl
        sm:text-6xl
        md:text-7xl
        lg:text-8xl
        font-semibold
        tracking-[0.18em]
        drop-shadow-[0_4px_18px_rgba(0,0,0,0.35)]
      "
    >
      MEDITERRANÉE
    </h1>

    <p
      className="
        mt-4
        text-white
        text-lg
        sm:text-xl
        md:text-2xl
        font-light
        tracking-[0.18em]
        uppercase
        drop-shadow-[0_3px_12px_rgba(0,0,0,0.35)]
      "
    >
      Servicios Inmobiliarios
    </p>

    {/* LÍNEA DECORATIVA */}
    <div
      className="
        mt-7
        h-[2px]
        w-20
        rounded-full
        bg-[#3F5870]
        shadow-[0_0_14px_rgba(63,88,112,0.65)]
      "
    />

    <p
      className="
        mt-7
        text-white
        text-sm
        sm:text-base
        md:text-lg
        tracking-[0.12em]
        uppercase
        drop-shadow-[0_3px_12px_rgba(0,0,0,0.4)]
      "
    >
      Ventas · Alquileres · Administraciones · Tasaciones
    </p>

    {/* BOTONES */}
    <div
      className="
        mt-10
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-4
        sm:gap-5
      "
    >
      <a
        href="/propiedades"
        className="
          inline-flex
          items-center
          justify-center
          min-w-[190px]
          px-7
          py-3.5
          rounded-full
          border
          border-[#3F5870]
          bg-[#3F5870]
          text-white
          text-sm
          font-semibold
          tracking-wide
          shadow-[0_8px_25px_rgba(63,88,112,0.28)]
          transition-all
          duration-300
          hover:bg-[#31475C]
          hover:border-[#31475C]
          hover:-translate-y-0.5
          hover:shadow-[0_12px_30px_rgba(63,88,112,0.35)]
        "
      >
        Ver propiedades
      </a>

      <a
        href="#contacto"
        className="
          inline-flex
          items-center
          justify-center
          min-w-[190px]
          px-7
          py-3.5
          rounded-full
          border
          border-[#F3EEE6]
          bg-[#F3EEE6]/90
          text-[#3F5870]
          text-sm
          font-semibold
          tracking-wide
          shadow-[0_8px_25px_rgba(0,0,0,0.18)]
          backdrop-blur-sm
          transition-all
          duration-300
          hover:bg-[#E8E0D2]
          hover:border-[#E8E0D2]
          hover:-translate-y-0.5
        "
      >
        Contactanos
      </a>
    </div>
  </div>
</section>