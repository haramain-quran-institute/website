import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";

export default defineConfig([
  ...nextVitals,
  {
    rules: {
      // These components synchronize browser-only state (localStorage, dialogs,
      // and third-party carousel APIs) after hydration.
      "react-hooks/set-state-in-effect": "off",
      // React Hook Form's watch API is intentionally not compiler-memoizable.
      "react-hooks/incompatible-library": "off",
    },
  },
  globalIgnores([".next/**", "next-build/**", "node_modules/**"]),
]);
