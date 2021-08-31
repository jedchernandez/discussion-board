import { Card, CardContent, Button, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
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
              Welcome to the Discussion Board!
            </Typography>
          </Grid>
          <Grid item className={`${classes.gridItem} ${classes.textFieldContainer}`}>
            <TextField
              id="email"
              placeholder="Write a comment..."
              size="medium"
              fullWidth
              margin="normal"
              color="primary"
              variant="outlined"
              multiline
              rows={4}
            />
          </Grid>
          <Grid item className={classes.gridItem}>
            <Card variant="outlined" className={classes.cardContainer} children>
              <CardContent className={classes.cardContent} children>
                <Typography>User Email Id#1</Typography>
                <Typography>User Comment#1</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item className={classes.gridItem}>
            <Card variant="outlined" className={classes.cardContainer} children>
              <CardContent className={classes.cardContent} children>
                <Typography>User Email Id#2</Typography>
                <Typography>
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
