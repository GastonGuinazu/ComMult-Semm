import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portal de Ayuda y Capacitación SEMM | Municipalidad de Córdoba",
  description:
    "Plataforma educativa para aprender a usar la app SEMM: descarga, registro, carga de saldo, inicio y fin de estacionamiento, y consejos para evitar multas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
