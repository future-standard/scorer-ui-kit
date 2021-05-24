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

// export const deviceSize = {
//   mobileS: `(max-width: 640px)`,
//   mobileM: `(min-width: 321px) and (max-width: 767px)`,
//   tabletP: `(min-width: 768px) and (max-width: 1023px)`,
//   desktopS: `(min-width: 1024px) and (max-width: 1279px)`,
//   desktop: `(min-width: 1280px) and (max-width: 1399px)`,
//   desktopL: `(min-width: 1400px)`
// };


export const deviceSize = {
  mobileS: `(max-width: 640px)`,
  mobileM: `(min-width: 321px)`,
  tabletP: `(min-width: 768px)`,
  desktopS: `(min-width: 1024px)`,
  desktop: `(min-width: 1280px)`,
  desktopL: `(min-width: 1400px)`
};