import { Card, CardContent, Typography } from '@material-ui/core';
import React from 'react';
import { useStyles } from './useStyles';

export const Comment = ({ comment }) => {
  const classes = useStyles();

  return (
    <Card variant="outlined" className={classes.cardContainer} children>
      <CardContent className={classes.cardContent} children>
        <Typography color="textSecondary" variant="caption">
          {comment.emailId}
        </Typography>
        <Typography color="textPrimary" variant="subtitle1">
          <pre className={classes.comment}>{comment.text}</pre>
        </Typography>
      </CardContent>
    </Card>
  );
};
