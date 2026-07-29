import Link from "next/link";

export default function AdminPage() {
  const cards = [
    {
      titulo: "Propiedades",
      descripcion: "Administrar propiedades",
      href: "/admin/propiedades",
      icono: "🏠",
    },
    {
      titulo: "Nueva propiedad",
      descripcion: "Publicar una propiedad",
      href: "/admin/propiedades/nueva",
      icono: "➕",
    },
    {
      titulo: "Consultas",
      descripcion: "Ver consultas recibidas",
      href: "/admin/consultas",
      icono: "📩",
    },
    {
      titulo: "Configuración",
      descripcion: "Próximamente",
      href: "#",
      icono: "⚙️",
    },
  ];

  return (
    <main className="min-h-screen bg-[#FAF8F5] p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-[#303C95]">
          Mediterranée Admin
        </h1>

        <p className="mt-3 text-gray-600">
          Panel de administración del sitio.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {cards.map((card) => (
            <Link
              key={card.titulo}
              href={card.href}
              className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-1 transition border border-gray-100"
            >
              <div className="text-5xl">{card.icono}</div>

              <h2 className="mt-6 text-2xl font-bold text-[#303C95]">
                {card.titulo}
              </h2>

              <p className="mt-2 text-gray-600">
                {card.descripcion}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}