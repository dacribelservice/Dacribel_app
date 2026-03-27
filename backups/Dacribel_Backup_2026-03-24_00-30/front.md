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

- **`bg-background` (#191b23):** Fondo principal oscuro premium.
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

---

## ⚡ Interactividad y Lógica de Negocio

### Gestión de Apertura (Event-Driven)
La comunicación entre la cuadrícula de productos y el panel de detalle se gestiona mediante un Store global de Zustand:
- **`useProductStore.ts`:** Centraliza el estado `isSheetOpen` y las funciones `openSheet`/`closeSheet`.

### ProductBottomSheet.tsx
- **Funcionalidad:** Panel que se despliza desde la parte inferior al seleccionar cualquier producto en el `ProductGrid`.
- **Interactividad:** Control de cantidades dinámico y selección de denominaciones.
- **Regla de Negocio:** Se ha omitido intencionalmente la funcionalidad de "Carrito de Compras". El flujo es directo: Selección -> Especificación de Cantidad -> Pago Inmediato.
- **Diseño:** Fondo sólido claro (#e9e9e9) con alto contraste para separar visualmente el flujo de compra del catálogo oscuro.

---

## 🗒 Bitácora de Desarrollo (Log)

### Sesión: 24 de marzo de 2026 (00:30 AM)
- **Implementación de Historial de Órdenes:**
    - Creación de `src/components/ui/OrderHistoryList.tsx` con soporte para datos de referidos (6 dígitos).
    - Creación de la ruta dinámica `src/app/orders/page.tsx`.
- **Navegación Persistente (SPA):**
    - Migración de etiquetas `<a>` estáticas a componentes `<Link>` de Next.js en `Sidebar.tsx` y `BottomNav.tsx`.
    - Implementación de lógica de "Estado Activo" para resaltar la ubicación del usuario en los menús.
    - Integración del framework global (Navbar, Sidebar, BottomNav) en todas las rutas para una experiencia sin interrupciones.
- **Respaldo del Sistema:** Generación de copia de seguridad local en la carpeta `/backups`.

---

**Última actualización:** 24 de marzo de 2026 (00:30 AM).
**Estado del Proyecto:** Home y Historial de Órdenes integrados y navegables.
