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
        bg-white
        rounded-3xl
        shadow-[0_15px_50px_rgba(19,0,255,0.08)]
        p-8
        border
        border-[#1300FF]/10
      "
    >

      {/* TÍTULO */}

      <h2
        className="
          text-2xl
          font-bold
          text-[#20232A]
          mb-5
        "
      >
        📍 Ubicación
      </h2>

      {/* DIRECCIÓN */}

      <p
        className="
          text-[#4E535B]
          mb-6
          text-lg
        "
      >
        {ubicacion}
      </p>

      {/* MAPA */}

      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#1300FF]/20
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
        />

      </div>

    </section>
  );
}
