import { fontFamily, dimensions } from './common';

const colors = {

}

const tmp = {
  input: {
    states: {
      default: {
        iconColor: '#000',
        borderColor: 'grey',
        backgroundColor: 'grey'
      },
      required: {
        iconColor: '#000',
        borderColor: 'pink',
        backgroundColor: 'pink'
      },
      loading: {
        iconColor: '#000',
        borderColor: 'blue',
        backgroundColor: 'blue'
      },
      valid: {
        iconColor: '#000',
        borderColor: 'green',
        backgroundColor: 'green'
      },
      error: {
        iconColor: '#000',
        borderColor: 'red',
        backgroundColor: 'red'
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