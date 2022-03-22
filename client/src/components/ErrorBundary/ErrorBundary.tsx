import * as React from 'react';

import './ErrorBundary.css';

class ErrorBoundary extends React.Component<
  {},
  { hasError: false; error: Error | null }
> {
  constructor(props: { hasError: false }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  render() {
    const { error, hasError } = this.state;
    if (hasError) {
      return (
        <h2 className="ErrorBundary">
          Something went wrong: "{error?.message ?? error}"
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
