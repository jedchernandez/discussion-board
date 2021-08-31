import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  gridContainer: {
    padding: 0,
    margin: '1%',
    minHeight: `calc(100vh - 70px)`,
    [theme.breakpoints.down(740)]: {
      width: '98vw',
      height: '98vh',
    },
  },
  paperContainer: {
    rounded: 'true',
    padding: '2%',
    height: 700,
    [theme.breakpoints.up('sm')]: {
      width: 700,
    },
    [theme.breakpoints.down(740)]: {
      width: '98vw',
      height: '98vh',
    },
  },
  gridItemContainer: {
    width: '100%',
    height: '100%',
    overflowY: 'scroll',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  gridItem: {
    width: '100%',
  },
  textFieldContainer: {
    marginBottom: '1%',
  },
  cardContainer: {
    backgroundColor: '#f7f7f7',
    margin: '0 0 2% 0',
    padding: '1%',
    width: 'fit-content',
    border: '2px solid rgba(66, 103, 178, 0.12)',
  },
  cardContent: {
    margin: 0,
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
    width: 'fit-content',
  },
}));
