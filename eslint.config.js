import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["src/**/*.{js,jsx,ts,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      "react/no-unknown-property": [
        "error",
        {
          ignore: [
            "intensity",
            "position",
            "castShadow",
            "receiveShadow",
            "args",
            "polygonOffset",
            "polygonOffsetFactor",
            "flatShading",
          ],
        },
      ],
    },
  },
];
