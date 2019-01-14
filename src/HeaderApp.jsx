// @flow
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Organism } from '@apolitical/styleguide';

import ApoliticalBrand from './App/Theme/ApoliticalBrand';
import ApoliticalGlobalStyles from './App/Theme/ApoliticalGlobalStyles';

import type { Member } from './types';
import { getMember } from './App/Api/api';

const { Header } = Organism;

type Props = {
  loggedOutFunction: () => void,
}

type State = {
  me: ?Member,
}

class HeaderApp extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      me: null,
    };
  }

  componentWillMount() {
    const { loggedOutFunction } = this.props;
    getMember('me')
      .then((me) => this.setState({ me }))
      .catch(loggedOutFunction);
  }

  render() {
    return (
      <>
        <ApoliticalGlobalStyles />
        <BrowserRouter>
          <ThemeProvider theme={ApoliticalBrand}>
            <Header {...this.state} />
          </ThemeProvider>
        </BrowserRouter>
      </>
    );
  }
}

const reactAppElements = Array.from(document.querySelectorAll('[data-partial-app=\'header\']'));

reactAppElements
  .filter((element) => element instanceof Element)
  .map((element) => {
    if (Object.hasOwnProperty.call(element.dataset, 'headerLoggedOut')) {
      const loggedOutFunctionName = element.dataset.headerLoggedOut;
      if (Object.hasOwnProperty.call(window, loggedOutFunctionName) && typeof window[loggedOutFunctionName] === 'function') {
        return [element, window[loggedOutFunctionName]];
      }
    }
    return [element, () => {}];
  })
  .forEach(([element, loggedOut]) => render(<HeaderApp loggedOutFunction={loggedOut} />, element));
