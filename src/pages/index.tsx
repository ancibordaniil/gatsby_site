import React from 'react';
import { useTranslation } from 'react-i18next';
import { graphql } from 'gatsby';
import Layout from 'layouts/index';

const IndexPage: React.FC = () => {
    const { t } = useTranslation();

  return (
    <Layout>
      <h1>{t('common:welcome')}</h1>
      <p>{t('common:scss')}</p> 
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
