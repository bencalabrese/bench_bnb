var Store = require('flux/utils').Store,
    dispatcher = require('../dispatcher/dispatcher'),
    _benches = {},
    BenchStore = new Store(dispatcher);

// API
BenchStore.all = function() {
  return Object.assign({}, _benches);
};

// private
console.log("I'm a bench");

module.exports = BenchStore;
