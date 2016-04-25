var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      description: "",
      numSeats: "",
      lat: "",
      lng: "",
    };
  },

  render: function() {
    return (
      <form>
        <label>Description
          <input type="text" valueLink={this.linkState("description")}/>
        </label>

        <label>Number of seats
          <input type="text" valueLink={this.linkState("numSeats")}/>
        </label>

        <label>Latitude
          <input type="text" valueLink={this.linkState("lat")}/>
        </label>

        <label>Longitude
          <input type="text" valueLink={this.linkState("lng")}/>
        </label>

        <input type="submit"/>
      </form>
    );
  }

});

module.exports = BenchForm;
