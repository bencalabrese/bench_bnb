var ServerActions = require('../actions/server_actions');

var ApiUtil = {
  fetchBenches: function() {
    $.ajax({
      method: 'GET',
      dataType: 'json',
      url: 'api/benches',
      success: function(benches) {
        ServerActions.receiveAll(benches);
      }
    });
  }
};

module.exports = ApiUtil;
