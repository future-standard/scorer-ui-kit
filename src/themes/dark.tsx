import { fontFamily, dimensions } from './common';

const colors = {

}

const tmp = {
  input: {
    states: {
      default: {
        icon: '',
        iconColor: '#000',
        borderColor: 'hsl(120, 1%, 85%)',
        backgroundColor: 'hsl(0, 0%, 99%)'
      },
      required: {
        icon: '',
        iconColor: 'hsl(0, 0%, 100%)',
        borderColor: 'hsl(205, 59%, 71%)',
        backgroundColor: 'hsl(205, 59%, 71%)'
      },
      loading: {
        icon: '',
        iconColor: '#000',
        borderColor: 'hsl(195, 79%, 71%)',
        backgroundColor: 'hsl(195, 79%, 71%)'
      },
      valid: {
        icon: '',
        iconColor: '#000',
        borderColor: 'hsl(120, 35%, 72%)',
        backgroundColor: 'hsl(120, 35%, 72%)'
      },
      error: {
        icon: '',
        iconColor: '#000',
        borderColor: 'hsl(0, 79%, 70%)',
        backgroundColor: 'hsl(0, 79%, 70%)'
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