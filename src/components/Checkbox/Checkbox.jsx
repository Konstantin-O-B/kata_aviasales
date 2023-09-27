import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { checkboxConfig } from '../../store/aviasalesCheckboxSlice';

import styles from './Checkbox.module.css';

function Checkbox() {
  const filters = useSelector((state) => state.aviasalesCheckbox.filters);

  const dispatch = useDispatch();

  return (
    <div className={styles.checkbox_container}>
      <title className={styles.checkbox_title}>КОЛИЧЕСТВО ПЕРЕСАДОК</title>
      <section className={styles.checkbox_section}>
        {filters.map((filter, index) => (
          <div key={`key${index + Math.random()}`}>
            <input
              type="checkbox"
              id={filter.id}
              name={filter.id}
              checked={filter.checked}
              onChange={() => {
                dispatch(checkboxConfig(filter.id));
              }}
            />
            <label htmlFor={filter.id}>{filter.text}</label>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Checkbox;
