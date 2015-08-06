import Ember from "ember";

export default Ember.Component.extend({
  height: Ember.computed.alias("parentView.height"),
  width: Ember.computed.alias("parentView.width"),
  margin: Ember.computed.alias("parentView.margin"),
  buildLine: function() {
    var x = this.get('x');
    var y = this.get('y');
    return d3.svg.line()
      .x(function(d) {
        return x(Date.parse(d.get('time')));
      })
      .y(function(d) {
        return y(d.get('flow_rate'));
      });
  },
  buildXAxis: function() {
    return d3.svg.axis()
      .scale(this.get('x'))
      .orient("bottom");
  },
  buildYAxis: function() {
    return d3.svg.axis()
      .scale(this.get('y'))
      .orient("left");
  },
  changeStuff: function() {
    if (!Ember.isEmpty(this.get('x'))) {
      this.setXDomain();
      this.setYDomain();
      var line = this.buildLine();
      d3.select('.line')
        .transition()
        .ease("linear")
        .duration(200)
        .attr('d', line(Ember.A(this.get('data'))));

      d3.select(".x.axis")
        .transition()
        .ease("linear")
        .duration(200)
        .call(this.buildXAxis());

      d3.select(".y.axis")
        .transition()
        .duration(2000)
        .call(this.buildYAxis());
    }
    return "";
  }.property('data'),
  setXDomain: function() {
    this.get('x').domain(d3.extent(Ember.A(this.get('data')), function(d) {
      return Date.parse(d.get('time'));
    }));
  },
  setYDomain: function() {
    this.get('y').domain(d3.extent(Ember.A(this.get('data')), function(d) {
      return d.get('flow_rate');
    }));
  },
  draw: function() {
    var data   = Ember.A(this.get('data'));
    var width  = this.get('width') - this.get('margin') * 2;
    var height = this.get('height') - this.get('margin') * 2;
    var svg    = d3.select('#'+this.get('parentView.elementId'));
    var x      = d3.time.scale() .range([0, width]);
    var y      = d3.scale.linear() .range([height, 0]);

    this.set('x', x);
    this.set('y', y);
    this.set('cleanData', data);

    var xAxis = this.buildXAxis();
    var yAxis = this.buildYAxis();

    this.setXDomain();
    this.setYDomain();


    var line = this.buildLine();

    // add x axis
    svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(" + this.get('margin') + "," + height + ")")
      .call(xAxis);

    // add y axis
    svg.append("g")
      .attr("class", "y axis")
      .attr("transform", "translate(" + this.get('margin') + ",0)")
      .call(yAxis);

    svg.append("path")
      .datum(data)
      .attr("class", "line")
      .attr("transform", "translate(" + this.get('margin') + ",0)")
      .attr("d", line);

  }.on('didInsertElement')
});
