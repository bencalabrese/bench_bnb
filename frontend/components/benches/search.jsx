var React = require('react'),
    Index = require('./index'),
    Map = require('./map');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Map/>
        <Index/>
      </div>
    );
  }
});

module.exports = Search;
