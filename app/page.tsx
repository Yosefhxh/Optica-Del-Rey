import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Eye, Shield, Award, Clock, ArrowRight, Star } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance">
                Visión perfecta con
                <span className="text-primary block">estilo excepcional</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
                Descubre nuestra colección premium de lentes graduados, armazones de diseño y filtros especializados.
                Calidad garantizada desde $2,300.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/productos">
                  Ver Productos
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contacto">Agenda tu Cita</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Por qué elegir Óptica Del Rey?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Más de 15 años cuidando tu visión con la mejor tecnología y atención personalizada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Examen Completo</h3>
                <p className="text-muted-foreground text-sm">
                  Evaluación integral de tu salud visual con equipos de última generación
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Garantía Total</h3>
                <p className="text-muted-foreground text-sm">
                  12 meses de garantía en todos nuestros productos y servicios
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Marcas Premium</h3>
                <p className="text-muted-foreground text-sm">
                  Las mejores marcas internacionales en armazones y lentes
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Entrega Rápida</h3>
                <p className="text-muted-foreground text-sm">
                  Lentes listos en 24-48 horas con nuestro laboratorio propio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-xl text-muted-foreground">Encuentra la solución perfecta para tu visión</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <img
                    src="/elegant-eyeglasses-frames.jpg"
                    alt="Armazones elegantes"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Armazones</h3>
                  <p className="text-muted-foreground mb-4">Diseños exclusivos que combinan estilo y comodidad</p>
                  <p className="text-primary font-semibold">Desde $2,300</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <img src="/prescription-lenses-with-coating.jpg" alt="Lentes graduados" className="w-48 h-48 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Lentes Graduados</h3>
                  <p className="text-muted-foreground mb-4">Tecnología avanzada para una visión cristalina</p>
                  <p className="text-primary font-semibold">Desde $2,800</p>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                  <img src="/blue-light-filter-lenses.jpg" alt="Filtros especiales" className="w-48 h-48 object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">Filtros Especiales</h3>
                  <p className="text-muted-foreground mb-4">Protección UV, antirreflejante y luz azul</p>
                  <p className="text-primary font-semibold">Desde $3,200</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <Link href="/productos">
                Ver Todos los Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Lo que dicen nuestros clientes</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Excelente atención y productos de calidad. Mis lentes quedaron perfectos y el servicio fue muy
                  profesional."
                </p>
                <p className="font-semibold">María González</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "Los mejores precios de la zona y una gran variedad de armazones. Definitivamente regresaré."
                </p>
                <p className="font-semibold">Carlos Rodríguez</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">
                  "El examen fue muy completo y me explicaron todo detalladamente. Muy recomendable."
                </p>
                <p className="font-semibold">Ana Martínez</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para mejorar tu visión?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Agenda tu cita hoy y descubre por qué somos la óptica de confianza de miles de clientes satisfechos.
          </p>
          <Button size="lg" asChild>
            <Link href="/contacto">
              Agenda tu Cita Ahora
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
