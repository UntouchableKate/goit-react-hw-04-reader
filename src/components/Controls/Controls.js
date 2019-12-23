// Core
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Controls.module.css';

const Controls = ({ numberPage, onBack, onForward }) => (
  <section className={styles.controls}>
    <button
      type="button"
      onClick={onBack}
      disabled={numberPage === 1}
      className={styles.button}
    >
      Назад
    </button>
    <button
      type="button"
      onClick={onForward}
      disabled={numberPage > 11}
      className={styles.button}
    >
      Вперед
    </button>
  </section>
);

Controls.propTypes = {
  numberPage: PropTypes.number.isRequired,
  onBack: PropTypes.func.isRequired,
  onForward: PropTypes.func.isRequired,
};

export default Controls;
