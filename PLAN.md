# Plan de Implementacion: Landing Page LiveElectric

> **Objetivo**: Crear una landing page estatica, ligera y profesional para LiveElectric usando Astro + Tailwind CSS, desplegable en Dokploy mediante Docker.

---

## Contexto del Producto

**LiveElectric** es una aplicacion PWA para empresas electricas que realizan trabajos en lineas vivas. Es un sistema de gestion de faenas con checklists guiados que asegura que los inspectores de campo sigan protocolos de seguridad estandarizados.

### Caracteristicas clave del producto

| Caracteristica | Descripcion |
|---|---|
| Offline-first | Funciona sin internet en ubicaciones remotas, sincroniza automaticamente |
| Gestion de procedimientos | Plantillas estandarizadas con pasos criticos obligatorios |
| Trazabilidad completa | Cada accion registrada con timestamp y usuario |
| Evidencia fotografica | Fotos vinculadas a pasos especificos del procedimiento |
| Multi-tenant | Multiples empresas con aislamiento total de datos |
| Bilingue nativo | Soporte completo en espanol e ingles |

### Usuarios objetivo (B2B)

- Empresas de servicios electricos
- Inspectores de campo
- Jefes de operaciones
- Oficiales de cumplimiento y seguridad

### Propuesta de valor

Digitaliza y asegura el cumplimiento de procedimientos criticos de seguridad en trabajos de alto riesgo, eliminando el papel y garantizando que ningun paso importante se omita.

---

## Stack Tecnologico

| Tecnologia | Razon |
|---|---|
| **Astro** | Framework estatico, genera HTML puro sin JS innecesario. Ultra rapido |
| **Tailwind CSS** | Estilos utilitarios, CSS final purgado y minimo |
| **SVGs inline** | Iconos sin dependencias externas (copiar de Lucide/Heroicons) |
| **Dockerfile multi-stage** | Node build + Nginx alpine para Dokploy (~20MB imagen final) |

**NO usar**: React, Vue, ni ningun framework JS de runtime. Todo es contenido estatico.

---

## Paleta de Colores

Inspirada en electricidad/energia con look corporativo serio:

| Rol | Color | Hex | Uso |
|---|---|---|---|
| Primario | Azul electrico | `#1E40AF` / `#2563EB` | Headers, enlaces, elementos principales |
| Acento | Naranja/Ambar | `#F59E0B` / `#D97706` | Botones CTA, highlights, iconos de acento |
| Fondo claro | Gris muy claro | `#F8FAFC` | Secciones alternas |
| Fondo oscuro | Azul oscuro | `#0F172A` | Hero, Stats, Footer |
| Texto principal | Gris oscuro | `#1E293B` | Texto body |
| Texto sobre oscuro | Blanco | `#FFFFFF` / `#F1F5F9` | Texto en fondos oscuros |

Definir estos colores en `tailwind.config.mjs` bajo `theme.extend.colors` para usarlos como clases utilitarias (ej: `bg-primary`, `text-accent`).

---

## Estructura de Archivos

```
voltline-landing/
├── astro.config.mjs          # Configuracion de Astro
├── tailwind.config.mjs        # Configuracion de Tailwind con colores custom
├── package.json               # Dependencias: astro, @astrojs/tailwind, tailwindcss
├── tsconfig.json              # Configuracion TypeScript (Astro lo incluye por defecto)
├── Dockerfile                 # Multi-stage build para Dokploy
├── .dockerignore              # Ignorar node_modules, .git, etc.
├── public/
│   └── favicon.svg            # Icono del sitio (rayo/bolt simple en SVG)
└── src/
    ├── layouts/
    │   └── Layout.astro       # Layout base: <html>, <head>, meta tags, fonts, <slot/>
    ├── pages/
    │   └── index.astro        # Pagina principal: importa y compone todos los componentes
    ├── components/
    │   ├── Navbar.astro       # Seccion 1: Navegacion
    │   ├── Hero.astro         # Seccion 2: Hero principal
    │   ├── Problem.astro      # Seccion 3: El problema que resolvemos
    │   ├── Features.astro     # Seccion 4: Caracteristicas principales
    │   ├── HowItWorks.astro   # Seccion 5: Como funciona
    │   ├── ForWho.astro       # Seccion 6: Para quien es
    │   ├── Stats.astro        # Seccion 7: Estadisticas/numeros
    │   ├── CTASection.astro   # Seccion 8: Call to action final
    │   └── Footer.astro       # Seccion 9: Footer
    └── styles/
        └── global.css         # Tailwind directives + estilos base
```

