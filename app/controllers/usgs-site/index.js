import Ember from "ember";

export default Ember.Controller.extend({
  days: 200,
  normalizeLength: function() {
    var data           = this.get('model').slice(0, this.get('days'));
    var normalizedData = [];
    var indexQuotient  =  this.get('days') / 100;
    for (var i = 0; i < 98; i++) {
      normalizedData[i] = data[Math.floor(indexQuotient * i)];
    }
    return normalizedData;
  },
  scopedData: function() {
    return this.normalizeLength();
  }.property('days')
});
