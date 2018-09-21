let env = 'local';

if (
  process.env.NODE_ENV === 'develop' ||
  process.env.NODE_ENV === 'prelive' ||
  process.env.NODE_ENV === 'production'
) {
  env = process.env.NODE_ENV;
}

module.exports = {
  'process.env.ENVIRONMENT': env,
};
