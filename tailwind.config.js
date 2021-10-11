const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    cursor: {
      none: 'none'
    },
    scale: {
      '150': '1.5',
      '200': '2',
      '225': '2.25',
      '250': '2.5',
      '275': '275',
      '300': '3'
    },
    extend: {
      zIndex: ['hover', 'active'],
      transform: ['group-hover', 'hover'],
      translate: ['group-hover', 'hover'],
      opacity: ['group-hover', 'hover'],
      cursor: ['group-hover', 'hover'],
      scale: ['hover'],
      backgroundImage: {
        'album': './public/dontknow.jpg'
      }
    },
    colors: {
      ...colors,
      pinkish: {
        '50':  '#f8f9f8',
        '100': '#efeef1',
        '200': '#dedae1',
        '300': '#bcb6c1',
        '400': '#978f9c',
        '500': '#f4aef5',
        '600': '#64535f',
        '700': '#4d3e49',
        '800': '#352b33',
        '900': '#211c21',
      },
      brownish: {
        '50':  '#f8f9f7',
        '100': '#f1eeed',
        '200': '#e0dada',
        '300': '#bfb7b5',
        '400': '#998f8d',
        '500': '#7d6f69',
        '600': '#66544f',
        '700': '#4e3f3d',
        '800': '#362c2b',
        '900': '#221c1c',
      },
      greenish: {
        '50':  '#f7f8f7',
        '100': '#edeef0',
        '200': '#d8dbe0',
        '300': '#b3b9bf',
        '400': '#869399',
        '500': '#6a7377',
        '600': '#57585c',
        '700': '#444246',
        '800': '#2f2e32',
        '900': '#1e1d21',
      },
      cyan: {
        '50':  '#f6f8f9',
        '100': '#e3effa',
        '200': '#c4dcf5',
        '300': '#98bae6',
        '400': '#6b94d4',
        '500': '#a6b0f5',
        '600': '#4557ad',
        '700': '#37418a',
        '800': '#262d62',
        '900': '#171c3e',
      },
      indigo: {
        '50':  '#f9fafa',
        '100': '#f0eff8',
        '200': '#e0d6f2',
        '300': '#c3b0e0',
        '400': '#aa86cb',
        '500': '#9162b8',
        '600': '#78479e',
        '700': '#5a357a',
        '800': '#3e2554',
        '900': '#241832',
      },
      mauve: {
        '50':  '#fbfafa',
        '100': '#f5eff4',
        '200': '#ebd4e9',
        '300': '#d6acd0',
        '400': '#c680b2',
        '500': '#af5d97',
        '600': '#934178',
        '700': '#70315a',
        '800': '#4e223d',
        '900': '#2e1623',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
