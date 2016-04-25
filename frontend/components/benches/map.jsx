var React = require('react'),
    BenchStore = require('../../stores/bench'),
    ClientActions = require('../../actions/client_actions'),
    hashHistory = require('react-router').hashHistory;

var Map = React.createClass({
  markers: [],

  componentDidMount: function() {
    this.listener = BenchStore.addListener(this._onChange);

    var mapDOMNode = this.refs.map;
    var mapOptions = {
      center: { lat: 37.7758, lng: -122.435 },
      zoom: 13
    };

    this.map = new window.google.maps.Map(mapDOMNode, mapOptions);
    this.map.addListener('idle', this.fetchBoundedBenches);

    var self = this;

    this.map.addListener('click', function(event) {
      var lat = event.latLng.lat(),
          lng = event.latLng.lng();

      this._handleClick({lat: lat, lng: lng});
    }.bind(self));
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
    this.clearMarkers();

    BenchStore.all().forEach(function(bench) {
      this.addBenchMarker(bench);
    }.bind(this));
  },

  addBenchMarker: function(bench) {
    var marker = new window.google.maps.Marker({
      position: { lat: bench.lat, lng: bench.lng },
      map: this.map,
      title: bench.description
    });

    this.markers.push(marker);
  },

  clearMarkers: function() {
    this.markers.forEach(function(marker){
      marker.setMap(null);
    });

    this.markers = [];
  },

  _handleClick: function(coords) {
    hashHistory.push({
      pathname: "benches/new",
      query: coords
    });
  },

  render: function() {
    return (
      <div className="map" ref="map"></div>
    );
  }
});

module.exports = Map;
