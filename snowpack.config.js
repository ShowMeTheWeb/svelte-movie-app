const production = process.env.NODE_ENV === 'production';

function babelOptions() {
  return {
    plugins: production 
      ? ['transform-remove-console']
    : []
  }
}

module.exports = {
  mount: {
    public: '/',
    src: '/_dist_'
  },
  plugins: [
    '@snowpack/plugin-svelte',   
    ['@snowpack/plugin-babel', {
      transformOptions: babelOptions()
    }],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src'
  }
}

//autoprefixer 를 사용할 때는 browserslist 옵션이 제공되는지 확인하기