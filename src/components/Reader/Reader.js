// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './Reader.module.css';

// Components
import Publication from '../Publication';
import Controls from '../Controls';
import Counter from '../Counter';

class Reader extends Component {
  static defaultProps = {
    step: 1,
  };

  static propTypes = {
    publications: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
      }),
    ).isRequired,
    location: PropTypes.objectOf(PropTypes.string).isRequired,
    history: PropTypes.oneOfType([PropTypes.number, PropTypes.object])
      .isRequired,
    step: PropTypes.number,
  };

  state = {
    numberPage: 1,
  };

  componentDidMount() {
    const { location, publications, step } = this.props;

    if (!location.search) {
      this.saveItem(step);
    }

    const item = new URLSearchParams(location.search).get('item');
    if (item > publications.length || item < step) {
      this.saveItem(step);
      return;
    }

    this.setState({ numberPage: Number(item) });
    // this.parseQueryParams();
  }

  componentDidUpdate(prevProps, prevState) {
    const { location } = this.props;

    const prevItem = new URLSearchParams(location.search).get('item');

    const nextItem = new URLSearchParams(prevProps.location.search).get('item');

    if (prevItem === nextItem) return;

    this.parseQueryParams();
  }

  parseQueryParams = () => {
    const { location } = this.props;
    const prevItem = new URLSearchParams(location.search).get('item');

    this.setState({
      numberPage: Number(prevItem),
    });
  };

  saveItem = item => {
    this.props.history.push({
      ...this.props.location,
      search: `item=${item}`,
    });
  };

  forwardHandler = () => {
    this.saveItem(this.state.numberPage + this.props.step);
  };

  backHandler = () => {
    this.saveItem(this.state.numberPage - this.props.step);
  };

  render() {
    const { numberPage } = this.state;
    const { publications } = this.props;
    const totalValue = publications.length;

    return (
      <div className={styles.reader}>
        <Controls
          numberPage={numberPage}
          onBack={this.backHandler}
          onForward={this.forwardHandler}
        />

        <Counter numberPage={numberPage} totalValue={totalValue} />

        {numberPage && (
          <Publication
            publication={publications[numberPage - 1]}
            numberPage={numberPage}
          />
        )}
      </div>
    );
  }
}

export default Reader;
