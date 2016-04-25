var ServerActions = require('../actions/server_actions');

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
        console.log("Created the below bench");
        console.log(bench);
      },
    });
  }
};

module.exports = ApiUtil;
