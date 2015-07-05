import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  measurements: DS.hasMany('measurement', {async: true}),
  name:         attr('string')
});
