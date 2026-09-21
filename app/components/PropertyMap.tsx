type Props = {
  ubicacion: string;
};

export default function PropertyMap({ ubicacion }: Props) {
  const url = `https://www.google.com/maps?q=${encodeURIComponent(
    ubicacion
  )}&output=embed`;

  return (
    <section
      className="
        mt-12
        bg-[#E2EDF3]
        rounded-3xl
        shadow-[0_15px_50px_rgba(48,76,95,0.12)]
        p-6
        sm:p-8
        border
        border-[#CBDCE5]
      "
    >
      {/* TÍTULO */}

      <div className="flex items-center gap-4 mb-5">

        <div
          className="
            w-12
            h-12
            shrink-0
            rounded-2xl
            bg-[#F4F9FB]
            border
            border-[#CBDCE5]
            flex
            items-center
            justify-center
            text-[#1300FF]
          "
        >
          <svg
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
          </svg>
        </div>

        <div>
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-bold
              text-[#20232A]
            "
          >
            Ubicación
          </h2>
        </div>

      </div>

      {/* DIRECCIÓN */}

      <div
        className="
          bg-[#F8FBFC]
          border
          border-[#CBDCE5]
          rounded-2xl
          px-5
          py-4
          mb-6
        "
      >
        <p
          className="
            text-[#53616B]
            text-base
            sm:text-lg
            leading-relaxed
          "
        >
          {ubicacion}
        </p>
      </div>

      {/* MAPA */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#CBDCE5]
          shadow-[0_8px_25px_rgba(48,76,95,0.10)]
          bg-[#E5EFF4]
        "
      >
        <iframe
          src={url}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${ubicacion}`}
          className="block w-full"
        />
      </div>
    </section>
  );
}