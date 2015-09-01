import Ember from 'ember';

export default Ember.Service.extend({
  normalizeRange(data, range) {
    var normalizedData = [];
    var indexQuotient  =  data.length / range;

    for (var i = 0; i < range; i++) {
      normalizedData[i] = data[Math.floor(indexQuotient * i)];
    }
    return normalizedData;
  }
});
