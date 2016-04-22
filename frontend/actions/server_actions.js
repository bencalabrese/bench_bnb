var BenchConstants = require('../constants/bench_constants'),
    dispatcher = require('../dispatcher/dispatcher');

var ServerActions = {
  receiveAll: function(benches) {
    dispatcher.dispatch({
      actionType: BenchConstants.BENCHES_RECEIVED,
      benches: benches
    });
  }
};

module.exports = ServerActions;
