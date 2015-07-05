import Ember from "ember";

export default Ember.Controller.extend({
  days: 200,
  data: Ember.computed.alias('model.canonicalState'),
  normalizeLength: function() {
    var data           = this.get('data').slice(0, this.get('days'));
    var normalizedData = new Array(98)
    var indexQuotient  =  this.get('days') / 100;
    for (var i = 0; i < normalizedData.length; i++) {
      normalizedData[i] = data[Math.floor(indexQuotient * i)]
    }
    return normalizedData;
  },
  scopedData: function() {
    return this.normalizeLength();
  }.property('days')
});
