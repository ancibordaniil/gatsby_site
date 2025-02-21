import React from 'react';
import Header from '../components/Header/Header';
import LanguageSwitcher from '../components/LanguageSwitcher/LanguageSwitcher';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <LanguageSwitcher />
      <main>{children}</main>
    </>
  );
};

export default Layout;
