import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mediterranée Servicios Inmobiliarios",
  description:
    "Ventas, alquileres, administraciones y tasaciones en Shangrilá, Ciudad de la Costa y Montevideo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-[#F3E7D3] antialiased">
        {children}
      </body>
    </html>
  );
}