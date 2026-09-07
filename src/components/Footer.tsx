import { ExternalLink, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contacto" className="bg-cyan-950 text-cyan-50">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-6 w-6 text-cyan-300" aria-hidden="true" />
              <p className="text-lg font-bold text-white">Mesa de Ayuda SEMM</p>
            </div>
            <ul className="mt-4 space-y-3 text-base">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                <a href="tel:03514341200" className="hover:underline">
                  0351 434-1200 (líneas municipales)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                <a href="mailto:semm.ayuda@cordoba.gob.ar" className="hover:underline">
                  semm.ayuda@cordoba.gob.ar
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden="true" />
                <span>Centro de Atención al Vecino, Municipalidad de Córdoba</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold text-white">Enlaces institucionales</p>
            <ul className="mt-4 space-y-3 text-base">
              {[
                "Municipalidad de Córdoba",
                "Sitio oficial del SEMM",
                "Accesibilidad del portal",
                "Términos y condiciones",
              ].map((label) => (
                <li key={label}>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 hover:underline"
                  >
                    {label}
                    <ExternalLink className="h-4 w-4 shrink-0 text-cyan-300" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-lg font-bold text-white">Créditos del proyecto</p>
            <p className="mt-4 text-base leading-relaxed text-cyan-100">
              Portal desarrollado en el marco de la asignatura Comunicación
              Multimedial, como propuesta de capacitación ciudadana para el
              uso responsable de la aplicación SEMM.
            </p>
            <p className="mt-4 text-sm text-cyan-300" suppressHydrationWarning>
              © {new Date().getFullYear()} Municipalidad de Córdoba. Todos los
              derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
