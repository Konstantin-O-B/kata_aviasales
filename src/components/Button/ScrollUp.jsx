import React, { useEffect, useState } from 'react';

import styles from './Button.module.css';

function ScrollUp() {
  const [scroll, setScroll] = useState();
  const handlerClick = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  };
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  if (scroll > 400) {
    return (
      <button type="button" className={styles.toTop} onClick={handlerClick}>
        Вверх
      </button>
    );
  }
  return null;
}
export default ScrollUp;
