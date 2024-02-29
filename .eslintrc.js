export default {
  extends: ["@remix-run/eslint-config", "@remix-run/eslint-config/node"],
  rules: {
    semi: ["warn", "never"],
    "react-hooks/exhaustive-deps": "off",
    "react/jsx-closing-bracket-location": ["error", "after-props"],
    "react/jsx-tag-spacing": ["error", { closingSlash: "never", beforeSelfClosing: "always" }]
  },
}
