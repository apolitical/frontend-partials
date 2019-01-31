// @flow
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Organism } from '@apolitical/styleguide';
import ApoliticalBrand from './App/Theme/ApoliticalBrand';
import ApoliticalGlobalStyles from './App/Theme/ApoliticalGlobalStyles';

const { Footer } = Organism;

const FooterApp = () => (
  <>
    <ApoliticalGlobalStyles />
    <BrowserRouter>
      <ThemeProvider theme={ApoliticalBrand}>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  </>
);

const reactAppElements = Array.from(document.querySelectorAll('[data-partial-app=\'footer\']'));

reactAppElements
  .filter((element) => element instanceof Element)
  .forEach((element) => render(<FooterApp />, element));
