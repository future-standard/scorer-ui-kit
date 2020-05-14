import { fontFamily, dimensions } from './common';

const colors = {

}

const tmp = {
  input: {
    states: {
      default: {
        borderColor: '#fff',
        backgroundColor: '#fff'
      },
      example: {
        borderColor: '#f0f',
        backgroundColor: '#f0f'
      }
    }
  },
  body: {
    backgroundColor: '#f00',
    backgroundImage: 'radial-gradient(circle at 55% 1%, #303335, #212427 117%), url(./noise.png)'
  },
  fontFamily: 'Helvetica, Arial, sans-serif',
  colors: {
    button: {
      backgroundColor: '#666666',
      color: '#efefef',
      borderColor: '#efefef'
    },
    exampleCard: {
      backgroundColor: '#666666',
      color: 'hsla(205, 15%, 95%, 100%)',
      borderColor: 'hsla(205, 90%, 65%, 100%)',
      shadowColor: 'hsla(205, 90%, 65%, 15%)'
    }
  }
}

export default {
  fontFamily,
  dimensions,
  colors,
  tmp
};