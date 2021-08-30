import { createTheme } from '@material-ui/core/styles';

export const theme = createTheme({
  typography: {
    fontFamily: '"Roboto", "Open Sans", "sans-serif" ',
    fontSize: 12,
    button: {
      textTransform: 'none',
      fontWeight: 700,
    },
  },
  palette: {
    primary: { main: '#f04826' },
  },
  shape: {
    borderRadius: 3,
  },
});
