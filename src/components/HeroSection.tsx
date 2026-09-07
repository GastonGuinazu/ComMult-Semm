import { ClipboardCheck, ParkingCircle, PlayCircle } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden bg-gradient-to-br from-cyan-800 via-cyan-700 to-blue-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 left-1/3 h-80 w-80 rounded-full bg-cyan-400/10"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/30">
            <ParkingCircle className="h-4 w-4" aria-hidden="true" />
            Sistema de Estacionamiento Medido Municipal
          </span>

          <h1
            id="hero-titulo"
            className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Aprendé a estacionar fácil y sin multas
          </h1>

          <p className="mt-6 max-w-2xl text-lg font-medium leading-relaxed text-cyan-50 sm:text-xl">
            Esta plataforma es una iniciativa institucional para ayudarte a
            usar la aplicación SEMM paso a paso: descargá la app, cargá saldo,
            iniciá tu estacionamiento y evitá multas innecesarias. Contenido
            pensado para todas las edades, con explicaciones simples y
            recursos audiovisuales.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#modulos"
              className="flex h-14 items-center justify-center gap-2 rounded-xl bg-white px-8 text-lg font-bold text-cyan-900 shadow-lg transition hover:bg-cyan-50 focus-visible:outline-white"
            >
              <PlayCircle className="h-6 w-6" aria-hidden="true" />
              Comenzar guía
            </a>
            <a
              href="#evaluacion"
              className="flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-white/10 px-8 text-lg font-bold text-white shadow-sm transition hover:bg-white/20"
            >
              <ClipboardCheck className="h-6 w-6" aria-hidden="true" />
              Evaluación
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