---

## Paso a Paso de Implementacion

### Paso 1: Inicializar el Proyecto

Ejecutar en la raiz del workspace (`/Users/zuni/Desktop/Voltline Page/`):

```bash
npm create astro@latest . -- --template minimal --no-git --no-install
```

Si ya hay archivos, seleccionar sobrescribir. Luego instalar dependencias:

```bash
npm install
npx astro add tailwind
```

Esto generara `astro.config.mjs` con la integracion de Tailwind y `tailwind.config.mjs`.

### Paso 2: Configurar Tailwind

Editar `tailwind.config.mjs` para incluir la paleta de colores personalizada:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2563EB',
          dark: '#1E40AF',
          light: '#3B82F6',
        },
        accent: {
          DEFAULT: '#F59E0B',
          dark: '#D97706',
          light: '#FBBF24',
        },
        dark: {
          DEFAULT: '#0F172A',
          light: '#1E293B',
        },
        surface: '#F8FAFC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

### Paso 3: Crear `src/styles/global.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply font-sans text-dark-light antialiased;
  }
}
```

### Paso 4: Crear `src/layouts/Layout.astro`

Layout base que envuelve toda la pagina:

```astro
---
interface Props {
  title: string;
  description?: string;
}

const { title, description = 'LiveElectric - Seguridad en lineas vivas, digitalizada. Sistema de gestion de faenas con checklists guiados para empresas electricas.' } = Astro.props;
---

<!doctype html>
<html lang="es">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content={description} />
    <meta name="generator" content={Astro.generator} />

    <!-- Open Graph -->
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />

    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

    <!-- Font: Inter desde Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

    <title>{title}</title>
  </head>
  <body>
    <slot />
  </body>
</html>
```

**Importar** `global.css` en este layout o en el `index.astro`.

### Paso 5: Crear los Componentes (uno por uno)

#### 5.1 — `Navbar.astro`

- Barra fija (`sticky top-0`) con fondo blanco/translucido y blur (`backdrop-blur`)
- Logo "LiveElectric" a la izquierda (texto estilizado con un icono de rayo SVG inline)
- Links de navegacion al centro: "Caracteristicas", "Como funciona", "Contacto" (anclas `#features`, `#how-it-works`, `#contact`)
- Boton CTA a la derecha: "Solicitar Demo" con estilo `bg-accent text-white rounded-lg`
- Mobile: hamburger menu con toggle simple (puede ser un `<details>` HTML nativo para evitar JS, o un checkbox CSS trick)

#### 5.2 — `Hero.astro`

- Fondo oscuro (`bg-dark`) con un patron sutil CSS (grid de puntos o gradiente radial con opacity baja)
- Titulo grande (text-4xl md:text-6xl font-extrabold text-white): **"Seguridad en Lineas Vivas, Digitalizada"**
- Subtitulo (text-lg md:text-xl text-slate-300): "Sistema de gestion de faenas con checklists guiados que asegura el cumplimiento de protocolos de seguridad en trabajos de alto riesgo"
- Dos botones CTA:
  - Primario: "Solicitar Demo" → `bg-accent hover:bg-accent-dark text-white`
  - Secundario: "Conocer mas" → `border border-white/30 text-white hover:bg-white/10`
- Padding generoso: `py-24 md:py-32`
- Opcional: un badge arriba del titulo tipo "Plataforma PWA para empresas electricas"

#### 5.3 — `Problem.astro`

