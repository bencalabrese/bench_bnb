var UserServerActions = require('../actions/user_server_actions'),
    hashHistory = require('react-router').hashHistory;

var UserApiUtil = {
  fetchCurrentUser: function() {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/user',
      success: function(user) {
        // UserServerActions.receiveCurrentUser(user);
        console.log("success");
        console.log(user.username);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
  },

  login: function(credentials) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/session',
      data: credentials,
      success: function(currentUser) {
        console.log(currentUser);
        console.log("success");
        console.log(currentUser.username);
        // UserServerActions.receiveCurrentUser(user);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
  },

  logout: function() {
    $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: 'api/session',
      success: function() {
        console.log("logged out");
      },
      error: function(errors) {
        console.log(errors);
      }
    });
  },

  create: function(credentials) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/user',
      data: credentials,
      success: function(currentUser) {
        console.log(currentUser);
      },
      error: function(errors) {
        console.log(errors);
      }
    });
  },

  destroy: function() {
    $.ajax({
      method: 'DELETE',
      dataType: 'json',
      url: 'api/user',
      success: function() {
        console.log("successfully deleted account");
      },
      error: function(errors) {
        console.log(errors);
      }
    });
  }
};

module.exports = UserApiUtil;
