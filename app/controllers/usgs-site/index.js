import Ember from "ember";

export default Ember.Controller.extend({
  days: 200,
  normalizer: Ember.inject.service(),
  scopedData: function() {
    var dataSet = this.get('model').slice(0, this.get('days'));
    var desiredLength   = 100;
    return this.get('normalizer').normalizeRange(dataSet, desiredLength);
  }.property('days')
});
