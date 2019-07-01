import React, {Component} from 'react';

export default function Style(...styles) {
  return function decorator(WrappedComponent) {
    return class StyleComponent extends Component {
      static displayName = `Styled(${WrappedComponent.displayName})`;

      componentWillMount() {
        styles.forEach(style => style.ref());
      }

      componentWillUnmount() {
        styles.forEach(style => style.unref());
      }

      render() {
        return <WrappedComponent {...this.props}/>;
      }
    };
  };
}
