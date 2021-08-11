export const fontFamily = {
  ui: 'Monorale, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;',
  data: 'Lato, Hiragino Sans, "ヒラギノ角ゴシック", Hiragino Kaku Gothic ProN, "ヒラギノ角ゴ ProN W3", Roboto, YuGothic, "游ゴシック", Meiryo, "メイリオ", sans-serif;'
};

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
      xsmall: {
        height: '20px',
        padding: '0 10px',
        iconSize: 12,
      },
      small: {
        height: '30px',
        padding: '0 20px',
        iconSize: 14,
      },
      normal: {
        height: '40px',
        padding: '0 20px',
        iconSize: 16,
      },
      large: {
        height: '60px',
        padding: '0 20px',
        iconSize: 20,
      },
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
  filterBar: {
    button: {
      xsmall: {
        height: '0 20px',
        iconPadding: '0 9px',
        textPaddingNoArrow: '20px',
        textPaddingWithArrow: '3px',
        iconSize: 10,
        arrowSize: 8,
      },
      small: {
        height: '30px',
        iconPadding: '0 9px',
        textPaddingNoArrow: '20px',
        textPaddingWithArrow: '3px',
        iconSize: 12,
        arrowSize: 8,
      },
      normal: {
        height: '40px',
        iconPadding: '0 20px',
        textPaddingNoArrow: '40px',
        textPaddingWithArrow: '4px',
        iconSize: 14,
        arrowSize: 10,
      },
      large: {
        height: '60px',
        iconPadding: '0 20px',
        textPaddingNoArrow: '40px',
        textPaddingWithArrow: '4px',
        iconSize: 20,
        arrowSize: 12,
      },
    },
  },
  global: {
    mainMenu: {
      width: {
        open: '280px',
        closed: '80px'
      }
    }
  }
};

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
    slow: '0.7s',
    slower: '1.4s',
    slowest: '2.8s'
  }
};

export const deviceSize = {
  small: 0,
  medium: 768,
  large: 1024,
  xlarge: 1280,
  xxlarge: 1400,
};


export const deviceMediaQuery = {
  small: `(min-width: ${deviceSize.small}px)`,
  medium: `(min-width: ${deviceSize.medium}px)`,
  large: `(min-width: ${deviceSize.large}px)`,
  xlarge: `(min-width: ${deviceSize.xlarge}px)`,
  xxlarge: `(min-width: ${deviceSize.xxlarge}px)`
};