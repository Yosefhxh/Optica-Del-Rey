import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, Shield, Sun, Monitor, Glasses, Sparkles, CheckCircle, ArrowRight, Clock, Award, Zap } from "lucide-react"

export default function ProductosPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Productos y <span className="text-primary">Servicios</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Descubre nuestra amplia gama de lentes, armazones y servicios especializados. Calidad premium con precios
            accesibles desde $2,300.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Productos</h2>
            <p className="text-xl text-muted-foreground">Encuentra la solución perfecta para tu visión</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Armazones */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Glasses className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Armazones</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <img
                    src="/premium-eyeglass-frames-collection.jpg"
                    alt="Colección de armazones premium"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-muted-foreground">
                  Amplia selección de armazones de diseño, desde clásicos hasta las últimas tendencias de moda.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Marcas internacionales premium</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Materiales de alta calidad</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Diseños exclusivos</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">Desde $2,300</span>
                    <Badge variant="secondary">Más de 200 modelos</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Lentes Graduados */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Lentes Graduados</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <img
                    src="/prescription-lenses-technology.jpg"
                    alt="Tecnología en lentes graduados"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-muted-foreground">
                  Lentes de precisión fabricados con la más avanzada tecnología para una visión perfecta.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Monofocales y progresivos</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Índices de refracción altos</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Garantía de adaptación</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">Desde $2,800</span>
                    <Badge variant="secondary">Entrega 24-48h</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Filtros Especiales */}
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-2xl">Filtros Especiales</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg flex items-center justify-center">
                  <img
                    src="/special-lens-filters-protection.jpg"
                    alt="Filtros especiales para lentes"
                    className="w-48 h-48 object-contain"
                  />
                </div>
                <p className="text-muted-foreground">
                  Protección avanzada contra rayos UV, luz azul y reflejos para el máximo confort visual.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Filtro UV 100%</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Antirreflejante premium</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Filtro luz azul</span>
                  </div>
                </div>
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">Desde $3,200</span>
                    <Badge variant="secondary">Tecnología avanzada</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Specialized Products */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Productos Especializados</h2>
            <p className="text-xl text-muted-foreground">Soluciones específicas para necesidades particulares</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sun className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lentes de Sol</h3>
                <p className="text-muted-foreground text-sm mb-3">Protección UV total con estilo y elegancia</p>
                <p className="text-primary font-semibold">Desde $2,500</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lentes Ocupacionales</h3>
                <p className="text-muted-foreground text-sm mb-3">Diseñados para trabajo en computadora</p>
                <p className="text-primary font-semibold">Desde $3,000</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lentes Progresivos</h3>
                <p className="text-muted-foreground text-sm mb-3">Visión nítida a todas las distancias</p>
                <p className="text-primary font-semibold">Desde $3,800</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Lentes de Contacto</h3>
                <p className="text-muted-foreground text-sm mb-3">Comodidad y libertad visual total</p>
                <p className="text-primary font-semibold">Desde $800/mes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-xl text-muted-foreground">Atención integral para tu salud visual</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Eye className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Examen Visual Completo</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Evaluación integral de tu salud visual con equipos de última generación y tecnología digital.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Refracción computarizada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Medición de presión ocular</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Evaluación de fondo de ojo</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">$500 - Incluye consulta</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Laboratorio Express</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Fabricación de lentes en nuestro laboratorio propio con entrega en tiempo récord.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Entrega en 24-48 horas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Control de calidad total</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Tallado de precisión</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">Incluido en el precio</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Garantía y Soporte</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Respaldo total en todos nuestros productos con garantía extendida y servicio postventa.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>12 meses de garantía</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Ajustes gratuitos</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Limpieza y mantenimiento</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">Sin costo adicional</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Adaptación Personalizada</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Proceso de adaptación guiado para garantizar el máximo confort con tus nuevos lentes.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Seguimiento personalizado</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Ajustes de graduación</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Garantía de satisfacción</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">Incluido en el servicio</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Reparaciones</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Servicio técnico especializado para reparación y mantenimiento de todo tipo de armazones.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Soldadura especializada</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Cambio de piezas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Restauración completa</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">Desde $200</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                    <Glasses className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Asesoría de Estilo</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Consultoría personalizada para encontrar el armazón perfecto según tu rostro y estilo.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Análisis facial</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Recomendaciones personalizadas</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-primary mr-2" />
                    <span>Prueba virtual</span>
                  </li>
                </ul>
                <div className="mt-4 pt-4 border-t">
                  <span className="text-primary font-semibold">Consulta gratuita</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Price Range */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precios Accesibles, Calidad Premium</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Ofrecemos la mejor relación calidad-precio del mercado con opciones para todos los presupuestos
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Básico</h3>
              <div className="text-3xl font-bold mb-2">$2,300 - $2,800</div>
              <p className="text-primary-foreground/80">Armazones clásicos + lentes monofocales</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Premium</h3>
              <div className="text-3xl font-bold mb-2">$3,200 - $3,800</div>
              <p className="text-primary-foreground/80">Armazones de diseño + filtros especiales</p>
            </div>
            <div className="bg-primary-foreground/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Luxury</h3>
              <div className="text-3xl font-bold mb-2">$4,000+</div>
              <p className="text-primary-foreground/80">Marcas exclusivas + tecnología avanzada</p>
            </div>
          </div>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contacto">
              Solicita tu Cotización
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
