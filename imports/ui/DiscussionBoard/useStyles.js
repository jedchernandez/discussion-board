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
  cardCommentContainer: {
    backgroundColor: '#f7f7f7',
    width: '100%',
    padding: '1%',
    margin: '4% 0 4% 0',
    border: '1px solid rgba(66, 103, 178, 0.12)',
    borderTop: '5px solid #4267B2',
  },
  textField: {
    backgroundColor: 'white',
  },
  submit: {
    borderRadius: theme.shape.borderRadius,
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: '1%',
  },
  cardContainer: {
    backgroundColor: '#f7f7f7',
    margin: '0 0 2% 0',
    padding: '1%',
    width: '100%',
    border: '1px solid rgba(66, 103, 178, 0.12)',
    borderTop: '5px solid #4267B2',
  },
  cardContent: {
    margin: 0,
    padding: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
    width: '100%',
  },
}));
