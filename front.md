# Dacribel Frontend Architecture Documentation

Este documento detalla el progreso actual en la reconstrucción modular del frontend de **Dacribel**, migrando desde una estructura estática hacia una arquitectura moderna y escalable.

## 🛠 Tech Stack
El proyecto ha sido construido utilizando las siguientes tecnologías:
- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (v4) con diseño "Ethereal Vault".
- **Lenguaje:** TypeScript (Tipado estricto).
- **Iconografía:** Lucide React.
- **Animaciones:** Framer Motion (Transiciones fluidas y spring physics).
- **Gestión de Estado:** Zustand (Estado atómico global).

---

## 🎨 Paleta Premium (Design Tokens)
Se han implementado tokens estandarizados en `globals.css` y `tailwind.config.ts` para mantener la consistencia visual:

- **`bg-background` (#11131b):** Fondo principal oscuro premium.
- **`bg-secondary` (#30334a):** Contenedores secundarios, tarjetas y campos de búsqueda.
- **`text-action` / `bg-action` (#f2b92f):** Color de énfasis para llamadas a la acción, precios y estados activos.
- **`text-inactive` (#535353):** Textos apagados y placeholders.
- **`bottomSheet` (#e9e9e9):** Color sólido para el panel de compra interactivo.

---

## 🏗 Componentes Modulares Creados
Siguiendo el principio de **Responsabilidad Única (SRP)**, la interfaz se ha fragmentado en las siguientes piezas:

### Navegación (`src/components/shared/`)
1. **Navbar.tsx:** Barra superior con logo, buscador (responsive) y menú de usuario.
2. **Sidebar.tsx:** Navegación lateral para escritorio con diseño Glassmorphism.
3. **BottomNav.tsx:** Navegación optimizada para dispositivos móviles fija en la parte inferior.

### Interfaz de Usuario (`src/components/ui/`)
1. **HeroBanner.tsx:** Carrusel promocional con efectos de sombra dorada y micro-animaciones.
2. **SearchBar.tsx:** Barra de búsqueda integrada con diseño premium y soporte para iconos.
3. **CategoryCircles.tsx:** Selector visual de plataformas (consolas) con scroll horizontal.
4. **CategoryFilter.tsx:** Sistema de filtrado por plataformas, denominaciones y regiones.
5. **ProductGrid.tsx:** Cuadrícula de tarjetas de productos interactiva con estados de hover.
6. **ProfileMenu.tsx:** Menú desplegable interactivo con **Escalado Responsivo Ultra-Premium** (`w-56` en móvil, `w-72` en PC) y efecto Glassmorphism.

### Módulo de Autenticación (`src/components/ui/`)
1. **LoginForm.tsx:** Formulario de acceso con soporte para Google SSO y validación local.
2. **RegisterForm.tsx:** Flujo de creación de cuenta con campos extendidos.
3. **ForgotPasswordForm.tsx:** Sistema de recuperación de credenciales mediante email.
*Todos los componentes de este módulo utilizan `"use client"`, aplican estética Glassmorphism avanzada y están interconectados mediante `<Link>` para una navegación instantánea sin recargas de página.*

---

## 🗺 Rutas y Navegación (SPA)
La aplicación funciona como una Single Page Application (SPA) con las siguientes rutas operativas:

- **`/` (Home):** Catálogo principal de productos y banners.
- **`/orders` (Historial):** Listado detallado de transacciones y estados de orden.
- **`/login` / `/register` / `/forgot-password`:** Flujo circular de experiencia de usuario (UX) que permite navegar entre acceso, registro y recuperación de forma fluida.

---

## ⚡ Interactividad y Lógica de Negocio

### Gestión de Apertura (Event-Driven)
La comunicación entre la cuadrícula de productos y el panel de detalle se gestiona mediante un Store global de Zustand:
- **`useProductStore.ts`:** Centraliza el estado `isSheetOpen` y las funciones `openSheet`/`closeSheet`.

### ProductBottomSheet.tsx
- **Funcionalidad:** Panel que se despliza desde la parte inferior al seleccionar cualquier producto en el `ProductGrid`.
- **Interactividad:** Control de cantidades dinámico y selección de denominaciones.
- **Regla de Negocio:** **Flujo de compra directa sin carrito de compras.** El flujo es directo: Selección -> Especificación de Cantidad -> Pago Inmediato.
- **Diseño:** Fondo sólido claro (#e9e9e9) con alto contraste para separar visualmente el flujo de compra del catálogo oscuro.

---

## 🗒 Bitácora de Desarrollo (Log)

### Sesión: 24 de marzo de 2026 (02:30 PM)
- **Finalización de Interfaz de Autenticación:**
    - Implementación de **Login**, **Registro** y **Recuperación de Contraseña**.
    - Integración de **ProfileMenu** con diseño responsivo refinado.
- **Auditoría de Arquitectura:**
    - Sincronización del documento maestro `front.md` con la estructura de archivos real.
    - Verificación del escalado responsivo en todos los componentes UI.

---

**Última actualización:** 24 de marzo de 2026.
**Estado del Proyecto:** **Fase 1 (Frontend UI) Completada al 100%.**
El cascarón visual, la navegación modular y la interactividad de eventos están listos. El proyecto está preparado para la **Fase 2: Integración con Backend/Supabase**.
