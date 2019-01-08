// @flow
import { createGlobalStyle } from 'styled-components';
import reset from './resetCss';

const ApoliticalGlobalStyles = createGlobalStyle`
  ${reset}
  @font-face {
    font-family: 'icomoon';
    src:  url('https://assets.apolitical.co/fonts/icomoon.eot?u9jqdu#iefix') format('embedded-opentype'),
          url('https://assets.apolitical.co/fonts/icomoon.ttf?u9jqdu') format('truetype'),
          url('https://assets.apolitical.co/fonts/icomoon.woff?u9jqdu') format('woff'),
          url('https://assets.apolitical.co/fonts/icomoon.svg?u9jqdu#icomoon') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'FontAwesome';
    src: url('https://assets.apolitical.co/fonts/fontawesome-webfont.eot?v=4.0.1');
    src: url('https://assets.apolitical.co/fonts/fontawesome-webfont.eot?#iefix&v=4.0.1') format('embedded-opentype'),
         url('https://assets.apolitical.co/fonts/fontawesome-webfont.woff?v=4.0.1') format('woff'),
         url('https://assets.apolitical.co/fonts/fontawesome-webfont.ttf?v=4.0.1') format('truetype'),
         url('https://assets.apolitical.co/fonts/fontawesome-webfont.svg?v=4.0.1#fontawesomeregular') format('svg');
    font-weight: normal;
    font-style: normal;
  }

  html {
    /* Typography */
    font-family: lato, sans-serif;

    /* Font Sizes */
    font-size: 62.5%;
  }
`;

export default ApoliticalGlobalStyles;
