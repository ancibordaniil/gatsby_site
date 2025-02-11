import React from 'react';
import Header from '../components/Header/Header';
import LanguageSwitcher from '../components/LangiageSwitcher/LanguageSwitcher';

type LayoutProps = {
    children: React.ReactNode;
  };
  
  const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
      <>
        <Header />
        <LanguageSwitcher />  {/* Добавляем переключатель языка */}
        <main>{children}</main>
      </>
    );
  };
  
  export default Layout;
