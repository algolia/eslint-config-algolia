import PropTypes from 'prop-types';
import { Component, Children } from 'react';

import createStore from './createStore';
import storeShape from './storeShape';

class Provider extends Component {
  static propTypes = {
    helper: PropTypes.object.isRequired,
    children: PropTypes.node.isRequired,
  };

  static childContextTypes = {
    algoliaStore: storeShape.isRequired,
  };

  /**
   * The constructor.
   *
   * @param {object} props - The props.
   */
  constructor(props) {
    super(props);

    this.store = createStore(props.helper);
  }

  getChildContext() {
    return {
      algoliaStore: this.store,
    };
  }

  render() {
    return Children.only(this.props.children);
  }
}

export default Provider;
