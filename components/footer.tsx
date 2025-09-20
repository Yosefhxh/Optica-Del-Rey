import Link from "next/link"
import { Eye, Facebook, Instagram, Phone, Mail, MapPin, Twitter, Youtube, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Eye className="h-8 w-8" />
              <span className="font-bold text-xl">Óptica Del Rey</span>
            </div>
            <p className="text-primary-foreground/80 text-sm">
              Especialistas en salud visual con más de 15 años de experiencia. Tu visión es nuestra prioridad.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Clock className="h-4 w-4" />
              <span className="text-primary-foreground/80">Lun-Vie: 9AM-7PM | Sáb: 9AM-5PM</span>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="/nosotros"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Nosotros
                </Link>
              </li>
              <li>
                <Link
                  href="/productos"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  href="/galeria"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Galería
                </Link>
              </li>
              <li>
                <Link
                  href="/contacto"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="text-primary-foreground/80">+52 55 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="text-primary-foreground/80">info@opticadelrey.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="text-primary-foreground/80">Av. Revolución 1234, Col. Centro</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
            <div className="mt-4">
              <h4 className="font-medium text-sm mb-2">Servicios</h4>
              <ul className="space-y-1 text-xs text-primary-foreground/70">
                <li>Exámenes Visuales</li>
                <li>Lentes Graduados</li>
                <li>Lentes de Contacto</li>
                <li>Reparaciones</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/80">
          <p>&copy; 2024 Óptica Del Rey. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
