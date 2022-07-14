module.exports = {
  apps: [
    {
      ...require('./pm2.config'),
      env: {
        'PORT': 7010,
        'NODE_ENV': 'development'
      }
    }
  ]
};

