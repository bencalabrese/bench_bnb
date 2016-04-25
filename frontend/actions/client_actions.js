var ApiUtil = require('../util/api_util');

var ClientActions = {
  fetchBenches: function(apiReadyBounds) {
    ApiUtil.fetchBenches(apiReadyBounds);
  },

  createBench: function(benchParams) {
    ApiUtil.createBench(benchParams);
  }
};

module.exports = ClientActions;
