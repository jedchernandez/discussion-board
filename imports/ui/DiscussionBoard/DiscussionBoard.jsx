import { Box, Button, Card, CardContent, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './useStyles';

export const DiscussionBoard = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      wrap="nowrap"
      justifyContent="space-around"
      alignItems="center"
      component="main"
      overflow="auto"
      className={classes.gridContainer}
    >
      <CssBaseline />
      <Paper elevation={10} variant="elevation" className={classes.paperContainer} children>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          alignItems="center"
          justifyContent="flex-start"
          overflow="auto"
          className={classes.gridItemContainer}
        >
          <Grid item className={classes.gridItem}>
            <Typography align="center" color="primary" variant="h4">
              Discussion Board
            </Typography>
          </Grid>
          <Card variant="outlined" className={classes.cardCommentContainer} children>
            <Grid item className={classes.gridItem}>
              <TextField
                id="email"
                placeholder="Write a comment..."
                size="medium"
                fullWidth
                margin="none"
                color="primary"
                variant="outlined"
                autoFocus
                multiline
                rows={4}
                className={classes.textField}
              />
            </Grid>
            <Box width="100%" display="flex" justifyContent="flex-end">
              <Button size="small" type="submit" color="primary" variant="contained" className={classes.submit}>
                Post Comment
              </Button>
            </Box>
          </Card>
          <Grid item className={classes.gridItem}>
            <Card variant="outlined" className={classes.cardContainer} children>
              <CardContent className={classes.cardContent} children>
                <Typography variant="body2">User Email Id#1</Typography>
                <Typography variant="body1">User Comment#1</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Card variant="outlined" className={classes.cardContainer} children>
              <CardContent className={classes.cardContent} children>
                <Typography variant="body2">User Email Id#2</Typography>
                <Typography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus repudiandae porro vero suscipit.
                  Doloremque quaerat itaque ea praesentium commodi earum repellendus enim quod amet cum perspiciatis,
                  accusamus hic atque labore.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
