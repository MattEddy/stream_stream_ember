import Ember from "ember";

export default Ember.Component.extend({
  height: Ember.computed.alias("parentView.height"),
  width: Ember.computed.alias("parentView.width"),
  margin: Ember.computed.alias("parentView.margin"),
  draw: function() {
    var data = Em.A(this.get('data').canonicalState)
    var width  = this.get('width') - this.get('margin') * 2;
    var height = this.get('height') - this.get('margin') * 2;

    var x = d3.time.scale()
      .range([0, width]);

    var xAxis = d3.svg.axis()
      .scale(x)
      .orient("bottom");

    x.domain(d3.extent(data, function(d) {
      return Date.parse(d.get('time'));
    }));

    var svg = d3.select('#'+this.get('parentView.elementId'))

    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + this.get('margin') + "," + height + ")")
      .call(xAxis);
  }.on('didInsertElement')
});
