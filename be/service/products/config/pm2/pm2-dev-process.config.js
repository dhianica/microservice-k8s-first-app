module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      env: {
        'PORT': 7020,
        'NODE_ENV': 'development'
      }
    }
  ]
};

