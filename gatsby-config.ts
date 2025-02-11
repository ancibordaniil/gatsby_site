import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/locales`, // Путь к файлам переводов
        name: "locales", // Имя источника
      },
    },
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-react-i18next",
      options: {
        localeJsonSourceName: "locales", // Должно совпадать с `gatsby-source-filesystem`
        languages: ["en", "ru"],
        defaultLanguage: "en",
        siteUrl: "http://localhost:8000/",
        i18nextOptions: {
          fallbackLng: "en",
          interpolation: {
            escapeValue: false,
          },
        },
      },
    },
  ],
};

export default config;
