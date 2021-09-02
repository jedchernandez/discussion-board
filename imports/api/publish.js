import { CommentsCollection } from './../db/collections';

Meteor.publish('postAllComments', () => {
  return CommentsCollection.find();
});
