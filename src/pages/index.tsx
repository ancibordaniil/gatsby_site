import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Layout from 'layouts/index';

const IndexPage: React.FC = () => {
    const { t } = useTranslation(); // Используем хук для получения функции перевода
    return (
      <Layout>
        <h1>{t('welcome_message')}</h1> {/* Используем ключ из JSON */}
        <p>{t('scss_works')}</p>          {/* Используем ключ из JSON */}
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
