import type { ZudokuConfig } from "zudoku";

// Theme tokens lifted verbatim from wrestaurant-admin's src/styles/index.css so both
// surfaces feel like one product. Primary is the wrestaurant orange (#f26321 / oklch(0.637 0.2 36)).
const config: ZudokuConfig = {
  site: {
    title: "W Restaurant API",
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "W Restaurant API",
      width: "180px",
      href: "/",
    },
  },
  metadata: {
    title: "%s — W Restaurant API",
    description:
      "API para integrar pedidos, menús y ventas en tiempo real con Soft Restaurant. Documentación, referencia OpenAPI y guías.",
    favicon: "/favicon.svg",
    logo: "/logo-light.svg",
  },
  theme: {
    light: {
      // Warm cream base from admin: #f8f6f5
      background: "oklch(0.974 0.007 66)",
      foreground: "oklch(0.3211 0 0)",
      card: "oklch(0.99 0.004 66)",
      cardForeground: "oklch(0.3211 0 0)",
      popover: "oklch(0.99 0.004 66)",
      popoverForeground: "oklch(0.3211 0 0)",
      primary: "oklch(0.637 0.2 36)",
      primaryForeground: "oklch(1 0 0)",
      secondary: "oklch(0.9067 0 0)",
      secondaryForeground: "oklch(0.3211 0 0)",
      muted: "oklch(0.8853 0 0)",
      mutedForeground: "oklch(0.5103 0 0)",
      accent: "oklch(0.955 0.06 36)",
      accentForeground: "oklch(0.3211 0 0)",
      border: "oklch(0.8576 0 0)",
      input: "oklch(0.9067 0 0)",
      ring: "oklch(0.637 0.2 36 / 0.35)",
    },
    dark: {
      // Neutral dark grey from admin: oklch(0.2178 0 0)
      background: "oklch(0.2178 0 0)",
      foreground: "oklch(0.8853 0 0)",
      card: "oklch(0.2435 0 0)",
      cardForeground: "oklch(0.8853 0 0)",
      popover: "oklch(0.2435 0 0)",
      popoverForeground: "oklch(0.8853 0 0)",
      primary: "oklch(0.637 0.2 36)",
      primaryForeground: "oklch(0.2178 0 0)",
      secondary: "oklch(0.3092 0 0)",
      secondaryForeground: "oklch(0.8853 0 0)",
      muted: "oklch(0.285 0 0)",
      mutedForeground: "oklch(0.65 0 0)",
      accent: "oklch(0.32 0.06 55)",
      accentForeground: "oklch(0.8853 0 0)",
      border: "oklch(0.329 0 0)",
      input: "oklch(0.3092 0 0)",
      ring: "oklch(0.76 0.09 55 / 0.4)",
    },
    fonts: {
      sans: {
        url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      },
      mono: {
        url: "https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;600;700&display=swap",
        fontFamily:
          '"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace',
      },
    },
    // Translate hardcoded Zudoku UI strings to Spanish via CSS text replacement.
    // Zudoku has no built-in i18n yet, so we zero the original text via font-size:0
    // on the parent and inject Spanish via ::after. If Zudoku adds i18n later, drop this.
    customCss: `
      aside > div > .font-medium:has(.lucide-list-tree) {
        font-size: 0;
      }
      aside > div > .font-medium:has(.lucide-list-tree) > svg {
        font-size: 1rem;
        width: 1rem;
        height: 1rem;
      }
      aside > div > .font-medium:has(.lucide-list-tree)::after {
        content: "En esta página";
        font-size: 0.875rem;
      }
      button[aria-haspopup="dialog"]:has(.lucide-panel-left) > span {
        font-size: 0;
      }
      button[aria-haspopup="dialog"]:has(.lucide-panel-left) > span::after {
        content: "Menú";
        font-size: 0.875rem;
      }
    `,
  },
  navigation: [
    {
      type: "category",
      label: "Introducción",
      icon: "sparkles",
      items: ["bienvenido", "primeros-pasos"],
    },
    {
      type: "category",
      label: "Conceptos",
      icon: "book",
      items: ["autenticacion", "licencias", "workers", "limites", "errores"],
      // Note: page "workers" renders as "Sucursales" via its frontmatter sidebar_label.
    },
    {
      type: "link",
      to: "/api",
      label: "Referencia API",
      icon: "folder-cog",
    },
    {
      type: "category",
      label: "Avanzado",
      icon: "rocket",
      items: ["webhooks"],
    },
  ],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      path: "/api",
    },
  ],
  docs: {
    defaultOptions: {
      showLastModified: false,
    },
  },
};

export default config;
