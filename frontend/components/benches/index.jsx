var React = require('react'),
    BenchStore = require('../../stores/bench');

var Index = React.createClass({
  getInitialState: function() {
    return { benches: BenchStore.all() };
  },

  componentDidMount: function() {
    this.listener = BenchStore.addListener(this._onChange);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    this.setState({ benches: BenchStore.all() });
  },

  render: function() {
    var benchLIs = this.state.benches.map(function(bench) {
      return <li key={bench.id}>{bench.description}</li>;
    });

    return (
      <ul>
        {benchLIs}
      </ul>
    );
  }
});

module.exports = Index;
