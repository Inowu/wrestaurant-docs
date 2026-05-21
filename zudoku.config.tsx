import type { ZudokuConfig } from "zudoku";

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
      "API para integrar pedidos, menús y ventas en tiempo real con Soft Restaurant. SDKs oficiales, sandbox y referencia OpenAPI.",
    favicon: "/favicon.svg",
    logo: "/logo-light.svg",
  },
  theme: {
    light: {
      primary: "#f26321",
      background: "#f8f6f5",
      foreground: "#0f172a",
      accent: "#fff3ec",
    },
    dark: {
      primary: "#f26321",
      background: "#221610",
      foreground: "#f1f5f9",
      accent: "#3a2218",
    },
    fonts: {
      sans: {
        url: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
        fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif",
      },
      mono: {
        fontFamily:
          "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace",
      },
    },
  },
  navigation: [
    {
      type: "category",
      label: "Introducción",
      icon: "sparkles",
      items: ["/index", "/primeros-pasos"],
    },
    {
      type: "category",
      label: "Conceptos",
      icon: "book",
      items: [
        "/autenticacion",
        "/licencias",
        "/workers",
        "/limites",
        "/errores",
      ],
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
      items: ["/webhooks"],
    },
  ],
  redirects: [{ from: "/", to: "/index" }],
  apis: [
    {
      type: "file",
      input: "./apis/openapi.json",
      path: "/api",
    },
  ],
};

export default config;
