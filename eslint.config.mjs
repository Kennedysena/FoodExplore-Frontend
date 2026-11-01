import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = [
  { ignores: [".next", "out", "next-env.d.ts"] },
  ...nextVitals,
  ...nextTs,
  {
    // Código gerado pelo shadcn CLI (sobrescrito a cada `shadcn add -o`) ainda não
    // segue as regras do React Compiler
    files: ["src/components/ui/**", "src/hooks/**"],
    rules: {
      "react-hooks/set-state-in-effect": "off",
      "react-hooks/purity": "off",
    },
  },
];

export default eslintConfig;
