const dotenv = require('dotenv');

const envTypes = {
  production: '.prd',
  development: '.hmg',
  homologation: '.hmg',
};

const envVar = envTypes[process.env.NODE_ENV] || '';
dotenv.config({
  path: `./.env${envVar}`
});

if (process.env.NODE_ENV === 'production') {
  require('newrelic');
}

if (process.env.NODE_ENV === 'development') {
  require('./src/server.js');
} else {
  require('./bin/src/server.js');
}
