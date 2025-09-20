import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Eye, Heart, Share2, ZoomIn, Filter, Grid3X3, List } from "lucide-react"

export default function GaleriaPage() {
  const galleryItems = [
    {
      id: 1,
      title: "Armazones Clásicos Premium",
      category: "Armazones",
      price: "Desde $2,300",
      image: "/elegant-eyeglasses-frames.jpg",
      description: "Elegantes armazones de acetato italiano con acabados premium",
    },
    {
      id: 2,
      title: "Lentes con Filtro Azul",
      category: "Filtros",
      price: "Desde $3,200",
      image: "/blue-light-filter-lenses.jpg",
      description: "Protección avanzada contra la luz azul de pantallas digitales",
    },
    {
      id: 3,
      title: "Lentes Graduados HD",
      category: "Graduados",
      price: "Desde $2,800",
      image: "/prescription-lenses-with-coating.jpg",
      description: "Lentes de alta definición con tratamiento antirreflejante",
    },
    {
      id: 4,
      title: "Armazones Deportivos",
      category: "Deportivos",
      price: "Desde $2,500",
      image: "/sports-eyewear-collection.jpg",
      description: "Diseño ergonómico para actividades deportivas y al aire libre",
    },
    {
      id: 5,
      title: "Lentes de Sol Premium",
      category: "Sol",
      price: "Desde $2,800",
      image: "/premium-sunglasses-collection.jpg",
      description: "Protección UV total con cristales polarizados de alta calidad",
    },
    {
      id: 6,
      title: "Armazones de Titanio",
      category: "Premium",
      price: "Desde $3,800",
      image: "/titanium-frames-lightweight.jpg",
      description: "Ultra ligeros y resistentes, perfectos para uso diario",
    },
    {
      id: 7,
      title: "Lentes Progresivos",
      category: "Progresivos",
      price: "Desde $3,800",
      image: "/progressive-lenses-technology.jpg",
      description: "Visión nítida a todas las distancias sin líneas visibles",
    },
    {
      id: 8,
      title: "Armazones Vintage",
      category: "Vintage",
      price: "Desde $2,600",
      image: "/vintage-style-eyeglasses.jpg",
      description: "Estilo retro con toques modernos y materiales de calidad",
    },
    {
      id: 9,
      title: "Lentes Fotocromáticos",
      category: "Especiales",
      price: "Desde $3,500",
      image: "/photochromic-lenses-adaptive.jpg",
      description: "Se adaptan automáticamente a los cambios de luz",
    },
  ]

  const categories = [
    "Todos",
    "Armazones",
    "Graduados",
    "Filtros",
    "Sol",
    "Premium",
    "Deportivos",
    "Vintage",
    "Progresivos",
    "Especiales",
  ]

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Galería de <span className="text-primary">Productos</span>
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Explora nuestra colección completa de armazones, lentes y accesorios. Cada producto representa la perfecta
            combinación entre estilo, calidad y tecnología.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-medium text-muted-foreground">Filtrar por categoría:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={category === "Todos" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {category}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Grid3X3 className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-black">
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Heart className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="h-8 w-8 p-0">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="w-full" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalles
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-lg text-balance">{item.title}</h3>
                    <span className="text-primary font-bold text-sm whitespace-nowrap ml-2">{item.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm text-pretty">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Colecciones Destacadas</h2>
            <p className="text-xl text-muted-foreground">Descubre nuestras líneas más populares y exclusivas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/designer-frames-collection.jpg"
                  alt="Colección de Diseñador"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Colección Diseñador</h3>
                  <p className="text-sm text-white/90">Marcas exclusivas internacionales</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Armazones de las mejores marcas mundiales con diseños únicos y materiales premium.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Explorar Colección
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/technology-lenses-showcase.jpg"
                  alt="Tecnología Avanzada"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Tecnología Avanzada</h3>
                  <p className="text-sm text-white/90">Lentes de última generación</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Lentes con las tecnologías más avanzadas para una experiencia visual superior.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Ver Tecnologías
                </Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src="/custom-eyewear-solutions.jpg"
                  alt="Soluciones Personalizadas"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-bold text-xl mb-1">Personalización</h3>
                  <p className="text-sm text-white/90">Diseños únicos para ti</p>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Servicios de personalización para crear el armazón perfecto según tus necesidades.
                </p>
                <Button variant="outline" className="w-full bg-transparent">
                  Personalizar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Galería en Números</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-muted-foreground">Modelos Disponibles</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Marcas Premium</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Años de Experiencia</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Clientes Satisfechos</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Te Gustó Algo de Nuestra Galería?</h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Agenda una cita para probar cualquier modelo de nuestra colección y recibe asesoría personalizada
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link href="/contacto">Agendar Cita</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              asChild
            >
              <Link href="/productos">Ver Todos los Productos</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
