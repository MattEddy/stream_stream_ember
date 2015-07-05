import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  usgsSite: DS.belongsTo('usgs-site'),
  content: attr('string')
});
