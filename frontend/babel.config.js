module.exports = function (api) {
  api.cache(true);

  const envFile = {
    development: '.env.development',
    staging: '.env.staging',
    production: '.env.production',
  }[process.env.APP_ENV] || '.env.development';

  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module:react-native-dotenv',
        {
          envName: 'APP_ENV',
          moduleName: '@env',
          path: envFile,
          allowUndefined: false,
        },
      ],
    ],
  };
};