- Fondo blanco, padding `py-20`
- Titulo de seccion: "El riesgo de los procedimientos en papel"
- 3 tarjetas en grid (grid-cols-1 md:grid-cols-3 gap-8) cada una con:
  1. **Icono** (SVG rojo/naranja) + **"Pasos omitidos"** + texto: "Sin verificacion digital, pasos criticos de seguridad pueden saltarse sin registro alguno"
  2. **Icono** + **"Sin trazabilidad"** + texto: "El papel se pierde, se dana o se falsifica. No hay forma de auditar el cumplimiento real"
  3. **Icono** + **"Demoras operativas"** + texto: "La gestion manual genera cuellos de botella, retrasos en reportes y falta de visibilidad en tiempo real"

#### 5.4 — `Features.astro`

- `id="features"` para ancla de navegacion
- Fondo `bg-surface` (gris claro), padding `py-20`
- Titulo: "Todo lo que necesitas para operar con seguridad"
- Grid de 6 tarjetas (grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6):

| # | Icono | Titulo | Texto |
|---|---|---|---|
| 1 | WifiOff | Offline-First | Funciona sin internet. Sincroniza automaticamente cuando hay conectividad |
| 2 | ClipboardCheck | Checklists Guiados | Plantillas estandarizadas con pasos criticos que deben completarse |
| 3 | Shield | Trazabilidad Total | Cada accion queda registrada con timestamp, usuario y ubicacion |
| 4 | Camera | Evidencia Fotografica | Captura fotos vinculadas a pasos especificos del procedimiento |
| 5 | Building | Multi-Tenant | Multiples empresas con aislamiento total de datos y configuracion independiente |
| 6 | Globe | Bilingue Nativo | Soporte completo en espanol e ingles, configurable por usuario |

- Cada tarjeta: `bg-white rounded-xl p-6 shadow-sm border border-slate-100`
- Icono en un circulo `bg-primary/10 text-primary w-12 h-12 rounded-lg flex items-center justify-center`

#### 5.5 — `HowItWorks.astro`

- `id="how-it-works"` para ancla
- Fondo blanco, padding `py-20`
- Titulo: "Tres pasos para transformar tu operacion"
- 3 columnas con numeros grandes (01, 02, 03) estilizados:
  1. **"Configura"** - "Define tus procedimientos, plantillas y equipos de trabajo en minutos"
  2. **"Ejecuta"** - "Los inspectores completan checklists guiados en terreno, con o sin conexion"
  3. **"Supervisa"** - "Monitorea cumplimiento, revisa evidencia y genera reportes en tiempo real"
- Cada paso: numero grande en `text-6xl font-extrabold text-primary/10`, titulo en `text-xl font-bold`, descripcion en `text-slate-600`
- Linea conectora entre pasos (borde punteado horizontal en desktop, vertical en mobile)

#### 5.6 — `ForWho.astro`

- Fondo `bg-surface`, padding `py-20`
- Titulo: "Disenado para cada rol en tu organizacion"
- 3 tarjetas destacadas (pueden ser mas altas, con icono grande):
  1. **Inspectores de Campo**: "Checklists intuitivos que guian cada paso, incluso sin conexion a internet"
  2. **Jefes de Operaciones**: "Visibilidad completa del estado de cada faena y equipo en tiempo real"
  3. **Oficiales de Seguridad**: "Reportes de cumplimiento automaticos y evidencia auditable de cada procedimiento"

#### 5.7 — `Stats.astro`

- Banda oscura (`bg-dark text-white`), padding `py-16`
- 4 estadisticas en fila (grid-cols-2 md:grid-cols-4):
  - **"99.9%"** - "Disponibilidad offline"
  - **"50%"** - "Reduccion en tiempo de reporte"
  - **"100%"** - "Trazabilidad de procedimientos"
  - **"0"** - "Pasos criticos omitidos"
- Numeros en `text-4xl md:text-5xl font-extrabold text-accent`
- Descripciones en `text-sm text-slate-400`

#### 5.8 — `CTASection.astro`

