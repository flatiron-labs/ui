export type Theme = {
  theme: {
    fonts: Record<string, unknown>
    breakpoints: {
      keys: Array<string>
      values: {
        xs: number
        sm: number
        md: number
        lg: number
        xl: number
      }
    }
    colors: {
      common: {
        black: string
        white: string
        blackLight: string
        turq: string
        turqDark: string
        yellow: string
        orange: string
        pink: string
        blue: string
        purple: string
        green: string
      }
      error: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
      warning: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
      info: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
      success: {
        light: string
        main: string
        dark: string
        contrastText: string
      }
      grey: {
        '50': string
        '100': string
        '200': string
        '300': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '900': string
      }
    }
    typography: {
      fontFamily: string
      fontSize: number
      fontWeightLight: number
      fontWeightRegular: number
      fontWeightMedium: number
      fontWeightBold: number
      body1: {
        fontFamily: string
        fontWeight: number
        fontSize: string
        lineHeight: number
        letterSpacing: string
      }
      body2: {
        fontFamily: string
        fontWeight: number
        fontSize: string
        lineHeight: number
        letterSpacing: string
      }
      button: {
        fontFamily: string
        fontWeight: number
        fontSize: string
        lineHeight: number
        letterSpacing: string
        textTransform: string
      }
    }
    transitions: {
      easing: {
        easeInOut: string
        easeOut: string
        easeIn: string
        sharp: string
      }
      duration: {
        shortest: number
        shorter: number
        short: number
        standard: number
        complex: number
        enteringScreen: number
        leavingScreen: number
      }
    }
    space: {
      px: string
      0: string
      0.5: string
      1: string
      1.5: string
      2: string
      2.5: string
      3: string
      3.5: string
      4: string
      5: string
      6: string
      7: string
      8: string
      9: string
      10: string
      12: string
      14: string
      16: string
      20: string
      24: string
      28: string
      32: string
      36: string
      40: string
      44: string
      48: string
      52: string
      56: string
      60: string
      64: string
      72: string
      80: string
      96: string
    }
    zIndex: {
      mobileStepper: number
      speedDial: number
      appBar: number
      drawer: number
      modal: number
      snackbar: number
      tooltip: number
    }
  }
}

export const flatironTheme: Theme = {
  theme: {
    fonts: { firaCode: 'Fira Code', gotcha: 'Gotcha' },
    breakpoints: {
      keys: ['xs', 'sm', 'md', 'lg', 'xl'],
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1440,
        xl: 1920
      }
    },
    colors: {
      common: {
        black: '#000',
        white: '#fff',
        blackLight: 'rgba(3, 4, 22, 1)',
        turq: 'rgba(0, 239, 225, 1)',
        turqDark: 'rgba(12, 50, 62, 1)',
        yellow: 'rgba(249, 197, 26, 1)',
        orange: 'rgba(255, 92, 0, 1)',
        pink: 'rgba(232, 3, 82, 1)',
        blue: 'rgba(51, 143, 255, 1)',
        purple: 'rgba(205, 162, 255, 1)',
        green: 'rgba(0, 239, 124, 1)'
      },
      error: {
        light: '#b90000',
        main: '#cc0000',
        dark: '#d32f2f',
        contrastText: '#fff'
      },
      warning: {
        light: '#ffb74d',
        main: '#ff9800',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      info: {
        light: '#64b5f6',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff'
      },
      success: {
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      grey: {
        '50': '#fafafa',
        '100': '#f5f5f5',
        '200': '#eeeeee',
        '300': '#e0e0e0',
        '400': '#bdbdbd',
        '500': '#9e9e9e',
        '600': '#757575',
        '700': '#616161',
        '800': '#424242',
        '900': '#212121'
      }
    },
    typography: {
      fontFamily: '"Fira Code", sans-serif',
      fontSize: 130,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      body1: {
        fontFamily: '"Fira Code", sans-serif',
        fontWeight: 400,
        fontSize: '0.875',
        lineHeight: 1.5,
        letterSpacing: '0.00938em'
      },
      body2: {
        fontFamily: '"Fira Code", sans-serif',
        fontWeight: 400,
        fontSize: '0.875rem',
        lineHeight: 1.43,
        letterSpacing: '0.01071em'
      },
      button: {
        fontFamily: '"Fira Code", sans-serif',
        fontWeight: 500,
        fontSize: '0.75rem',
        lineHeight: 1.75,
        letterSpacing: '0.02857em',
        textTransform: 'uppercase'
      }
    },
    transitions: {
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      },
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
      }
    },
    space: {
      px: '1px',
      0: '0',
      0.5: '0.125rem',
      1: '0.25rem',
      1.5: '0.375rem',
      2: '0.5rem',
      2.5: '0.625rem',
      3: '0.75rem',
      3.5: '0.875rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem'
    },
    zIndex: {
      mobileStepper: 1000,
      speedDial: 1050,
      appBar: 1100,
      drawer: 1200,
      modal: 1300,
      snackbar: 1400,
      tooltip: 1500
    }
  }
}
