import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Layout from 'layouts/index';

const IndexPage: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [_, setLang] = useState(i18n.language); // Следим за языком
    
    useEffect(() => {
      const updateLang = () => setLang(i18n.language);
      i18n.on("languageChanged", updateLang); // Подписываемся на смену языка
      return () => {
        i18n.off("languageChanged", updateLang); // Отписка при размонтировании
      };
    }, [i18n]);
  return (
    <Layout>
      <h1>{t('common:welcome')}</h1> {/* Используем ключ из JSON */}
      <p>{t('common:scss')}</p> {/* Используем ключ из JSON */}
    </Layout>
  );
};

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(
      filter: {
        language: { eq: $language }
        ns: { in: ["mainPage", "common", "layout"] }
      }
    ) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;

export default IndexPage;
