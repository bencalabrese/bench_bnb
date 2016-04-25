var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ClientActions = require('../../actions/client_actions');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return this.blankInput();
  },

  blankInput: function() {
    return {
      description: "",
      seating: "",
      lat: "",
      lng: "",
    };
  },

  handleClick: function(event) {
    event.preventDefault();

    ClientActions.createBench({bench: this.state});
    this.setState(this.blankInput());
  },

  render: function() {
    return (
      <form>
        <label>Description
          <input type="text"
                 valueLink={this.linkState("description")}
                 name="bench[description]"/>
        </label>

        <label>Number of seats
          <input type="text"
                 valueLink={this.linkState("seating")}
                 name="bench[seating]"/>
        </label>

        <label>Latitude
          <input type="text"
                 valueLink={this.linkState("lat")}
                 name="bench[lat]"/>
        </label>

        <label>Longitude
          <input type="text"
                 valueLink={this.linkState("lng")}
                 name="bench[lng]"/>
        </label>

        <input type="submit" onClick={this.handleClick}/>
      </form>
    );
  }

});

module.exports = BenchForm;
