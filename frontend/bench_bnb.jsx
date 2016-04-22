var React = require('react'),
    ReactDOM = require('react-dom'),
    Index = require('./components/benches/index');

$(function() {
  ReactDOM.render(<Index/>, document.getElementById('content'));
});
