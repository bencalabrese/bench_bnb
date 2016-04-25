var UserConstants = require('../constants/user_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  receiveAll: function(currentUser) {
    dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  displayErrors: function(errors) {
    dispatcher.dispatch({
      actionType: UserConstants.DISPLAY_AUTH_ERRORS,
      errors: errors
    });
  },

  // receiveAll: function(currentUser) {
  //   dispatcher.dispatch({
  //     actionType: UserConstants.RECEIVE_CURRENT_USER,
  //     currentUser: currentUser
  //   });
  // },
  //
  // receiveAll: function(currentUser) {
  //   dispatcher.dispatch({
  //     actionType: UserConstants.RECEIVE_CURRENT_USER,
  //     currentUser: currentUser
  //   });
  // },
  //
  // receiveAll: function(currentUser) {
  //   dispatcher.dispatch({
  //     actionType: UserConstants.RECEIVE_CURRENT_USER,
  //     currentUser: currentUser
  //   });
  // },
  //
  // receiveAll: function(currentUser) {
  //   dispatcher.dispatch({
  //     actionType: UserConstants.RECEIVE_CURRENT_USER,
  //     currentUser: currentUser
  //   });
  // },

};

module.exports = ServerActions;
