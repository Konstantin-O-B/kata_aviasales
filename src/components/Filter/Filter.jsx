import React, { useCallback, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { toggleFilter } from '../../store/aviasalesFilterSlice';
import sorting from '../../hooks/sorting';
import { setSortedTickets } from '../../store/aviasalesAppSlice';

import styles from './Filter.module.css';

function Filter() {
  const ticketsDate = useSelector((state) => state.aviasalesApp.ticketsDate);
  const buttons = useSelector((state) => state.aviasalesFilter.buttons);

  const dispatch = useDispatch();

  const ulRef = useRef();

  const handleClick = useCallback(
    (e) => {
      const newArr = sorting(ticketsDate, e.target.id);
      dispatch(setSortedTickets(newArr));
      dispatch(toggleFilter(e.target.id));
    },
    [ticketsDate]
  );

  useEffect(() => {
    if (ulRef.current) {
      ulRef.current.addEventListener('click', handleClick);
    }
    return () => {
      if (ulRef.current) {
        ulRef.current.removeEventListener('click', handleClick);
      }
    };
  }, [ulRef, handleClick]);

  return (
    <section className={styles.filter_container}>
      <ul className={styles.filter_ul} ref={ulRef}>
        {buttons.map((button) => (
          <li
            className={`button_${button.description} ${button.active ? styles.active : null}`}
            key={button.id + Math.random()}
          >
            <button type="button" id={button.id}>
              {button.text}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Filter;
