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
  return Object.assign({}, _benches);
};

// private
function resetBenches(newBenches) {
  _benches = newBenches;
}

module.exports = BenchStore;
