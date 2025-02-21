import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `http://localhost:8000`, // Добавлено
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`,
        name: "locales",
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: `locales`,
        languages: [`en`, `ru`],
        defaultLanguage: `en`, // Добавлено
        siteUrl: `http://localhost:8000`, // Добавлено
        trailingSlash: "always",
        i18nextOptions: {
          interpolation: { escapeValue: false },
          keySeparator: false,
          nsSeparator: false,
        },
      },
    },
  ],
};
export default config;
