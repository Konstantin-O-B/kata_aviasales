import React from 'react';
import { useDispatch } from 'react-redux';

import { setVisibleTickets } from '../../store/aviasalesAppSlice';

import styles from './Button.module.css';

function Button() {
  const dispatch = useDispatch();

  const handleShowMore = () => {
    dispatch(setVisibleTickets(5));
  };

  return (
    <div className={styles.button_container}>
      <button type="button" className={styles.button_button} onClick={handleShowMore}>
        Показать еще 5 билетов
      </button>
    </div>
  );
}

export default Button;
