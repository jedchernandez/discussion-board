import { Mongo } from 'meteor/mongo';

export const Users = new Mongo.Collection('users');

export const Comments = new Mongo.Collection('comments');
