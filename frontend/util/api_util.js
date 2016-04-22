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
  }
};

module.exports = ApiUtil;
