var React = require('react'),
    ReactDOM = require('react-dom');

var ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    hashHistory = ReactRouter.hashHistory;

var Search = require('./components/benches/search'),
    BenchForm = require('./components/benches/bench_form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <header><h1>Bench BnB</h1></header>
        {this.props.children}
      </div>
    );
  }
});

var appRouter = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Search}/>
      <Route path="benches/new" component={BenchForm}/>
    </Route>
  </Router>
);



$(function() {
  ReactDOM.render(appRouter, document.getElementById('content'));
});


var UserActions = require('./actions/user_actions');
window.UserActions = UserActions;
var UserStore = require('./stores/user');
window.UserStore = UserStore;
