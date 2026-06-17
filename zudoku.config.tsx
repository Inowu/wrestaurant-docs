import type { ZudokuConfig } from "zudoku";
// Ordered list of public OpenAPI specs (newest version first), generated from the
// synced openapi.v<N>.json files by scripts/gen-api-versions.mjs before every build.
// Static JSON import keeps the config browser-safe (Zudoku bundles it isomorphically).
// Zudoku derives each version's label/segment from the spec's own info.version
// ("v0", "v1", …) and treats input[0] as the default.
import apiVersionInputs from "./apis/versions.json";

// Renders a @wrestaurant/sdk usage example for an operation, shown as the
// "TypeScript (SDK)" code sample on every endpoint in the API reference. The SDK
// method name is the camelCased operationId (e.g. GetProducts -> getProducts),
// so this stays correct as endpoints change.
function sdkCodeSnippet(operation: { operationId?: string }): string {
  const opId = operation?.operationId;
  const method = opId ? opId.charAt(0).toLowerCase() + opId.slice(1) : null;
  const call = method
    ? `await client.endpoints.${method}({\n  licenseKey: "DS5D2368HCME4O9X",\n})`
    : `// Consulta la lista de métodos en la guía del SDK`;
  return [
    `import { WrestaurantApiClient } from "@wrestaurant/sdk";`,
    ``,
    `const client = new WrestaurantApiClient({`,
    `  apiKey: process.env.WRESTAURANT_API_KEY!, // wrst_live_...`,
    `});`,
    ``,
    `const response = ${call};`,
    `console.log(response);`,
  ].join("\n");
}

// Theme tokens lifted verbatim from wrestaurant-admin's src/styles/index.css so both
// surfaces feel like one product. Primary is the wrestaurant orange (#f26321 / oklch(0.637 0.2 36)).
const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "W Restaurant API",
      width: "180px",
      href: "https://wrestaurantapi.com",
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
      aside > .font-medium:has(.lucide-list-tree) {
        font-size: 0;
      }
      aside > .font-medium:has(.lucide-list-tree) > svg {
        font-size: 1rem;
        width: 1rem;
        height: 1rem;
      }
      aside > .font-medium:has(.lucide-list-tree)::after {
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
      button > div:has(> svg.lucide-search) {
        font-size: 0;
      }
      button > div:has(> svg.lucide-search) > svg {
        font-size: 0.875rem;
      }
      button > div:has(> svg.lucide-search)::after {
        content: "Buscar";
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
      items: ["autenticacion", "licencias", "workers", "limites", "errores", "idempotencia"],
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
      label: "SDKs",
      icon: "code",
      items: [
        "sdk-typescript",
        {
          type: "link",
          to: "https://www.npmjs.com/package/@wrestaurant/sdk",
          label: "npm: @wrestaurant/sdk",
          icon: "package",
        },
      ],
    },
    // {
    //   type: "category",
    //   label: "Avanzado",
    //   icon: "rocket",
    //   items: ["webhooks"],
    // },
  ],
  apis: {
    type: "file",
    input: apiVersionInputs,
    path: "/api",
    options: {
      examplesLanguage: "typescript",
      supportedLanguages: [
        { value: "typescript", label: "TypeScript (SDK)" },
        { value: "shell", label: "cURL" },
        { value: "python", label: "Python" },
      ],
      generateCodeSnippet: ({
        selectedLang,
        operation,
      }: {
        selectedLang: string;
        operation: { operationId?: string };
      }) => (selectedLang === "typescript" ? sdkCodeSnippet(operation) : false),
    },
  },
  docs: {
    defaultOptions: {
      showLastModified: false,
    },
  },
  // Built-in static search. Pagefind indexes the prerendered HTML at build time
  // (no external service, account, or API key), so it works on the same static
  // `zudoku build` output served by Dokploy.
  search: {
    type: "pagefind",
    maxSubResults: 3,
  },
};

export default config;
