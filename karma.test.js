import './helpers/enzyme';

const testsContext = require.context('./src', true, /Test.jsx?$/);
testsContext.keys().forEach(testsContext);
