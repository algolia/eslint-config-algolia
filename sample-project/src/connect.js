import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

import storeShape from './storeShape';

const getDisplayName = WrappedComponent =>
  WrappedComponent.displayName || WrappedComponent.name || 'UnknownComponent';

export default function connect(mapStateToProps) {
  return WrappedComponent =>
    class Connect extends Component {
      static contextTypes = { algoliaStore: storeShape.isRequired };
      static displayName = `AlgoliaSearchHelperConnect(${getDisplayName(
        WrappedComponent
      )})`;

      constructor(props, context) {
        super();

        if (mapStateToProps) {
          this.state = mapStateToProps(context.algoliaStore.getState(), props);

          this.unsubscribe = context.algoliaStore.subscribe(() => {
            this.setState(
              mapStateToProps(context.algoliaStore.getState(), this.props)
            );
          });
        }
      }

      componentWillUnmount() {
        if (this.unsubscribe) {
          this.unsubscribe();
        }
      }

      componentWillReceiveProps(nextProps) {
        this.setState(
          mapStateToProps(this.context.algoliaStore.getState(), nextProps)
        );
      }

      shouldComponentUpdate(nextProps, nextState) {
        return shallowCompare(this, nextProps, nextState);
      }

      render() {
        return (
          <WrappedComponent
            {...this.props}
            {...this.state}
            helper={this.context.algoliaStore.getHelper()}
          />
        );
      }
    };
}
