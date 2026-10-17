 <div align="center">

# KKEOPI 

### 커피 한 잔, 좋은 순간.
*A cup of coffee. A moment worth keeping.*

**A digital coffeehouse experience, from the first scroll to the final sip.**

[![HTML5](https://img.shields.io/badge/HTML5-3B291F?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS-3B291F?style=flat-square&logo=css&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-3B291F?style=flat-square&logo=javascript&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TypeScript](https://img.shields.io/badge/TypeScript-3B291F?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Supabase](https://img.shields.io/badge/Supabase-3B291F?style=flat-square&logo=supabase&logoColor=white)](https://supabase.com/)
[![Vite](https://img.shields.io/badge/Vite-3B291F?style=flat-square&logo=vite&logoColor=white)](https://vite.dev/)

[**Explore the Repository**](https://github.com/azinamouto/kopi-site) · [**Report an Issue**](https://github.com/azinamouto/kopi-site/issues)

---

**BREWED WITH CODE. SERVED WITH CHARACTER.**

</div>

## 01 / The Coffeehouse

KKEOPI is a coffee-inspired web application that combines a visually expressive storefront with digital ordering, order tracking, and administration tools.

Built with an emphasis on atmospheric design and practical interactions, the project explores how a simple café website can evolve into a more complete digital customer experience.

The interface draws inspiration from warm espresso tones, fluid motion, soft depth, and contemporary coffeehouse branding.

KKEOPI is more than a static landing page. Its repository includes customer-facing pages, order-management functionality, database integration, and real-time communication components.

> **A good interface is like a good cup of coffee.**
>
> Thoughtfully made, easy to enjoy, and worth coming back to.

---

## 02 / The Experience

| Experience | Description |
|---|---|
| **Coffeehouse Homepage** | Interactive landing page with coffee-inspired visuals and motion |
| **Digital Menu** | Browse products, categories, and coffee selections |
| **Ordering Interface** | Customer order flow supported by application logic |
| **Live Order Tracker** | View order progress and status changes |
| **In-Page Notifications** | Dismissible alerts when a tracked order changes status |
| **Admin Interface** | Administrative pages and server-side order-management functionality |
| **Gallery** | Visual presentation of the coffeehouse |
| **About Page** | Brand-oriented information and storytelling |
| **Responsive Navigation** | Navigation patterns for desktop and mobile visitors |

### From browsing to brewing

```text
DISCOVER THE CAFE
       │
       ▼
EXPLORE THE MENU
       │
       ▼
SELECT YOUR ORDER
       │
       ▼
SUBMIT ORDER
       │
       ▼
TRACK ORDER STATUS
       │
       ▼
PENDING → CONFIRMED → PREPARING → READY
                                    │
                                    ▼
                                 COMPLETED
```

Orders may also be cancelled through the supported order lifecycle.

---

## 03 / Visual Direction

### A little warmth in every interaction.

KKEOPI's visual design is built around a recognizable coffeehouse identity rather than a conventional application dashboard.

**Design elements include:**

- Espresso, caramel, cream, and coffee-inspired colors
- Liquid and wave-inspired graphic treatments
- Interactive motion and hover effects
- Atmospheric depth and layered backgrounds
- Visual product presentation
- Responsive storefront layouts
- Typography chosen to balance warmth and readability

The design aims to make the experience feel less like filling out an online form and more like stepping into a digital café.

**Design philosophy:** Visual personality should support usability, not compete with it.

---

## 04 / Technology Behind the Brew

<div align="center">

<img src="https://skillicons.dev/icons?i=html,css,js,ts,react,vite,tailwind,bootstrap,nodejs,express,supabase,postgres,vercel,git,github&theme=dark&perline=8" alt="KKEOPI Technology Stack" />

</div>

| Layer | Technology |
|---|---|
| **Customer Interface** | HTML, CSS, JavaScript |
| **Application Tooling** | TypeScript, React, Vite |
| **Styling** | Custom CSS, Bootstrap, Tailwind tooling |
| **Server** | Node.js, Express |
| **Real-Time Communication** | WebSockets (`ws`) |
| **Database Integration** | Supabase / PostgreSQL |
| **Static Deployment** | Vercel configuration |
| **Development** | Git and npm |

The repository combines traditional multipage frontend files with modern JavaScript tooling and a separate Node.js server entry point.

---

## 05 / Project Architecture

```text
kopi-site/
│
├── index.html              # Coffeehouse homepage
├── KKEOPI.html             # Storefront entry
├── KKEOPI.css              # Storefront styling
├── KKEOPI.js               # Storefront interactions
│
├── products.html           # Product menu
├── products.css
├── products.js
│
├── order-status.html       # Order tracking
├── admin.html              # Administration UI
├── about.html              # About the coffeehouse
├── gallery.html            # Coffeehouse gallery
│
├── assets/                 # Images and browser assets
├── public/                 # Public static assets
├── src/                    # Application source
├── server/                 # Backend and data access
│
├── server.ts               # Express + WebSocket server
├── supabase_schema.sql     # Database schema
├── NOTIFICATIONS.md        # Notification documentation
├── scripts/                # Build and test utilities
│
├── package.json
├── vite.config.ts
├── vercel.json
└── .env.example
```

### Application flow

```text
              KKEOPI
                 │
       ┌─────────┴─────────┐
       │                   │
   CUSTOMER             ADMIN
       │                   │
   Browse Menu       Administration
       │                   │
   Place Order       Manage Orders
       │                   │
   Order Tracking ──────────┘
       │
       ▼
   Status Updates
       │
       ├── WebSocket events
       └── Polling fallback

        Supabase / PostgreSQL
```

This is a conceptual overview of the repository's application components. The static Vercel build and Node server have different deployment capabilities.

---

## 06 / Run Locally

### Requirements

- Node.js and npm
- Git
- A configured Supabase project for database-backed features
- Appropriate environment credentials

### 1. Clone the repository

```bash
git clone https://github.com/azinamouto/kopi-site.git
cd kopi-site
```

### 2. Install dependencies

```bash
npm install
```

Or use `npm ci` for installation from the committed lockfile.

### 3. Configure your environment

Create a `.env` file using the provided example:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

Configure the relevant variables:

```dotenv
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

ADMIN_USER=
ADMIN_PASSWORD=
GOOGLE_CLIENT_ID=
```

Other variables are documented in `.env.example`.

**Security:** Never commit real credentials, service-role keys, administrator passwords, or private API keys to the repository. Service-role credentials must remain server-side.

### 4. Start the development server

```bash
npm run dev
```

The Express development server is configured to use:

```text
http://localhost:3005
```

### 5. Additional commands

| Command | Purpose |
|---|---|
| `npm run dev` | Start the local server with `tsx` |
| `npm run build` | Build the Vite application and bundled server |
| `npm run start` | Start the bundled server |
| `npm run preview` | Preview the Vite build |
| `npm run lint` | Run TypeScript checking |
| `npm run build:vercel` | Generate the static deployment output |

The repository also provides a simulated order UI regression script:

```bash
node scripts/test-order-ui.mjs
```

---

## 07 / Live Order Tracking

One of KKEOPI's more functional components is the order-status tracking system.

The server supports WebSocket connections through:

```text
/ws
```

The order lifecycle includes:

```text
PENDING
   ↓
CONFIRMED
   ↓
PREPARING
   ↓
READY
   ↓
COMPLETED
```

`CANCELLED` is a separate supported status.

### Status notifications

The notification system supports in-page alerts when the selected order changes state.

Its documented behavior includes:

- WebSocket-driven status updates
- Polling as a fallback mechanism
- Dismissible on-page alerts
- Duplicate-notification prevention
- Order-specific tracking
- Optional browser notification permission

**Important limitation:** Browser-closed push notifications are not implemented. The tracking page must remain open for in-page alerts, and real-time updates depend on the relevant backend connection.

See [NOTIFICATIONS.md](./NOTIFICATIONS.md) for technical details.

---

## 08 / Deployment Notes

KKEOPI includes a Vercel configuration for static deployment.

The repository's deployment script:

```bash
npm run build:vercel
```

Generates an allowlisted static output directory.

The static export excludes private environment files, server bundles, SQL files, and backend source.

**Static deployment is not equivalent to deploying the full Express/WebSocket application.**

Features relying on server-side routes or real-time socket services require compatible backend hosting and configuration. Database-backed features also require correct Supabase authorization and access policies.

Before deploying publicly, verify authentication, database access rules, credential handling, and order-management security.

---

## 09 / Development Philosophy

```text
01  DESIGN WITH CHARACTER
    A recognizable experience is better than a generic template.

02  INTERACTION WITH PURPOSE
    Motion should guide attention and support the interface.

03  FUNCTION BEFORE ILLUSION
    A working flow matters more than an impressive screenshot.

04  ENGINEER FOR REAL USE
    Reliability, maintainability, and security are part of design.

05  KEEP EVOLVING
    Explore, test, refine, repeat.
```

KKEOPI serves as both a coffeehouse website concept and a practical exercise in connecting frontend design with application functionality.

The project continues to explore expressive web interfaces, digital ordering workflows, and real-time user experiences.

---

## 10 / Credits

**Project:** KKEOPI — Coffeehouse Web Experience

**Development:** [azinamouto](https://github.com/azinamouto)

**Focus:** Frontend engineering, user experience, application development, and digital coffeehouse systems.

Built with code, curiosity, and a very reasonable appreciation for coffee.

---

<div align="center">

### ONE MORE CUP?

*Some ideas are brewed. Others are built.*

**커피와 코드, 그리고 작은 아이디어들.**

*Coffee, code, and little ideas.*

[![Repository](https://img.shields.io/badge/EXPLORE_REPOSITORY-3B291F?style=for-the-badge&logo=github&logoColor=white)](https://github.com/azinamouto/kopi-site)

<sub>DESIGNED TO FEEL GOOD. ENGINEERED TO WORK.</sub>

**KKEOPI © — Crafted with care.**

</div> 
