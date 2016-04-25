var ServerActions = require('../actions/server_actions'),
    hashHistory = require('react-router').hashHistory;

var ApiUtil = {
  fetchBenches: function(apiReadyBounds) {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/benches?' + $.param(apiReadyBounds),
      success: function(benches) {
        ServerActions.receiveAll(benches);
      },
    });
  },

  createBench: function(benchParams) {
    $.ajax({
      method: 'POST',
      dataType: 'json',
      url: 'api/benches',
      data: benchParams,
      success: function(bench) {
        hashHistory.push({ pathname: "/" });
      },
    });
  }
};

module.exports = ApiUtil;
