// postcss.config.cjs

module.exports = {
  plugins: {
    "postcss-nested": {},
    "postcss-mixins": {},
    "postcss-responsive-type": {},
    "postcss-short-text": {},
    "postcss-position": {},
    'postcss-short':{},
    'postcss-font-magician': {
      variants: {
        'Nunito': {
          300: ["ttf, woff, eot, woff2, svg"],
          400: ["ttf, woff, eot, woff2, svg"],
          600: ["ttf, woff, eot, woff2, svg"],
          900: ["ttf, woff, eot, woff2, svg"],
        },
        'Nunito Sans': {
          300: ["ttf, woff, eot, woff2, svg"],
          400: ["ttf, woff, eot, woff2, svg"],
          600: ["ttf, woff, eot, woff2, svg"],
          900: ["ttf, woff, eot, woff2, svg"],
        },
      },
      foundries: ["google"],
    },
    autoprefixer: {
      overrideBrowserslist: [">1%", "last 5 versions", "not dead"],
    },
    "@hail2u/css-mqpacker": {},
  },
};
