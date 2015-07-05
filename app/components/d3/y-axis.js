import Ember from "ember";

export default Ember.Component.extend({
  height: Ember.computed.alias("parentView.height"),
  width: Ember.computed.alias("parentView.width"),
  margin: Ember.computed.alias("parentView.margin"),
  draw: function() {
    var data = Em.A(this.get('data').canonicalState)
    var width  = this.get('width') - this.get('margin') * 2;
    var height = this.get('height') - this.get('margin') * 2;

    var y = d3.scale.linear()
      .range([height, 0]);

    var yAxis = d3.svg.axis()
      .scale(y)
      .orient("left");

    y.domain(d3.extent(data, function(d) { return d.get('flow_rate'); }));

    var svg = d3.select('#'+this.get('parentView.elementId'))

    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + this.get('margin') + ",0)")
      .call(yAxis)
  }.on('didInsertElement')
});
