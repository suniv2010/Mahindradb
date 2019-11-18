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
      type: 'string'
    },
    "password": {type:'string'},
    "confirmpassword": {type:'string'},
    "emailid": {type:'string'},
    "mobile": {type:'number'},
    "assignaccess": {type: 'json',
    columnType: 'array'}
   
  }
};
