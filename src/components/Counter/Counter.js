// Core
import React from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Counter.module.css';

const Counter = ({ numberPage, totalValue }) => (
  <p className={styles.counter}>
    {numberPage}/ {totalValue}
  </p>
);

Counter.propTypes = {
  totalValue: PropTypes.number.isRequired,
  numberPage: PropTypes.number.isRequired,
};

export default Counter;
