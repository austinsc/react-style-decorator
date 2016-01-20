export default function Style(...styles) {
  return function decorator(Component) {
    return class StyleComponent extends Component {
      componentWillMount() {
        styles.forEach(style => style.ref());
        if(super.componentWillMount) {
          super.componentWillMount();
        }
      }

      componentWillUnmount() {
        if(super.componentWillUnmount) {
          super.componentWillUnmount();
        }
        styles.forEach(style => style.unref());
      }
    };
  };
}