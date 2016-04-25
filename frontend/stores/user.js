var Store = require('flux/utils').Store,
    UserConstants = require('../constants/user_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    _currentUser = null,
    _authErrors = [],
    UserStore = new Store(dispatcher);

// API
UserStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case UserConstants.RECEIVE_CURRENT_USER:
      _currentUser = payload.currentUser;
      this.__emitChange();
      break;
  }
};

UserStore.currentUser = function() {
  return _currentUser;
};

UserStore.authErrors = function() {
  return _authErrors.slice();
};

// private

module.exports = UserStore;
