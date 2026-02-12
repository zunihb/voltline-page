# LiveElectric Landing Page 🌩️

[English](#english) | [Español](#español)

---

## English

### Overview

This repository contains the landing page for **LiveElectric** (also known as Voltline), a PWA application designed for electrical companies that work on live power lines. LiveElectric is a field work management system with guided checklists that ensures field inspectors follow standardized safety protocols.

### 🎯 Key Features of LiveElectric

- **Offline-First**: Works without internet in remote locations, automatically syncs when connected
- **Procedure Management**: Standardized templates with mandatory critical steps
- **Complete Traceability**: Every action recorded with timestamp and user information
- **Photographic Evidence**: Photos linked to specific procedure steps
- **Multi-Tenant**: Multiple companies with complete data isolation
- **Bilingual**: Full support in Spanish and English

### 🛠️ Technology Stack

- **[Astro](https://astro.build/)** - Static site framework for ultra-fast performance
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **TypeScript** - Type-safe development
- **Docker** - Multi-stage build for production deployment
- **Nginx** - Web server for static file serving

### 📁 Project Structure

```
voltline-landing/
├── astro.config.mjs          # Astro configuration
├── tailwind.config.mjs        # Tailwind CSS configuration with custom colors
├── package.json               # Dependencies and scripts
├── tsconfig.json              # TypeScript configuration
├── Dockerfile                 # Multi-stage Docker build
├── .dockerignore              # Docker ignore rules
├── public/
│   └── favicon.svg            # Site favicon
└── src/
    ├── layouts/
    │   └── Layout.astro       # Base layout with HTML structure
    ├── pages/
    │   └── index.astro        # Main landing page
    ├── components/
    │   ├── Navbar.astro       # Navigation bar
    │   ├── Hero.astro         # Hero section
    │   ├── Problem.astro      # Problem statement section
    │   ├── Features.astro     # Features showcase
    │   ├── HowItWorks.astro   # How it works section
    │   ├── ForWho.astro       # Target audience section
    │   ├── Stats.astro        # Statistics section
    │   ├── CTASection.astro   # Call to action
    │   └── Footer.astro       # Footer
    └── styles/
        └── global.css         # Global styles and Tailwind directives
```

### 🚀 Getting Started

#### Prerequisites

- Node.js 20 or higher
- npm or yarn

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/zunihb/voltline-page.git
cd voltline-page
```

2. Install dependencies:
```bash
npm install
```

#### Development

Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### 📦 Building for Production

Create an optimized production build:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Type-check the project:
```bash
npm run check
```

### 🐳 Docker Deployment

#### Build the Docker image

```bash
docker build -t voltline-landing .
```

#### Run the container

```bash
docker run -p 80:80 voltline-landing
```

The site will be available at `http://localhost`

#### Multi-stage Build

The Dockerfile uses a multi-stage build process:
1. **Build stage**: Installs dependencies and builds the Astro site
2. **Production stage**: Serves static files using Nginx Alpine (~20MB final image)

### 🎨 Color Palette

The design uses an electric/energy-inspired color scheme:

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Electric Blue | `#2563EB` / `#1E40AF` | Headers, links, main elements |
| Accent | Orange/Amber | `#F59E0B` / `#D97706` | CTA buttons, highlights |
| Light Background | Very Light Gray | `#F8FAFC` | Alternate sections |
| Dark Background | Dark Blue | `#0F172A` | Hero, Stats, Footer |
| Text | Dark Gray | `#1E293B` | Body text |
| Text on Dark | White | `#FFFFFF` / `#F1F5F9` | Text on dark backgrounds |

### 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### 📄 License

All rights reserved © 2026 LiveElectric

---

## Español

### Descripción

Este repositorio contiene la landing page de **LiveElectric** (también conocido como Voltline), una aplicación PWA diseñada para empresas eléctricas que realizan trabajos en líneas vivas. LiveElectric es un sistema de gestión de faenas con checklists guiados que asegura que los inspectores de campo sigan protocolos de seguridad estandarizados.

### 🎯 Características Principales de LiveElectric

- **Offline-First**: Funciona sin internet en ubicaciones remotas, sincroniza automáticamente cuando hay conexión
- **Gestión de Procedimientos**: Plantillas estandarizadas con pasos críticos obligatorios
- **Trazabilidad Completa**: Cada acción registrada con timestamp y usuario
- **Evidencia Fotográfica**: Fotos vinculadas a pasos específicos del procedimiento
- **Multi-Tenant**: Múltiples empresas con aislamiento total de datos
- **Bilingüe**: Soporte completo en español e inglés

### 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** - Framework estático para rendimiento ultra-rápido
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitario
- **TypeScript** - Desarrollo con tipado seguro
- **Docker** - Build multi-etapa para despliegue en producción
- **Nginx** - Servidor web para archivos estáticos

### 📁 Estructura del Proyecto

```
voltline-landing/
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs        # Configuración de Tailwind con colores personalizados
├── package.json               # Dependencias y scripts
├── tsconfig.json              # Configuración de TypeScript
├── Dockerfile                 # Build Docker multi-etapa
├── .dockerignore              # Reglas de ignorado para Docker
├── public/
│   └── favicon.svg            # Favicon del sitio
└── src/
    ├── layouts/
    │   └── Layout.astro       # Layout base con estructura HTML
    ├── pages/
    │   └── index.astro        # Página principal
    ├── components/
    │   ├── Navbar.astro       # Barra de navegación
    │   ├── Hero.astro         # Sección hero
    │   ├── Problem.astro      # Sección de problema
    │   ├── Features.astro     # Características
    │   ├── HowItWorks.astro   # Cómo funciona
    │   ├── ForWho.astro       # Para quién es
    │   ├── Stats.astro        # Estadísticas
    │   ├── CTASection.astro   # Llamado a la acción
    │   └── Footer.astro       # Pie de página
    └── styles/
        └── global.css         # Estilos globales y directivas de Tailwind
```

### 🚀 Comenzar

#### Prerequisitos

- Node.js 20 o superior
- npm o yarn

#### Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/zunihb/voltline-page.git
cd voltline-page
```

2. Instalar dependencias:
```bash
npm install
```

#### Desarrollo

Iniciar el servidor de desarrollo:
```bash
npm run dev
```

El sitio estará disponible en `http://localhost:4321`

### 📦 Build de Producción

Crear un build optimizado para producción:
```bash
npm run build
```

Previsualizar el build de producción localmente:
```bash
npm run preview
```

Verificar tipos del proyecto:
```bash
npm run check
```

### 🐳 Despliegue con Docker

#### Construir la imagen Docker

```bash
docker build -t voltline-landing .
```

#### Ejecutar el contenedor

```bash
docker run -p 80:80 voltline-landing
```

El sitio estará disponible en `http://localhost`

#### Build Multi-Etapa

El Dockerfile usa un proceso de build multi-etapa:
1. **Etapa de build**: Instala dependencias y construye el sitio Astro
2. **Etapa de producción**: Sirve archivos estáticos usando Nginx Alpine (~20MB imagen final)

### 🎨 Paleta de Colores

El diseño usa una paleta inspirada en electricidad/energía:

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| Primario | Azul Eléctrico | `#2563EB` / `#1E40AF` | Headers, enlaces, elementos principales |
| Acento | Naranja/Ámbar | `#F59E0B` / `#D97706` | Botones CTA, highlights |
| Fondo Claro | Gris Muy Claro | `#F8FAFC` | Secciones alternas |
| Fondo Oscuro | Azul Oscuro | `#0F172A` | Hero, Stats, Footer |
| Texto | Gris Oscuro | `#1E293B` | Texto del cuerpo |
| Texto sobre Oscuro | Blanco | `#FFFFFF` / `#F1F5F9` | Texto sobre fondos oscuros |

### 🤝 Contribuir

¡Las contribuciones son bienvenidas! Por favor, siéntete libre de enviar un Pull Request.

### 📄 Licencia

Todos los derechos reservados © 2026 LiveElectric
