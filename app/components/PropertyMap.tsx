type Props = {
  ubicacion: string;
};


export default function PropertyMap({ ubicacion }: Props) {


  const url = `https://www.google.com/maps?q=${encodeURIComponent(ubicacion)}&output=embed`;



  return (


    <section
      className="
        mt-12
        bg-white
        rounded-3xl
        shadow-xl
        p-8
      "
    >




      <h2
        className="
          text-2xl
          font-bold
          text-[#303C95]
          mb-5
        "
      >
        📍 Ubicación
      </h2>





      <p
        className="
          text-gray-600
          mb-6
          text-lg
        "
      >
        {ubicacion}
      </p>







      <div
        className="
          overflow-hidden
          rounded-2xl
          border
          border-[#D8B384]/30
        "
      >





        <iframe
          src={url}
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
        ></iframe>





      </div>






    </section>


  );
}