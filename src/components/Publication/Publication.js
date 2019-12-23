// Core
import React from 'react';
import PropTypes from 'prop-types';

// styles
import styles from './Publication.module.css';

const Publication = ({ publication, numberPage }) => (
  <article className={styles.publication}>
    <h2 className={styles.title}>
      {numberPage}.{publication.title}
    </h2>
    <p className={styles.text}>{publication.text}</p>
  </article>
);

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  numberPage: PropTypes.number.isRequired,
};

export default Publication;