- `id="contact"` para ancla
- Fondo con gradiente: `bg-gradient-to-br from-primary-dark to-primary`
- Texto blanco centrado
- Titulo: "Transforma la seguridad de tu equipo"
- Subtitulo: "Agenda una demostracion y descubre como LiveElectric puede digitalizar tus operaciones"
- Boton grande: "Solicitar Demo Gratuita" → `bg-accent hover:bg-accent-dark text-white px-8 py-4 text-lg rounded-xl font-semibold`
- Texto pequeno debajo: "Sin compromiso. Implementacion en menos de una semana."

#### 5.9 — `Footer.astro`

- Fondo `bg-dark` con texto `text-slate-400`
- Layout simple: Logo + copyright a la izquierda, links a la derecha
- Links: "Caracteristicas", "Como funciona", "Contacto", "Politica de privacidad"
- Linea inferior: "2026 LiveElectric. Todos los derechos reservados."

### Paso 6: Componer `src/pages/index.astro`

```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Hero from '../components/Hero.astro';
import Problem from '../components/Problem.astro';
import Features from '../components/Features.astro';
import HowItWorks from '../components/HowItWorks.astro';
import ForWho from '../components/ForWho.astro';
import Stats from '../components/Stats.astro';
import CTASection from '../components/CTASection.astro';
import Footer from '../components/Footer.astro';
---

<Layout title="LiveElectric | Seguridad en Lineas Vivas, Digitalizada">
  <Navbar />
  <main>
    <Hero />
    <Problem />
    <Features />
    <HowItWorks />
    <ForWho />
    <Stats />
    <CTASection />
  </main>
  <Footer />
</Layout>
```

### Paso 7: Crear `public/favicon.svg`

Un SVG simple de un rayo/bolt en color amarillo/ambar:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B">
  <path d="M13 2L3 14h9l-1 10 10-12h-9l1-10z"/>
</svg>
```

### Paso 8: Crear el Dockerfile

```dockerfile
# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### Paso 9: Crear `.dockerignore`

```
node_modules
.git
.gitignore
*.md
.vscode
.cursor
```

### Paso 10: Probar Localmente

```bash
# Desarrollo
npm run dev

# Build de produccion
npm run build

# Preview del build
npm run preview
```

Verificar:
- [ ] Todas las secciones se renderizan correctamente
- [ ] Responsive funciona en mobile, tablet y desktop
- [ ] Los enlaces ancla (#features, #how-it-works, #contact) navegan correctamente
- [ ] El build genera archivos estaticos en `/dist`
- [ ] No hay errores en consola

### Paso 11: Despliegue en Dokploy

1. Subir el proyecto a un repositorio Git (GitHub)
2. En Dokploy, crear una nueva aplicacion
3. Conectar el repositorio
4. Dokploy detectara el `Dockerfile` automaticamente
5. El contenedor expondra el puerto 80 con Nginx sirviendo los archivos estaticos
6. Configurar el dominio personalizado en Dokploy

---

## Notas Importantes para el Agente Ejecutor

1. **No usar JavaScript de runtime**: Todo el contenido es estatico. No agregar `<script>` tags excepto para el menu mobile (si es necesario, usar el patron de checkbox CSS o `<details>`).
2. **Iconos SVG inline**: Copiar los paths SVG directamente de [Lucide Icons](https://lucide.dev/icons/) dentro de los componentes. No instalar paquetes de iconos.
3. **Sin imagenes pesadas**: Usar gradientes CSS, patrones SVG y colores de fondo en lugar de fotografias. Esto mantiene la pagina ultraliviana.
4. **Animaciones sutiles**: Solo usar `transition` y `hover` de Tailwind. No agregar librerias de animacion.
5. **Accesibilidad**: Usar tags semanticos (`<nav>`, `<main>`, `<section>`, `<footer>`), atributos `aria-label` donde corresponda, y contraste de colores adecuado.
6. **El diseno de referencia** esta en `/Users/zuni/Desktop/Voltline Page/diseno.webp` — es una pagina de ingenieria consultora. Usar como inspiracion para el layout y la composicion visual, pero adaptando todo el contenido y colores a LiveElectric.
