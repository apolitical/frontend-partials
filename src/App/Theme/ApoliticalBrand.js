// @flow
const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1368px',
  laptopLOld: '1440px',
  desktop: '2560px',
  special: {
    mobileLTabletMid: '767px',
    tabletLaptopMid: '790px',
  },
};

const pageMaxWidth = {
  standard: '1079px',
};

const color = {
  transparent: 'rgba(0,0,0,0)',
  lightGrey: '#E4E4E4',
  sleepyGrey: '#b3b3b3',
  darkGrey: '#333333',
  slightlyLessDarkGrey: '#313233', // Yes... i know... placeholders names!!
  apolTeal: '#19A9B7',
  apolTealHover: '#6AD5E0',
  apolTealDark: '#18A9B7',
  deprecateApolTeal: '#18A9B7', // TODO rationalize thse names!
  actionPink: 'ED1E79',
  washedTeal: '#D9F0F1',
  whiteSmoke: '#F8F8F8',
  searchGreen: '#A6C4BC',
  white: '#fff',
  hoverTeal: '#6AD5E0', // gonna refactor these into HSL()
};

const fontColor = {
  headerGrey: `${color.darkGrey}`,
  headerTeal: `${color.apolTealDark}`,
  secondaryHover: `${color.hoverTeal}`,
};

const borderColor = {
  main: `${color.lightGrey}`,
  active: `${color.apolTeal}`,
  inactive: `${color.sleepyGrey}`,
  section: `${color.washedTeal}`,
};

const buttonColor = {
  main: `${color.apolTeal}`,
  secondary: `${color.apolTealDark}`,
};

const backgroundColor = {
  page: `${color.white}`,
  softHighlight: `${color.whiteSmoke}`,
  mainHighlight: `${color.apolTealDark}`,
};


export default {
  color: {
    transparent: `${color.transparent}`,
    white: `${color.white}`,
    primary: `${color.apolTealDark}`,
    action: `${color.actionPink}`,
  },

  spacing: {
    page: {
      bottomPadding: '8rem;',
    },
  },

  boundary: {
    primary: `.02rem solid ${borderColor.main}`,
    secondary: `.02rem solid ${borderColor.section}`,
    crazy: '10rem solid pink',
    color: {
      primary: `${borderColor.main}`,
      active: `${borderColor.active}`,
    },
  },

  card: {
    background: {
      softHighlight: `${backgroundColor.softHighlight}`,
      mainHighlight: `${backgroundColor.mainHighlight}`,
    },
  },

  link: {
    color: {
      activated: `${color.apolTeal}`,
    },
  },

  font: {
    primary: 'Lato',
    color: {
      headerPrimary: `${fontColor.headerGrey}`,
      headerSecondary: `${fontColor.headerTeal}`,
      secondaryHover: `${fontColor.secondaryHover}`,
    },
  },

  nav: {
    boundary: {
      activated: `.1rem solid ${borderColor.active}`,
      anticipating: `.1rem solid ${borderColor.inactive}`,
    },
  },

  button: {
    boundary: {
      activated: `.1rem solid ${borderColor.active}`,
      anticipating: `.1rem solid ${borderColor.inactive}`,
      toDeprecate: `.1rem solid ${buttonColor.secondary}`,
    },
    color: {
      primary: `${buttonColor.main}`,
      secondary: `${buttonColor.secondary}`,
    },
  },

  background: {
    color: {
      page: `${backgroundColor.page}`,
    },
  },

  heading: {
    color: `${color.apolTeal}`,
    fontSize: {
      h1: '3.6rem',
      h2: '2.1rem',
    },
  },

  pageMaxWidth,
  size,

  breakpoint: { // TODO rationalize
    mobileS: `(min-width: ${size.mobileS})`,
    mobileM: `(min-width: ${size.mobileM})`,
    mobileL: `(min-width: ${size.mobileL})`,
    tablet: `(min-width: ${size.tablet})`,
    laptop: `(min-width: ${size.laptop})`,
    laptopL: `(min-width: ${size.laptopL})`,
    desktop: `(min-width: ${size.desktop})`,
    desktopL: `(min-width: ${size.desktop})`,
    onlyScreen: {
      mobileS: `only screen and (min-width: ${size.mobileS})`,
      mobileM: `only screen and (min-width: ${size.mobileM})`,
      mobileL: `only screen and (min-width: ${size.mobileL})`,
      tablet: `only screen and (min-width: ${size.tablet})`,
      laptop: `only screen and (min-width: ${size.laptop})`,
      laptopL: `only screen and (min-width: ${size.laptopL})`,
      desktop: `only screen and (min-width: ${size.desktop})`,
      desktopL: `only screen and (min-width: ${size.desktop})`,
      special: {
        mobileLTabletMid: `only screen and (min-width: ${size.special.mobileLTabletMid})`,
        tabletLaptopMid: `only screen and (min-width: ${size.special.tabletLaptopMid})`,
      },
    },
  },
};
