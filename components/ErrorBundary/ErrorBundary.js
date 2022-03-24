import * as React from "../../_snowpack/pkg/react.js";
import "./ErrorBundary.css.proxy.js";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null};
  }
  static getDerivedStateFromError(error) {
    return {
      hasError: true,
      error
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }
  render() {
    const {error, hasError} = this.state;
    if (hasError) {
      return /* @__PURE__ */ React.createElement("h2", {
        className: "ErrorBundary"
      }, 'Something went wrong: "', error?.message ?? error, '"');
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
