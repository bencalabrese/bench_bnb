var React = require('react'),
    ReactDOM = require('react-dom'),
    Search = require('./components/benches/search');

$(function() {
  ReactDOM.render(<Search/>, document.getElementById('content'));
});
