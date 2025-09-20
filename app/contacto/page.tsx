import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Calendar,
  MessageSquare,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  CheckCircle,
} from "lucide-react"

export default function ContactoPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contáctanos</h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Estamos aquí para ayudarte con todas tus necesidades de salud visual. Agenda tu cita o contáctanos para
            cualquier consulta.
          </p>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Información de Contacto</h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Visítanos en nuestra óptica o contáctanos por cualquiera de estos medios. Nuestro equipo de expertos
                  está listo para atenderte.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card>
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Dirección</h3>
                      <p className="text-muted-foreground">Av. Revolución 1234, Col. Centro</p>
                      <p className="text-muted-foreground">Ciudad de México, CDMX 06000</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Teléfonos</h3>
                      <p className="text-muted-foreground">+52 55 1234 5678</p>
                      <p className="text-muted-foreground">+52 55 8765 4321</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-muted-foreground">info@opticadelrey.com</p>
                      <p className="text-muted-foreground">citas@opticadelrey.com</p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="flex items-center p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Horarios de Atención</h3>
                      <p className="text-muted-foreground">Lunes a Viernes: 9:00 AM - 7:00 PM</p>
                      <p className="text-muted-foreground">Sábados: 9:00 AM - 5:00 PM</p>
                      <p className="text-muted-foreground">Domingos: 10:00 AM - 3:00 PM</p>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Facebook className="h-4 w-4" />
                    Facebook
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Twitter className="h-4 w-4" />
                    Twitter
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
                    <Youtube className="h-4 w-4" />
                    YouTube
                  </Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    Envíanos un Mensaje
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre *</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input id="telefono" placeholder="Tu número de teléfono" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="tu@email.com" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="servicio">Servicio de Interés</Label>
                    <select className="w-full p-2 border border-input rounded-md bg-background">
                      <option value="">Selecciona un servicio</option>
                      <option value="examen">Examen Visual</option>
                      <option value="armazones">Armazones</option>
                      <option value="lentes">Lentes Graduados</option>
                      <option value="sol">Lentes de Sol</option>
                      <option value="contacto">Lentes de Contacto</option>
                      <option value="reparacion">Reparación</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea id="mensaje" placeholder="Cuéntanos cómo podemos ayudarte..." className="min-h-[120px]" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="acepto" className="rounded" />
                    <Label htmlFor="acepto" className="text-sm">
                      Acepto los términos y condiciones y la política de privacidad
                    </Label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="h-4 w-4 mr-2" />
                    Enviar Mensaje
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    * Campos obligatorios. Responderemos en un máximo de 24 horas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Acciones Rápidas</h2>
            <p className="text-xl text-muted-foreground">¿Necesitas algo específico? Te ayudamos de inmediato</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Agendar Cita</h3>
                <p className="text-muted-foreground mb-4">
                  Reserva tu cita para examen visual o consulta personalizada
                </p>
                <Button className="w-full">Agendar Ahora</Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Llamada Directa</h3>
                <p className="text-muted-foreground mb-4">Habla directamente con nuestros especialistas</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Llamar Ahora
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">Chat en Vivo</h3>
                <p className="text-muted-foreground mb-4">Chatea con nosotros para resolver dudas al instante</p>
                <Button variant="outline" className="w-full bg-transparent">
                  Iniciar Chat
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Ubicación</h2>
            <p className="text-xl text-muted-foreground">Fácil acceso y estacionamiento disponible</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Mapa interactivo</p>
                  <p className="text-sm text-muted-foreground">Av. Revolución 1234, Col. Centro</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-xl mb-4">Cómo Llegar</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong>En Metro:</strong> Estación Revolución (Línea 2), a 2 cuadras
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong>En Autobús:</strong> Rutas 15, 28, 45 con parada frente al local
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                    <p className="text-muted-foreground">
                      <strong>En Auto:</strong> Estacionamiento gratuito para clientes
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-xl mb-4">Referencias</h3>
                <div className="space-y-2">
                  <p className="text-muted-foreground">• Frente al Banco Azteca</p>
                  <p className="text-muted-foreground">• A un lado de Farmacia Guadalajara</p>
                  <p className="text-muted-foreground">• Cerca del Mercado de San Juan</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Button>Ver en Google Maps</Button>
                <Button variant="outline">Obtener Direcciones</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-muted-foreground">Resolvemos las dudas más comunes de nuestros clientes</p>
          </div>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">¿Necesito cita previa para un examen visual?</h3>
                <p className="text-muted-foreground">
                  Recomendamos agendar cita para garantizar la disponibilidad, pero también atendemos sin cita según
                  disponibilidad. Los exámenes duran aproximadamente 30-45 minutos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">¿Cuánto tiempo tardan en estar listos mis lentes?</h3>
                <p className="text-muted-foreground">
                  Nuestro laboratorio propio nos permite entregar lentes monofocales en 24-48 horas. Los progresivos y
                  especiales pueden tardar 3-5 días hábiles.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">¿Qué garantía tienen los productos?</h3>
                <p className="text-muted-foreground">
                  Todos nuestros productos tienen garantía de 12 meses contra defectos de fabricación. Además, ofrecemos
                  garantía de adaptación en lentes progresivos.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2">¿Aceptan seguros médicos?</h3>
                <p className="text-muted-foreground">
                  Trabajamos con los principales seguros médicos. Consulta con nosotros sobre tu póliza específica para
                  conocer la cobertura disponible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
