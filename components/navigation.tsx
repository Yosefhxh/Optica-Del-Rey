"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, Eye } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Eye className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-foreground">Óptica Del Rey</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Inicio
              </Link>
              <Link href="/nosotros" className="text-muted-foreground hover:text-primary transition-colors">
                Nosotros
              </Link>
              <Link href="/productos" className="text-muted-foreground hover:text-primary transition-colors">
                Productos
              </Link>
              <Link href="/galeria" className="text-muted-foreground hover:text-primary transition-colors">
                Galería
              </Link>
              <Link href="/contacto" className="text-muted-foreground hover:text-primary transition-colors">
                Contacto
              </Link>
            </div>
          </div>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="/contacto">Agenda tu Cita</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-b border-border">
            <Link href="/" className="block px-3 py-2 text-foreground hover:text-primary">
              Inicio
            </Link>
            <Link href="/nosotros" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Nosotros
            </Link>
            <Link href="/productos" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Productos
            </Link>
            <Link href="/galeria" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Galería
            </Link>
            <Link href="/contacto" className="block px-3 py-2 text-muted-foreground hover:text-primary">
              Contacto
            </Link>
            <div className="px-3 py-2">
              <Button asChild className="w-full">
                <Link href="/contacto">Agenda tu Cita</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
