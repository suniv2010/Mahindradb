/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
    id:{
      type: 'string',
      columnName: '_id'
    },
    "username": {
      type: 'string'},
    "usertype":{
      type: 'string'},
    "status": {
      type: 'string'},
    "activationdate": {
      type: 'string'},
    "initiator": {
      type: 'string'},
    "approver": {
      type: 'string'},
    "head": {
      type: 'string'}
  }
};
