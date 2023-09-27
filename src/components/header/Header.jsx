import React from 'react';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo} />
    </header>
  );
}

export default Header;
