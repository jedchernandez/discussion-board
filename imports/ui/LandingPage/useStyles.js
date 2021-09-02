import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: 0,
    margin: '1%',
    minHeight: `calc(100vh - 70px)`,
    [theme.breakpoints.down(600)]: {
      width: '98vw',
      height: '98vh',
    },
  },
  paperContainer: {
    rounded: 'true',
    padding: '4%',
    height: 500,
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down(600)]: {
      width: '98vw',
      height: '98vh',
    },
  },
  gridItemContainer: {
    width: '100%',
    height: '100%',
  },
  gridItem: {
    width: '100%',
  },
  textField: {
    width: '100%',
  },
  button: {
    margin: theme.spacing(3, 2, 2),
    padding: 10,
    width: 150,
    height: 56,
    borderRadius: theme.shape.borderRadius,
    marginTop: 49,
    fontSize: 16,
    fontWeight: 'bold',
  },
}));
