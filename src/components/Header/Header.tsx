import React from 'react';
import * as styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.some}>
      <h1>Gatsby Website</h1>
    </header>
  );
};

export default Header;
