import { Box, Button, Card, CssBaseline, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CommentsCollection } from '../../db/collections';
import { Comment } from './Comment';
import { useStyles } from './useStyles';

export const DiscussionBoard = () => {
  Meteor.subscribe('postAllComments');

  const classes = useStyles();
  const history = useHistory();
  const user = useTracker(() => Meteor.user());

  if (!user) {
    history.push('/');
  }

  const [comment, setComment] = React.useState('');
  const comments = useTracker(() => CommentsCollection.find({}, { sort: { createdAt: -1 } }).fetch());

  const handleCommentSubmit = (event) => {
    event.preventDefault();

    if (!comment) return;
    Meteor.call('postComment', { comment, emailId: user.profile.emailId });

    setComment('');
  };

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
          <Grid item className={classes.gridItem}>
            <form onSubmit={handleCommentSubmit}>
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
                    name="email"
                    autoFocus
                    multiline
                    rows={4}
                    className={classes.textField}
                    value={comment}
                    onChange={(event) => setComment(event.target.value)}
                  />
                </Grid>
                <Box width="100%" display="flex" justifyContent="flex-end">
                  <Button size="small" type="submit" color="primary" variant="contained" className={classes.submit}>
                    Post Comment
                  </Button>
                </Box>
              </Card>
            </form>
          </Grid>
          <Grid item className={classes.gridItem}>
            {comments.map((comment) => (
              <Comment key={comment._id} comment={comment} />
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};
