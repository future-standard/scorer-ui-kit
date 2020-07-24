export const fontFamily = {
  ui: 'Monorale',
  data: 'Lato'
}

export const dimensions = {
  icons: {
    weights: {
      light: 1,
      regular: 1.5,
      heavy: 2
    }
  },
  form: {
    button: {
      small: '30px',
      normal: '40px',
      large: '60px'
    },
    input: {
      height: '40px'
    },
    switch: {
      outer: {
        width: '38px',
        height: '22px',
        borderRadius: '11px'
      },
      inner: {
        width: '16px',
        height: '16px',
        borderRadius: '8px'
      },
      positions: {
        top: '2px',
        off: '2px',
        neutral: '10px',
        locked: '2px',
        on: '18px',
      }
    }
  },
  global: {
    mainMenu: {
      width: {
        open: '280px',
        closed: '80px'
      }
    }
  }
}

export const animation = {
  easing: {
    primary: {
      inOut: 'cubic-bezier(0.87, 0, 0.13, 1)',
      out: 'cubic-bezier(0.16, 1, 0.3, 1)',
      in: 'cubic-bezier(0.7, 0, 0.84, 0)',
    }
  },
  speed: {
    fast: '0.175s',
    normal: '0.35s',
    slow: '0.7s'
  }
}