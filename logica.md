# Dacribel Backend Architecture & Logic Map

Este documento actúa como el mapa maestro para la **Fase 2: Integración con Backend y Lógica de Administración**. Define la estructura de datos en Supabase y el checklist de desarrollo para el panel de gestión.

---

## 🏛️ ESQUEMA DE BASE DE DATOS (Supabase PostgreSQL)

Estructura de tablas optimizada para una jerarquía de roles (Admin, Cliente) y un flujo de compra directa en criptomonedas con integración Web3.

### 1. `users`
- `id`: UUID (FK a Auth.users)
- `email`: string
- `name`: string
- `role`: enum ('ADMIN', 'CLIENT')
- `created_at`: timestamp

### 2. `categories_and_banners`
- `id`: UUID
- `type`: enum ('CATEGORY', 'BANNER')
- `title`: string
- `image_url`: string
- `link_url`: string
- `order`: integer
- `is_active`: boolean

### 3. `gift_cards` (Jerarquía de Producto)
- `id`: UUID
- `platform`: string
- `region`: string
- `denomination`: decimal
- `price_usdt`: decimal
- `image_url`: string
- `is_stock_available`: boolean

### 4. `digital_codes` (Stock Único)
- `id`: UUID
- `gift_card_id`: UUID
- `code`: string
- `status`: enum ('AVAILABLE', 'SOLD')
- `order_id`: UUID

### 5. `orders` (Transacciones Web3 Automáticas)
- `id`: UUID
- `user_id`: UUID
- `gift_card_id`: UUID
- `quantity`: integer
- `total_price`: decimal
- `crypto_hash`: string (Hash validado automáticamente por pasarela Web3).
- `payment_gateway`: enum ('NowPayments', 'MetaMask', 'TrustWallet')
- `status`: enum ('PENDING', 'COMPLETED', 'EXPIRED', 'REFUNDED')
- `created_at`: timestamp


---

## ✅ CHECKLIST DE LÓGICA Y CONEXIÓN

### Fase 2.1: Autenticación y Roles
- [ ] Conexión de Supabase Auth en `LoginForm` y `RegisterForm`.
- [ ] Middlewares de protección de rutas (ej. `/admin/*`).

### Fase 2.2: Flujo del Admin (Dashboard)
- [ ] **Estructura Administrativa**: Implementación de `src/app/admin/layout.tsx` para Sidebar persistente y `useAdminStore.ts` (Zustand) para separar la lógica de gestión de la tienda pública.
- [ ] **Escritorio de Control**: Estadísticas generales de ventas y rendimiento de la tienda.
- [ ] **Inventario**: CRUD de productos y carga masiva de códigos.
- [ ] **Sistema de Procesamiento Web3 (BEP20-USDT)**: Integración automática con pasarela Web3 para pagos USDT. Enfoque visual en **Short ID**, **Hash de Transacción** y estados (**PENDING**, **COMPLETED**, **EXPIRED**).


---

---

**Última revisión:** 26 de marzo de 2026.
**Estado de la Arquitectura:** Plan maestro simplificado (Roles: ADMIN, CLIENT). Integración Web3 directa y gestión administrativa centralizada.
