var Store = require('flux/utils').Store,
    BenchConstants = require('../constants/bench_constants'),
    dispatcher = require('../dispatcher/dispatcher'),
    _benches = {},
    BenchStore = new Store(dispatcher);

// API
BenchStore.__onDispatch = function(payload) {
  switch (payload.actionType) {
    case BenchConstants.BENCHES_RECEIVED:
      resetBenches(payload.benches);
      this.__emitChange();
      break;
  }
};

BenchStore.all = function() {
  var result = [];

  Object.keys(_benches).forEach(function(id) {
    result.push(_benches[id]);
  });

  return result;
};

// private
function resetBenches(newBenches) {
  _benches = {};

  newBenches.forEach(function(bench) {
    _benches[bench.id] = bench;
  });
}

module.exports = BenchStore;
