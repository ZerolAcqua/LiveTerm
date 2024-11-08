const isProd = process.env.NODE_ENV === 'production';
const basePath = '/c/acqua-term';

const nextConfig = {
  basePath: isProd ? basePath : '',
  output: 'export',
  env: {
    BASE_PATH: isProd ? basePath : '',
  },
};

module.exports = nextConfig;
