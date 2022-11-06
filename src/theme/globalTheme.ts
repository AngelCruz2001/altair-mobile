const palette = {
  purple: '#171766',
  orange: '#F2583E',
  blue: '#171766',
  gray: '#747688',
  red: '#CD0E61',
  green: '#038757',
  black: '#000000',
  white: '#FFFFFF',
};

export const theme = {
  colors: {
    background: palette.white,
    foreground: palette.black,
    primary: palette.purple,
    secondary: palette.orange,
    success: palette.green,
    danger: palette.red,
    failure: palette.red,
    white: palette.white,
    gray: palette.gray,
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    header: {
      fontFamily: 'Product Sans',
      fontSize: 36,
      fontWeight: 'bold',
    },
    body: {
      fontFamily: 'Product Sans',
      fontSize: 16,
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: palette.black,
    foreground: palette.white,
  },
};
