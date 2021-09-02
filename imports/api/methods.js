import { check } from 'meteor/check';
import { CommentsCollection } from './../db/collections';

Meteor.methods({
  registerUser({ email, password }) {
    check(email, String);
    check(password, String);

    Accounts.createUser({
      email,
      password,
      profile: { emailId: email.substring(0, email.lastIndexOf('@')) },
    });
  },
});

Meteor.methods({
  postComment({ comment, emailId }) {
    check(comment, String);
    check(emailId, String);

    CommentsCollection.insert({ text: comment.trim(), emailId, createdAt: new Date() });
  },
});
