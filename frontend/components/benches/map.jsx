var React = require('react'),
    BenchStore = require('../../stores/bench'),
    ClientActions = require('../../actions/client_actions');

var Map = React.createClass({
  componentDidMount: function() {
    this.listener = BenchStore.addListener(this._onChange);

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new window.google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.fetchBoundedBenches);
  },

  fetchBoundedBenches: function(event) {
    var apiReadyBounds = { bounds: {} },
        bounds = this.map.getBounds(),
        northEast = bounds.getNorthEast(),
        southWest = bounds.getSouthWest();

    apiReadyBounds.bounds.northEast = {
      lat: northEast.lat(),
      lng: northEast.lng()
    };

    apiReadyBounds.bounds.southWest = {
      lat: southWest.lat(),
      lng: southWest.lng()
    };

    ClientActions.fetchBenches(apiReadyBounds);
  },

  componentWillUnmount: function() {
    this.listener.remove();
  },

  _onChange: function() {
    BenchStore.all().forEach(function(bench) {
      new window.google.maps.Marker({
        position: { lat: bench.lat, lng: bench.lng },
        map: this.map,
        title: bench.description
      });
    }.bind(this));
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
