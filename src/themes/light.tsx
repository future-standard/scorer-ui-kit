import { fontFamily, dimensions } from './common';

const colors = {

}

const tmp = {
  body: {
    backgroundColor: '#f00',
    backgroundImage: 'radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png)'
  },
  fontFamily: 'Helvetica, Arial, sans-serif',
  colors: {
    button: {
      backgroundColor: '#efefef',
      color: '#666666',
      borderColor: '#666666'
    },
    exampleCard: {
      backgroundColor: '#fdfdfd',
      color: 'hsla(205, 5%, 45%, 100%)',
      borderColor: 'hsla(205, 60%, 75%, 100%)',
      shadowColor: 'hsla(205, 60%, 75%, 55%)'
    }
  }
}

export default {
  fontFamily,
  dimensions,
  colors,
  tmp
};