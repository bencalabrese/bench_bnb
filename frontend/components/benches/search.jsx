var React = require('react'),
    Index = require('./index'),
    Map = require('./map');

var Search = React.createClass({
  render: function() {
    return (
      <div>
        <Index/>
        <Map/>
      </div>
    );
  }
});

module.exports = Search;
