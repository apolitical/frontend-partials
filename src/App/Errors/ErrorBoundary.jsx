// @flow
import React, { Component } from 'react';

type Error = {
  message: string,
}

type Props = {
  children: any,
}

type State = {
  error: ?Error,
}

export default class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error: Error) {
    // Display fallback UI
    this.setState({ error });
  }

  render() {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      // Header
      if (error.message === '401') {
        window.location.replace('/login');
      }
      // Footer
      return <></>;
    }
    return children;
  }
}
