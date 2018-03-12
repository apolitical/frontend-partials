import './helpers/enzyme';
import './helpers/chai';

const testsContext = require.context('./src', true, /Test.jsx?$/);
testsContext.keys().forEach(testsContext);
