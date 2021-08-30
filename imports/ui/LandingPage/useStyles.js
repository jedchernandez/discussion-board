import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    minHeight: `calc(100vh - 85px)`,
  },
  paperContainer: {
    rounded: 'true',
    padding: '2%',
    height: 500,
    [theme.breakpoints.up('sm')]: {
      width: 500,
    },
    [theme.breakpoints.down(600)]: {
      width: 350,
    },
    [theme.breakpoints.down(420)]: {
      width: 250,
    },
  },
}));
