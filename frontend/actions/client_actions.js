var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBenches: function(apiReadyBounds) {
    ApiUtil.fetchBenches(apiReadyBounds);
  }
};

module.exports = ClientActions;
