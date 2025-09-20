import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Eye, Target, Heart, Users, Award } from "lucide-react"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Conoce a <span className="text-primary">Óptica Del Rey</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Más de 15 años dedicados a cuidar tu visión con pasión, experiencia y la mejor tecnología del mercado.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Nuestra Misión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Proporcionar soluciones visuales de la más alta calidad, combinando tecnología avanzada con atención
                  personalizada. Nos comprometemos a mejorar la calidad de vida de nuestros clientes a través de una
                  visión perfecta y productos que reflejen su personalidad única.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Eye className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">Nuestra Visión</h2>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Ser la óptica líder en la región, reconocida por nuestra excelencia en el servicio, innovación
                  constante y compromiso con la salud visual. Aspiramos a ser el primer lugar al que acudan las familias
                  cuando buscan cuidado visual de confianza.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Historia</h2>
            <p className="text-xl text-muted-foreground">Un legado de excelencia en cuidado visual</p>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="/optica-store-exterior.jpg"
                  alt="Exterior de Óptica Del Rey"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Los Inicios (2009)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Óptica Del Rey nació del sueño de ofrecer productos ópticos de calidad premium a precios accesibles.
                  Comenzamos como un pequeño local familiar con la visión de revolucionar el cuidado visual en nuestra
                  comunidad, priorizando siempre la satisfacción del cliente y la excelencia en el servicio.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="/modern-eye-exam-equipment.jpg"
                  alt="Equipo moderno de examen visual"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Crecimiento y Modernización (2015-2020)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Invertimos en tecnología de vanguardia y ampliamos nuestras instalaciones. Incorporamos equipos de
                  diagnóstico avanzado y establecimos nuestro propio laboratorio, lo que nos permitió reducir los
                  tiempos de entrega y mantener el control total sobre la calidad de nuestros productos.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <img
                  src="/satisfied-customers-testimonial.jpg"
                  alt="Clientes satisfechos"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-semibold mb-4">Líderes en la Región (2021-Presente)</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hoy somos reconocidos como la óptica de referencia en la zona, con más de 10,000 clientes satisfechos.
                  Continuamos innovando y expandiendo nuestros servicios, siempre manteniendo nuestros valores
                  fundamentales: calidad, confianza y atención personalizada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
            <p className="text-xl text-muted-foreground">Los principios que guían nuestro trabajo diario</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Compromiso</h3>
                <p className="text-muted-foreground">
                  Nos comprometemos con la excelencia en cada servicio, garantizando la satisfacción total de nuestros
                  clientes.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Calidad</h3>
                <p className="text-muted-foreground">
                  Trabajamos únicamente con las mejores marcas y materiales, asegurando productos duraderos y
                  confiables.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Confianza</h3>
                <p className="text-muted-foreground">
                  Construimos relaciones duraderas basadas en la transparencia, honestidad y profesionalismo.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Equipo</h2>
            <p className="text-xl text-muted-foreground">Profesionales dedicados a tu bienestar visual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/team-member-optometrist.jpg"
                    alt="Dr. Roberto Del Rey"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">Dr. Roberto Del Rey</h3>
                <Badge variant="secondary" className="mb-3">
                  Optometrista Fundador
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Más de 20 años de experiencia en optometría. Especialista en lentes de contacto y terapia visual.
                  Certificado por el Consejo Nacional de Optometría.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/team-member-specialist.jpg"
                    alt="Lic. María González"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">Lic. María González</h3>
                <Badge variant="secondary" className="mb-3">
                  Especialista en Lentes
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Experta en adaptación de lentes progresivos y multifocales. 15 años ayudando a clientes a encontrar la
                  solución visual perfecta.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <img
                    src="/team-member-technician.jpg"
                    alt="Ing. Carlos Martínez"
                    className="w-28 h-28 rounded-full object-cover"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2">Ing. Carlos Martínez</h3>
                <Badge variant="secondary" className="mb-3">
                  Técnico en Laboratorio
                </Badge>
                <p className="text-muted-foreground text-sm">
                  Responsable de nuestro laboratorio interno. Especialista en tallado de lentes y control de calidad con
                  certificación internacional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-primary-foreground/80">Años de Experiencia</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-primary-foreground/80">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-primary-foreground/80">Modelos Disponibles</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24h</div>
              <div className="text-primary-foreground/80">Entrega Express</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
